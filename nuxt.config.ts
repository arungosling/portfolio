// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-aos', 'v-gsap-nuxt'],
   nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/']
    }
  }
})