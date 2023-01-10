import { bindShortcuts } from './shortcuts';
import type { Plugin, ViteDevServer } from 'vite';
import type { CLIShortcut } from './shortcuts';

export interface ShortcutsOptions {
  /**
   * @description default `Plugin Shortcuts`
   */
  outputName?: string;
  shortcuts: CLIShortcut[];
}

export function shortcutsPlugin(shortcutsOptions?: ShortcutsOptions): Plugin {
  return {
    name: 'shortcuts',
    apply: 'serve',
    configureServer: (server: ViteDevServer) => {
      return () => {
        bindShortcuts(server, shortcutsOptions);
      };
    },
  };
}
