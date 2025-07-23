// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-aos', 'v-gsap-nuxt','@nuxt/image'],
  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: 'https://ik.imagekit.io/wax4lboi9/', // replace with your actual URL
    },
  },
   nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/']
    }
  }
})