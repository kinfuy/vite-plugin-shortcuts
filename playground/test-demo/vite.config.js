import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { shortcutsPlugin } from 'vite-plugin-shortcuts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    shortcutsPlugin({
      outputName: '自定义快捷键',
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
            server.config.logger.clearScreen('error'), server.printUrls();
          },
        },
        {
          key: 'r',
          description: 'restart the server',
          async action(server) {
            await server.restart();
          },
        },
        {
          key: 'u',
          description: 'show server url',
          action(server) {
            server.config.logger.info('');
            server.printUrls();
          },
        },
        {
          key: 'q',
          description: 'quit',
          async action(server) {
            await server.close().finally(() => process.exit());
          },
        },
      ],
    }),
  ],
  server: {
    host: 'localhost',
    port: 3000,
  },
});
