'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');
var path = require('path');
var colors = require('picocolors');
var shortcuts = require('./shortcuts.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var colors__default = /*#__PURE__*/_interopDefaultLegacy(colors);

const queryViteVersion = (path) => {
  const pkg = fs.readFileSync(path, "utf-8");
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
      const path$1 = path.join(server.config.root, "package.json");
      const version = queryViteVersion(path$1);
      const _printUrls = server.printUrls;
      server.printUrls = () => {
        _printUrls();
        if (version === 3) {
          server.config.logger.info(
            colors__default["default"].dim(colors__default["default"].green("  \u279C")) + colors__default["default"].dim("  press ") + colors__default["default"].bold("h") + colors__default["default"].dim(" to show help")
          );
        }
        if (version === 2) {
          server.config.logger.info(
            colors__default["default"].dim("  > help:") + colors__default["default"].dim("     press ") + colors__default["default"].bold("h") + colors__default["default"].dim(" to show help")
          );
        }
      };
      return () => {
        shortcuts.bindShortcuts(server, shortcutsOptions);
      };
    }
  };
}

exports.shortcutsPlugin = shortcutsPlugin;
