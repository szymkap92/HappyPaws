import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://happy-paws.example',
  integrations: [tailwind({ applyBaseStyles: false })]
});
