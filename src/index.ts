import { Plugin, ViteDevServer } from 'vite';
import { bindShortcuts, CLIShortcut } from './shortcuts';

let started = false;

export interface ShortcutsOptions {
  /**
   *  ctrl+c or ctrl+d
   * @description  default use process.exit(1) exit 
   */
  dealWithctrl?: boolean | ((server:ViteDevServer)=>void)
  shortcuts: CLIShortcut[];
}

export function shortcutsPlugin(shortcutsOptions?: ShortcutsOptions): Plugin {
  return {
    name: 'shortcuts',
    apply: 'serve',
    configureServer: (server: ViteDevServer) => {
      return () => {
        if (started) return;
        bindShortcuts(server, shortcutsOptions);
        started = true;
      };
    },
  };
}
