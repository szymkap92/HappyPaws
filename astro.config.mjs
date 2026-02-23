import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://happypaw.example',
  integrations: [tailwind({ applyBaseStyles: false })]
});
