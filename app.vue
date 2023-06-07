<script lang="ts" setup>
useHead({
  title: 'Jordan B Mowry | Web Developer',
  meta: [
    {
      name: 'color-scheme',
      content: 'dark light',
    },
    {
      name: 'msapplication-config',
      content: '/assets/favicons/browserconfig.xml',
    },
    {
      name: 'msapplication-TileColor',
      content: '#da532c',
    },
    {
      name: 'theme-color',
      content: '#f2d544',
    },
    {
      name: 'description',
      content:
        'Jordan is a web developer based in Bloomington, IN. Jordan brings your idea to life with modern technology.',
    },
    {
      name: 'description',
      content: 'Jordan B Mowry | Web developer',
    },
    {
      property: 'og:url',
      content: 'https://jordanbmowry.com/',
    },
    {
      property: 'og:title',
      content: 'Jordan B Mowry | Web developer',
    },
    {
      property: 'og:description',
      content:
        'Jordan is a web developer based in Bloomington, IN. Jordan brings your idea to life with modern technology.',
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'twitter:url',
      content: 'https://jordanbmowry.com/',
    },
    {
      property: 'twitter:title',
      content: 'Jordan B Mowry | Web developer',
    },
    {
      property: 'twitter:description',
      content:
        'Jordan is a web developer based in Bloomington, IN. Jordan brings your idea to life with modern technology.',
    },
    {
      property: 'twitter:image',
      content: '/assets/images/share.png',
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
