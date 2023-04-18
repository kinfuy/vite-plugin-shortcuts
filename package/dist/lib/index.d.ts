import type { Plugin } from 'vite';
import type { CLIShortcut } from './shortcuts';
export interface ShortcutsOptions {
    outputName?: string;
    shortcuts: CLIShortcut[];
}
export declare function shortcutsPlugin(shortcutsOptions?: ShortcutsOptions): Plugin;
