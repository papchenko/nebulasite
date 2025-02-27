import { defineConfig } from 'astro/config';
import browserSync from 'vite-plugin-browser-sync';
// import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://papchenko.github.io',
  base: '/nebulasite/',

  // site: 'https://name.vercel.app',
  // output: 'server',
  // adapter: vercel(),

  vite: {
    plugins: [
      browserSync({
        open: false,
        host: '0.0.0.0',
        port: 3000,
        proxy: 'http://localhost:3000',
      }),
    ],
  },
});