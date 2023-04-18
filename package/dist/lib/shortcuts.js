'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var readline = require('readline');
var colors = require('picocolors');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var readline__namespace = /*#__PURE__*/_interopNamespace(readline);
var colors__default = /*#__PURE__*/_interopDefaultLegacy(colors);

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
      colors__default["default"].yellow("No additional shortcut keys configured")
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
          colors__default["default"].bold(`  ${outputName}`),
          ...shortcuts.map(
            (shortcut2) => colors__default["default"].dim("  press ") + colors__default["default"].bold(shortcut2.key) + colors__default["default"].dim(` to ${shortcut2.description}`)
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
  readline__namespace.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.on("data", onInput).setEncoding("utf8").resume();
  server.httpServer.on("close", () => {
    process.stdin.off("data", onInput).pause();
  });
}
const BASE_SHORTCUTS = [];

exports.bindShortcuts = bindShortcuts;
exports.isDefined = isDefined;
