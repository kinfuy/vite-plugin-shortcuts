import { series } from 'gulp';
import { run, withTask } from '@alqmc/build-utils';
import { buildBundle } from './build';
export default series(
  withTask('clear', () => run('pnpm run clear')),
  // withTask('update:version', () => run('pnpm run update:version')),
  buildBundle
);
