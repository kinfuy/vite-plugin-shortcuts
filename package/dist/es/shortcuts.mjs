import * as readline from 'readline';
import { exec } from 'child_process';
import colors from 'picocolors';

function isDefined(value) {
  return value != null;
}
function bindShortcuts(server, opts) {
  if (!server.httpServer || !process.stdin.isTTY || process.env.CI) {
    return;
  }
  const shortcuts = (opts?.shortcuts ?? []).filter(isDefined);
  if (opts?.defaults) {
    if (typeof opts.defaults === "boolean") {
      BASE_SHORTCUTS.forEach((d) => {
        if (shortcuts.every((s) => s.key !== d.key)) {
          shortcuts.push(d);
        }
      });
    }
    if (Array.isArray(opts.defaults)) {
      BASE_SHORTCUTS.forEach((d) => {
        if (opts.defaults.includes(
          d.key
        ) && shortcuts.every((s) => s.key !== d.key)) {
          shortcuts.push(d);
        }
      });
    }
  }
  if (shortcuts.length === 0) {
    server.config.logger.warn(
      colors.yellow("No additional shortcut keys configured")
    );
    return;
  }
  let actionRunning = false;
  const onInput = async (input) => {
    if (input === "" || input === "") {
      await server.close().finally(() => process.exit(1));
      return;
    }
    if (actionRunning)
      return;
    const outputName = opts?.outputName ? opts.outputName : `Plugin Shortcuts`;
    if (input === "h") {
      server.config.logger.info(
        [
          "",
          colors.bold(`  ${outputName}`),
          ...shortcuts.map(
            (shortcut2) => colors.dim("  press ") + colors.bold(shortcut2.key) + colors.dim(` to ${shortcut2.description}`)
          )
        ].join("\n")
      );
    }
    const shortcut = shortcuts.find((shortcut2) => shortcut2.key === input);
    if (!shortcut)
      return;
    actionRunning = true;
    await shortcut.action(server);
    actionRunning = false;
  };
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.on("data", onInput).setEncoding("utf8").resume();
  server.httpServer.on("close", () => {
    process.stdin.off("data", onInput).pause();
  });
}
const BASE_SHORTCUTS = [
  {
    key: "c",
    description: "close console",
    action: (server) => {
      server.config.logger.clearScreen("error");
    }
  },
  {
    key: "s",
    description: "reset console",
    action: (server) => {
      server.config.logger.clearScreen("error"), server.printUrls();
    }
  },
  {
    key: "r",
    description: "restart the server",
    async action(server) {
      await server.restart();
    }
  },
  {
    key: "u",
    description: "show server url",
    action(server) {
      server.config.logger.info("");
      server.printUrls();
    }
  },
  {
    key: "q",
    description: "quit",
    async action(server) {
      await server.close().finally(() => process.exit());
    }
  },
  {
    key: "o",
    description: "open default browser",
    async action(server) {
      if (server.openBrowser)
        server.openBrowser();
      else if (server.resolvedUrls?.local) {
        openBrowser(server.resolvedUrls?.local[0]);
      }
    }
  }
];
const openBrowser = (url, app = "chrome") => {
  try {
    exec(`start ${app} ${url}`);
  } catch (error) {
    console.error(error);
  }
};

export { bindShortcuts, isDefined, openBrowser };
