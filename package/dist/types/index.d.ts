import type { Plugin } from 'vite';
import type { CLIShortcut } from './shortcuts';
export declare type DefaultShortCut = 'c' | 'q' | 'o' | 's' | 'r' | 'u';
export interface ShortcutsOptions {
    outputName?: string;
    defaults?: boolean | DefaultShortCut[];
    shortcuts?: CLIShortcut[];
}
export declare function shortcutsPlugin(shortcutsOptions?: ShortcutsOptions): Plugin;
