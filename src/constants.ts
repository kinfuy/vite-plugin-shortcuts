import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export const VITE_PACKAGE_DIR = resolve(
    // import.meta.url is `dist/node/constants.js` after bundle
    fileURLToPath(import.meta.url),
    '../../..',
  )
  