import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
import { vueI18nPlugin } from './CustomBlockPlugin';
import { shortcutsPlugin } from '../../dist';

export default defineConfig({
  resolve: {
    alias: {
      '/@': __dirname,
      '@': __dirname,
    },
  },
  plugins: [
    shortcutsPlugin({
      dealWithctrl: false,
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
      ],
    }),
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
