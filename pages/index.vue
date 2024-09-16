<template>
  <main>
    <section
      id="intro"
      class="pb-48 scroll-mt-5 layout-section"
      aria-describedby="intro-h1 intro-h2"
    >
      <div class="max-w-5xl px-5 mx-auto">
        <h1 class="title--lg mb-0">Jordan B Mowry</h1>
        <h2 class="title--lg mt-0 mb-10 break-words">Software Engineer</h2>
        <NuxtImg
          src="/images/profile-img.png"
          width="300"
          height="300"
          alt="Jordan Mowry profile photo"
          class="rounded-full mx-auto"
        />
        <p class="text--xl">
          Jordan is a software engineer based in Bloomington, Indiana.
        </p>
        <p class="text--xl my-0">
          Jordan brings your idea to life with
          <strong>modern technology</strong>.
        </p>
      </div>
    </section>
  </main>
</template>

<style>
.layout-grid-half {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap);
}

@media (max-width: 37.5rem) {
  .layout-section {
    padding-bottom: 100px;
  }
  .layout-grid-half {
    grid-template-columns: 1fr;
  }
}

p {
  color: var(--gray-light);
}

::selection {
  background-color: var(--primary);
  color: var(--black);
}

.portfolio {
  display: flex;
  gap: var(--gap);
  margin-bottom: 100px;
}

.portfolio:nth-child(odd) .portfolio-screenshot {
  order: 1;
}

@media (max-width: 37.5rem) {
  .portfolio {
    display: block;
  }
}

.portfolio-screenshot {
  border-radius: 50%;
  width: clamp(175px, 20vw, 300px);
  height: clamp(175px, 20vw, 300px);
}

.hire-form {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: var(--gap);
}

@media (max-width: 37.5rem) {
  .hire-form {
    grid-template-columns: 1fr;
  }
}

.input {
  width: 100%;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid var(--gray);
  padding: 12px 10px;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1.9;
  color: var(--text-color);
  margin-bottom: 24px;
  transition: border-color 200ms;
}

.input:focus {
  border-bottom-color: var(--primary);
  outline: none;
}

textarea.input {
  resize: vertical;
  min-height: 100px;
}
</style>
