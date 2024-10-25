<script lang="ts" setup>
useHead({
  title: 'Jordan B Mowry | Software Engineer',
  meta: [
    // Basic meta
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },

    // Theme and appearance
    { name: 'color-scheme', content: 'dark light' },
    { name: 'theme-color', content: '#f2d544' },

    // Microsoft specific
    { name: 'msapplication-TileColor', content: '#da532c' },
    {
      name: 'msapplication-config',
      content: '/assets/favicons/browserconfig.xml',
    },

    // Primary description
    {
      name: 'description',
      content:
        'Jordan is a software engineer based in Bloomington, IN. Jordan brings your idea to life with modern technology.',
    },

    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://jordanbmowry.com/' },
    { property: 'og:title', content: 'Jordan B Mowry | Software Engineer' },
    {
      property: 'og:description',
      content:
        'Jordan is a software engineer based in Bloomington, IN. Jordan brings your idea to life with modern technology.',
    },
    { property: 'og:image', content: '/assets/images/share.png' },

    // X (formerly Twitter) meta tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: 'https://jordanbmowry.com/' },
    { name: 'twitter:title', content: 'Jordan B Mowry | Software Engineer' },
    {
      name: 'twitter:description',
      content:
        'Jordan is a software engineer based in Bloomington, IN. Jordan brings your idea to life with modern technology.',
    },
    { name: 'twitter:image', content: '/assets/images/share.png' },
  ],
  link: [
    // Favicon
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    // Add Apple touch icon if you have one
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
  ],
});
</script>

<template>
  <div class="min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
