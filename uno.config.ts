import type { Preset, SourceCodeTransformer } from 'unocss';
import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup, presetAttributify } from 'unocss';
import { presetUni } from '@uni-helper/unocss-preset-uni';
import {
  presetApplet,
  presetRemRpx,
  transformerAttributify,
} from 'unocss-applet';

const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false;

const presets: Preset[] = [
  presetUni(),
  presetIcons({
    scale: 1.2,
    warn: true,
    extraProperties: {
      display: 'inline-block',
      'vertical-align': 'middle',
    },
  }),
];
const transformers: SourceCodeTransformer[] = [transformerDirectives(), transformerVariantGroup()];

if (isApplet) {
  presets.push(presetApplet());
  presets.push(presetRemRpx());
  transformers.push(transformerAttributify({ ignoreAttributes: ['block', 'name', 'size'] }));
}
else {
  presets.push(presetApplet());
  presets.push(presetAttributify());
  presets.push(presetRemRpx({ mode: 'rpx2rem' }));
}

export default defineConfig({
  // ...UnoCSS options
  presets: [
    ...presets,
  ],
  transformers: [
    ...transformers,
  ],
  shortcuts: {
    'bottom-tag-title': 'inline-block relative text-xl font-bold z-0 after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-2 after:w-full after:bg-[var(--primary-color)] after:-z-1',
    'page-wrapper': 'flex-1 h-full',
  }
})