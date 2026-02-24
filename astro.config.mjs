import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://happypawsanna.com',
  integrations: [tailwind({ applyBaseStyles: false })]
});
