<template>
  <div class="flex mb-24 portfolio" :style="{ gap: 'var(--gap)' }">
    <NuxtImg
      :src="imageSrc"
      :alt="altText"
      width="300"
      height="300"
      class="portfolio-screenshot rounded-full"
    />
    <div>
      <h3 class="title">{{ title }}</h3>
      <p class="text" v-for="(paragraph, index) in description" :key="index">
        {{ paragraph }}
      </p>
      <a :href="link" class="btn btn--line" target="_blank">Visit</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  imageSrc: string;
  altText: string;
  title: string;
  description: string[];
  link: string;
}
const props = defineProps<Props>();
</script>

<style scoped>
.portfolio {
  display: flex;
  gap: var(--gap);
  margin-bottom: 100px;
}

.portfolio-screenshot {
  border-radius: 50%;
  width: clamp(175px, 20vw, 300px);
  height: clamp(175px, 20vw, 300px);
}
</style>
