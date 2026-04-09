// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css'],
  ssr: true,
  

  site: {
      url: 'https://www.clinique-veterinaire-arc.fr', // Remplace par ton futur nom de domaine
      name: 'Clinique Vétérinaire de l\'Arc'
    },



  sitemap: {
      exclude: ['/admin/**'],
    },


})