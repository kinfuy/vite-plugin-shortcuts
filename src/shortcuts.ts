import colors from 'picocolors';
import type { ViteDevServer } from 'vite';

export function isDefined<T>(value: T | undefined | null): value is T {
  return value != null;
}

export type BindShortcutsOptions = {
  /**
   * Print a one line hint to the terminal.
   */
  print?: boolean;
  customShortcuts?: (CLIShortcut | undefined | null)[];
};

export type CLIShortcut = {
  key: string;
  description: string;
  action(server: ViteDevServer): void | Promise<void>;
};

export function bindShortcuts(server: ViteDevServer, opts?: BindShortcutsOptions): void {
  if (!server.httpServer || !process.stdin.isTTY || process.env.CI) {
    return;
  }

  const shortcuts = (opts?.customShortcuts ?? []).filter(isDefined).concat(BASE_SHORTCUTS);

  let actionRunning = false;

  const onInput = async (input: string) => {
    // ctrl+c or ctrl+d
    if (input === '\x03' || input === '\x04') {
      process.emit('SIGTERM')
      // process.exit(1);
    }

    if (actionRunning) return;

    if (input === 'h') {
      server.config.logger.info(
        [
          '',
          colors.bold('  Plugin Shortcuts'),
          ...shortcuts.map((shortcut) => colors.dim('  press ') + colors.bold(shortcut.key) + colors.dim(` to ${shortcut.description}`)),
        ].join('\n')
      );
    }

    const shortcut = shortcuts.find((shortcut) => shortcut.key === input);
    if (!shortcut) return;

    actionRunning = true;
    await shortcut.action(server);
    actionRunning = false;
  };

  process.stdin.setRawMode(true);

  process.stdin.on('data', onInput).setEncoding('utf8').resume();

  server.httpServer.on('close', () => {
    process.stdin.off('data', onInput).pause();
  });
}

const BASE_SHORTCUTS: CLIShortcut[] = [
  {
    key: 'c',
    description: 'clear console',
    action(server) {
      server.config.logger.clearScreen('error');
    },
  },
];