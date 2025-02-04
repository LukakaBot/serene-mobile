import { defineConfig } from "vite";
import UniManifest from '@uni-helper/vite-plugin-uni-manifest';
import UniPages from '@uni-helper/vite-plugin-uni-pages';
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts';
import uni from "@dcloudio/vite-plugin-uni";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from '@uni-helper/vite-plugin-uni-components';
import AutoImport from 'unplugin-auto-import/vite';
import uniPolyfill from 'vite-plugin-uni-polyfill';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const UnoCSS = (await import('unocss/vite')).default

  return {
    plugins: [
      UniManifest(),
      UniLayouts(),
      UniPages({
        dts: 'src/typings/uni-pages.d.ts',
      }),
      uni(),
      vueJsx(),
      UnoCSS(),
      Components(),
      AutoImport({
        imports: ['vue', 'uni-app'],
        dts: 'src/typings/auto-imports.d.ts',
        dirs: ['src/composables', 'src/stores', 'src/utils'],
        vueTemplate: true,
      }),
      uniPolyfill(),
    ],
  }
});
