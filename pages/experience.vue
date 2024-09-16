<template>
  <main>
    <section
      id="experience"
      class="pb-48 scroll-mt-5 layout-section"
      aria-labelledby="heading-experience"
    >
      <div class="max-w-5xl px-5 mx-auto">
        <h2 id="heading-experience" class="title--sm mb-9">Experience</h2>
        <ul class="pl-0">
          <li
            v-for="(skill, index) in experienceItems"
            :key="index"
            class="tag"
          >
            {{ skill }}
          </li>
        </ul>

        <!-- Download CV Button -->
        <NuxtLink
          class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-500/50 dark:text-zinc-300 dark:hover:bg-zinc-500 dark:hover:text-zinc-50 dark:active:bg-zinc-500 dark:active:text-zinc-50/70 group mt-6 w-full"
          to="#"
          @click="downloadResume"
        >
          Download CV
          <DownloadIcon
            class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
          />
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// @ts-ignore
import DownloadIcon from '~/assets/svgs/download-icon.svg?component';

const experienceItems = [
  'React',
  'Vue',
  'Nuxt',
  'Agile',
  'HTML',
  'CSS',
  'JavaScript',
  'Tailwind',
  'SQL',
  'PostgreSQL',
  'MongoDB',
  'Node.js',
  'Express',
  'Fastify',
  'Python',
  'Prompt Engineering',
  'Docker',
  'Kubernetes',
  'CI/CD',
  'AWS',
  'Serverless',
  'Cloud Computing',
  'OutSystems',
];

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Jordan_Resume.pdf';
  link.download = 'Jordan_Resume.pdf';
  link.click();
};
</script>

<style scoped>
.tag {
  --tag-color: var(--gray);
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.6;
  letter-spacing: 1px;
  display: inline-block;
  border: 1px solid var(--tag-color);
  padding: 12px 16px;
  margin: 8px;
  margin-left: 0;
  position: relative;
  outline: 1px solid transparent;
}

.tag::before {
  box-sizing: border-box;
  content: '';
  position: absolute;
  inset: -3px;
  border: 1px solid var(--tag-color);
}

.tag:hover {
  --tag-color: var(--primary);
  color: var(--primary);
  outline-color: var(--primary);
}
</style>
