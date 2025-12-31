import { resolve } from 'node:path'

console.log('🧭 CSS being loaded from:', __dirname);

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app/',
  modules: ['@nuxtjs/tailwindcss'],
  css: [resolve(__dirname, 'assets/css/main.css')],
  

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},     
      autoprefixer: {},
    },
  },
})
