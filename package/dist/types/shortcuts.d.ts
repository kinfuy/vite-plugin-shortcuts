import type { ShortcutsOptions } from './index';
import type { ViteDevServer } from 'vite';
export declare function isDefined<T>(value: T | undefined | null): value is T;
export declare type CLIShortcut = {
    key: string;
    description: string;
    action(server: ViteDevServer): void | Promise<void>;
};
export declare function bindShortcuts(server: ViteDevServer, opts?: ShortcutsOptions): void;
