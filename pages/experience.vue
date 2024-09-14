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
          <li class="tag">React</li>
          <li class="tag">Vue</li>
          <li class="tag">Nuxt</li>
          <li class="tag">Agile</li>
          <li class="tag">HTML</li>
          <li class="tag">CSS</li>
          <li class="tag">JavaScript</li>
          <li class="tag">Tailwind</li>
          <li class="tag">SQL</li>
          <li class="tag">PostgreSQL</li>
          <li class="tag">MongoDB</li>
          <li class="tag">Node.js</li>
          <li class="tag">Express</li>
          <li class="tag">Fastify</li>
          <li class="tag">Python</li>
          <li class="tag">Prompt Engineering</li>
          <li class="tag">Docker</li>
          <li class="tag">Kubernetes</li>
          <li class="tag">CI/CD</li>
          <li class="tag">AWS</li>
          <li class="tag">Serverless</li>
          <li class="tag">Cloud Computing</li>
          <li class="tag">OutSystems</li>
        </ul>
      </div>
    </section>
  </main>
</template>

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
