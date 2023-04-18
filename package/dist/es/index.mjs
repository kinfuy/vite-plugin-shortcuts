import { readFileSync } from 'fs';
import { join } from 'path';
import colors from 'picocolors';
import { bindShortcuts } from './shortcuts.mjs';

const queryViteVersion = (path) => {
  const pkg = readFileSync(path, "utf-8");
  let version = 4;
  if (pkg) {
    try {
      version = JSON.parse(pkg)?.devDependencies?.vite?.match(
        /^[^\d]*(?<version>[0-9])/
      ).groups?.version || 4;
    } catch (error) {
    }
  }
  return Number(version);
};
function shortcutsPlugin(shortcutsOptions) {
  return {
    name: "shortcuts",
    apply: "serve",
    configureServer: (server) => {
      const path = join(server.config.root, "package.json");
      const version = queryViteVersion(path);
      const _printUrls = server.printUrls;
      server.printUrls = () => {
        _printUrls();
        if (version === 3) {
          server.config.logger.info(
            colors.dim(colors.green("  \u279C")) + colors.dim("  press ") + colors.bold("h") + colors.dim(" to show help")
          );
        }
        if (version === 2) {
          server.config.logger.info(
            colors.dim("  > help:") + colors.dim("     press ") + colors.bold("h") + colors.dim(" to show help")
          );
        }
      };
      return () => {
        bindShortcuts(server, shortcutsOptions);
      };
    }
  };
}

export { shortcutsPlugin };
