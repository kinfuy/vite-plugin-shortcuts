# vite-plugin-shortcuts

Add additional customized shortcut key population for vite4. If the current version of vite does not support shortcut keys, add the shortcut key function

<p>
  <a href="https://www.npmjs.org/package/vite-plugin-shortcuts">
  <img src="https://img.shields.io/npm/v/vite-plugin-shortcuts.svg">
  </a>
  <br>
</p>

English | [简体中文](./README-zh_CN.md)

## Demo

### vite4

![vite4](https://user-images.githubusercontent.com/37766068/235663282-c94f23d9-cb84-429b-94e1-625620bc1b01.png)

### vite3

![vite3](https://user-images.githubusercontent.com/37766068/235663330-8d416b95-c4e4-4824-8086-a653d62f6a42.png)

### vite2

![vite2](https://user-images.githubusercontent.com/37766068/235663376-9a56c8e7-994e-48e9-b175-a7722dc7d94e.png)

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
