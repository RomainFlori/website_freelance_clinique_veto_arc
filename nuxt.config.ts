// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css'],
  ssr: true,

  site: {
      url: 'https://www.clinique-veterinaire-de-larc.fr',
      name: 'Clinique Vétérinaire de l\'Arc',
      trailingSlash: true
    },

  sitemap: {
      exclude: ['/admin/**'],
    },

    app: {
      head: {
        title: "Clinique Vétérinaire de l'Arc | Vétérinaire à Pourrières (83)",
        htmlAttrs: { lang: 'fr' },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'description', content: 'Soins vétérinaires de proximité à Pourrières. Urgences, chirurgie et plateau technique moderne pour vos animaux.' },
          { name: 'keywords', content: 'vétérinaire Pourrières, clinique vétérinaire Var, soins animaux, urgence vétérinaire' },
          { property: 'og:title', content: "Clinique Vétérinaire de l'Arc | Vétérinaire à Pourrières" },
        { property: 'og:description', content: 'Urgences et soins vétérinaires à Pourrières.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.clinique-veterinaire-de-larc.fr' },
        { property: 'og:image', content: 'https://www.clinique-veterinaire-de-larc.fr/og-image.jpg' }, // Crée une belle image de 1200x630px
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
          { rel: 'canonical', href: 'https://www.clinique-veterinaire-de-larc.fr' }
        ]
      }
  }

})