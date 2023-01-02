# vite-plugin-shortcuts

Add additional customized shortcut key population for vite4. If it is vite3, add shortcut key function

<p>
  <a href="https://www.npmjs.org/package/vite-plugin-shortcuts">
  <img src="https://img.shields.io/npm/v/vite-plugin-shortcuts.svg">
  </a>
  <br>
</p>

简体中文 | [简体中文 English](./README.md)

## Installation

```sh
pnpm add vite-plugin-shortcuts
```

## Usage

```ts
import { defineConfig } from 'vite';
import { shortcutsPlugin } from 'vite-plugin-shortcuts';

export default defineConfig({
  plugins: [
    shortcutsPlugin({
      shortcuts: [
        {
          key: 'c',
          description: 'close console',
          action: (server) => {
            server.config.logger.clearScreen('error');
          },
        },
        {
          key: 's',
          description: 'reset console',
          action: (server) => {
            server.config.logger.clearScreen('error');
            server.printUrls();
          },
        },
        // {
        //   key: 'r',
        //   description: 'restart the server',
        //   async action(server) {
        //     await server.restart();
        //   },
        // },
        // {
        //   key: 'u',
        //   description: 'show server url',
        //   action(server) {
        //     server.config.logger.info('');
        //     server.printUrls();
        //   },
        // },
        // {
        //   key: 'q',
        //   description: 'quit',
        //   async action(server) {
        //     await server.close().finally(() => process.exit());
        //   },
        // },
      ],
    }),
  ],
});
```
