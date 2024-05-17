// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['nuxt-svgo', 'nuxt-mapbox'],
  mapbox: {
    accessToken:
      'pk.eyJ1IjoiYXJjaC1zIiwiYSI6ImNsdzUzYTVhajEzbXYybHBkMm83cjczcjQifQ.CmySpK_N03rRsi4eZ2iCuw',
  },
});
