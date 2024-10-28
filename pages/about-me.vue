<template>
  <div>
    <section
      id="about-me"
      class="pb-20 scroll-mt-5 layout-section"
      aria-labelledby="heading-aboutme"
    >
      <div class="max-w-5xl px-5 mx-auto">
        <h2 id="heading-aboutme" class="title--sm mb-9">About Me</h2>
        <NuxtImg
          height="1126"
          width="2000"
          src="/images/about_me.JPG"
          alt="Profile image"
          class="mx-auto my-2"
        />
        <div class="layout-grid-half">
          <div>
            <p class="text--lg">
              With a proven track record as a Full Stack Developer, I am
              proficient in JavaScript, HTML, CSS, React, Vue.js, and Node.js. I
              excel at building intuitive user interfaces that are both
              aesthetically pleasing and functional.
            </p>
            <p class="text--lg">
              I come from a background in insurance sales, where I honed my
              skills as an excellent communicator and developed a deep
              understanding of how to connect with clients effectively. This
              experience has greatly enhanced my ability to collaborate closely
              with teams and clients, ensuring that project goals are met and
              expectations are exceeded.
            </p>
            <p class="text--lg">
              In my most recent role as an OutSystems Developer, I built
              user-friendly web and mobile apps to streamline complex business
              processes. I championed low-code development, optimized app UX/UI,
              and contributed to projects like a mobile banking app and a web
              application for managing workers' compensation claims.
            </p>
            <p class="text--lg">
              At Upwork, I specialized in developing and customizing Shopify
              themes and plugins, integrating third-party apps, and ensuring
              optimal store performance while closely collaborating with
              clients.
            </p>
          </div>
          <div>
            <p class="text--lg">
              During my time at TapOnIt, I gained experience in creating
              user-friendly web pages and mobile apps, integrating back-end
              functionality with appealing UI designs. My focus on clean,
              efficient code resulted in high-quality web designs and
              applications.
            </p>
            <p class="text--lg">
              I have also completed the Udacity Cloud Developer Nanodegree,
              enhancing my expertise in AWS services such as Lambda, S3,
              DynamoDB, and API Gateway, allowing me to design scalable, secure
              cloud solutions.
            </p>
            <p class="text--lg">
              My diverse skill set spans front-end technologies like React and
              Vue.js, and back-end development with Node.js and PostgreSQL. I'm
              committed to staying updated with the latest technologies to
              ensure innovative solutions for every project.
            </p>
            <p class="text--lg">
              My dedication to staying current with industry trends and
              technologies enables me to deliver innovative solutions and
              provide valuable insights to drive project success. I constantly
              seek new challenges and opportunities to expand my skill set and
              contribute to impactful projects.
            </p>
            <p class="text--lg">
              Explore my projects or reach out for potential collaborations via
              my
              <NuxtLink class="about-me-link" to="/portfolio"
                >portfolio</NuxtLink
              >
              or contact me through the
              <NuxtLink class="about-me-link" to="/hire-me"
                >contact form</NuxtLink
              >.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="experience"
      class="pb-15 scroll-mt-5 layout-section"
      aria-labelledby="heading-experience"
    >
      <div class="max-w-5xl px-5 mx-auto">
        <h2 id="heading-experience" class="title--sm mb-9">Skills</h2>
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
    <section>
      <div class="my-40 flex flex-col gap-4 items-center">
        <NuxtLink to="/hire-me" class="btn btn--raised"> Hire Me </NuxtLink>
        <NuxtLink class="text-lg underline" to="/portfolio"
          >Check out my projects</NuxtLink
        >
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import DownloadIcon from '~/assets/icons/download-icon.svg?component';

const experienceItems = [
  'Shopify',
  'Liquid',
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
.about-me-link {
  color: var(--anchor-color);
  opacity: 0.85;
  transition: opacity 200ms;
  border-bottom: 1px solid var(--anchor-color);
}

about-me-link:hover {
  opacity: 1;
}

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
