import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import { shortcutsPlugin } from 'vite-plugin-shortcuts';
import { vueI18nPlugin } from './CustomBlockPlugin';

export default defineConfig({
  resolve: {
    alias: {
      '/@': __dirname,
      '@': __dirname,
    },
  },
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
    }) as any,
    vuePlugin({
      // reactivityTransform: true,
    }),
    splitVendorChunkPlugin(),
    vueI18nPlugin,
  ],
  build: {
    // to make tests faster
    minify: false,
    rollupOptions: {
      output: {
        // Test splitVendorChunkPlugin composition
        manualChunks(id) {
          if (id.includes('src-import')) {
            return 'src-import';
          }
        },
      },
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
