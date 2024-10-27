import Aura from '@primevue/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/eslint', '@primevue/nuxt-module', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  css: [
    'primeicons/primeicons.css',
  ],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
})
