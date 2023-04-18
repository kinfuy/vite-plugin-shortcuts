import * as readline from 'readline';
import colors from 'picocolors';

function isDefined(value) {
  return value != null;
}
function bindShortcuts(server, opts) {
  if (!server.httpServer || !process.stdin.isTTY || process.env.CI) {
    return;
  }
  const shortcuts = (opts?.shortcuts ?? []).filter(isDefined).concat(BASE_SHORTCUTS);
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
const BASE_SHORTCUTS = [];

export { bindShortcuts, isDefined };
