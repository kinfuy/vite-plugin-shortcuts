import { resolve } from 'path';
export const rootPath = resolve(__dirname, '..');
export const enterPath = resolve(rootPath, 'package');
export const outputPath = resolve(enterPath, 'dist');
