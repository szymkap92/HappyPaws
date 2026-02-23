/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        espresso: '#1f1410',
        cocoa: '#2c1b16',
        blush: '#e9b5bd',
        rosewater: '#f2d3d8',
        sand: '#f4ece8'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Manrope"', 'sans-serif']
      },
      boxShadow: {
        glow: '0 15px 60px rgba(233, 181, 189, 0.2)'
      },
      backgroundImage: {
        'warm-gradient':
          'radial-gradient(circle at 15% 20%, rgba(233,181,189,.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(172,120,104,.2), transparent 45%), linear-gradient(150deg, #140c09 10%, #251713 45%, #120b08 100%)'
      }
    }
  },
  plugins: []
};
