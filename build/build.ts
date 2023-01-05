import { resolve } from 'path';
import { buildTypescriptLib } from '@alqmc/build-ts';
import { enterPath, outputPath, rootPath } from './path';
import type { DefineTsConfig } from '@alqmc/build-ts';

const buildConfig: DefineTsConfig = {
  baseOptions: {
    input: resolve(enterPath, 'index.ts'),
    outPutPath: outputPath,
    enterPath,
    pkgPath: resolve(enterPath, 'package.json'),
    tsConfigPath: resolve(rootPath, 'tsconfig.json'),
  },
};

export const buildBundle = async () => {
  return buildTypescriptLib(buildConfig);
};
