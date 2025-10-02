// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // App Configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // Add security headers
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    'nuxt-svgo',
    '@nuxt/image',
    '@vee-validate/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-schema-org',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Poppins: true,
          download: true,
          inject: true,
        },
        display: 'swap',
        download: true,
        inject: true,
      },
    ],
    'nuxt-svgo',
  ],
  build: {
    transpile: ['vue-schema-org'],
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://jordanbmowry.com',
      siteName: 'Jordan B Mowry | Software Engineer',
      language: 'en-US',
    },
  },
  image: {
    quality: 80,
    format: ['webp'],
  },
  nitro: {
    compressPublicAssets: true,
    minify: true,
    preset: 'netlify',
  },
});
