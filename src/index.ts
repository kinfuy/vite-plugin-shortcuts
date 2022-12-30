import { Plugin, ViteDevServer } from 'vite';
import { bindShortcuts, CLIShortcut } from './shortcuts';

let started = false;

export function shortcutsPlugin(shortcutsOptions: CLIShortcut[]): Plugin {
  return {
    name: 'shortcuts',
    apply: 'serve',
    configureServer: (server: ViteDevServer) => {
      return () => {
        if (started) return;
        bindShortcuts(server, { print: true, customShortcuts: shortcutsOptions });
        started = true;
      };
    },
  };
}
