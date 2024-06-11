// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Miracle\'s Blog',
      titleTemplate: '%s - Miracle\'s Blog',
      meta: [{ name: 'description', content: 'Miracle\'s awesome blog' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },
  site: {
    // url: 'https://blog.nurMiracle.xyz',
    identity: {
      type: 'Person',
    },
  },

  typescript: {
    strict: true,
  },
  plugins: [
    // '~plugins/storage.plugin',
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },
  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    'nuxt-simple-sitemap',
    '@nuxtjs/tailwindcss',
    '@stefanobartoletti/nuxt-social-share',
    '@pinia/nuxt',
    "@pinia-plugin-persistedstate/nuxt",
    ],
    content: {
      highlight: {
        theme: 'dracula',
        },
        },
        })
        