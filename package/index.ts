import { readFileSync } from 'fs';
import { join } from 'path';
import colors from 'picocolors';
import { bindShortcuts } from './shortcuts';
import type { Plugin, ViteDevServer } from 'vite';
import type { CLIShortcut } from './shortcuts';

export type DefaultShortCut = 'c' | 'q' | 'o' | 's' | 'r' | 'u';
export interface ShortcutsOptions {
  /**
   * @description default `Plugin Shortcuts`
   */
  outputName?: string;
  defaults?: boolean | DefaultShortCut[];
  shortcuts?: CLIShortcut[];
}
/**
 * 查询版本号
 * @param path
 * @returns
 */
const queryViteVersion = (path: string) => {
  const pkg = readFileSync(path, 'utf-8');
  let version = 4;
  if (pkg) {
    try {
      version =
        JSON.parse(pkg)?.devDependencies?.vite?.match(
          /^[^\d]*(?<version>[0-9])/
        ).groups?.version || 4;
    } catch (error) {}
  }
  return Number(version);
};

export function shortcutsPlugin(shortcutsOptions?: ShortcutsOptions): Plugin {
  return {
    name: 'shortcuts',
    apply: 'serve',
    configureServer: (server: ViteDevServer) => {
      const path = join(server.config.root, 'package.json');
      const version = queryViteVersion(path);
      const _printUrls = server.printUrls;

      // 改写printUrls 方法
      // https://github.com/kinfuy/vite-plugin-shortcuts/issues/1
      server.printUrls = () => {
        _printUrls();
        if (version === 3) {
          server.config.logger.info(
            colors.dim(colors.green('  ➜')) +
              colors.dim('  press ') +
              colors.bold('h') +
              colors.dim(' to show help')
          );
        }
        if (version === 2) {
          server.config.logger.info(
            colors.dim('  > help:') +
              colors.dim('     press ') +
              colors.bold('h') +
              colors.dim(' to show help')
          );
        }
      };

      return () => {
        bindShortcuts(server, shortcutsOptions);
      };
    },
  };
}
