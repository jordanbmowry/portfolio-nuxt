<template>
  <div>
    <section
      id="intro"
      class="pb-20 scroll-mt-5 layout-section"
      aria-describedby="intro-h1 intro-h2"
    >
      <div class="max-w-5xl px-5 mx-auto">
        <h1 class="title--lg mb-0">Jordan B Mowry</h1>
        <h2 class="title--lg mt-0 mb-10 break-words">Software Engineer</h2>
        <NuxtImg
          src="/images/profile_image.png"
          alt="Profile image"
          width="300"
          height="300"
          class="rounded-full mx-auto my-12"
        />
        <p class="text--xl">Hello, I'm Jordan Mowry.</p>
        <p class="text--xl">
          I am a software engineer based in Bloomington, Indiana.
        </p>
        <p class="text--xl my-0">
          I will bring your idea to life with
          <strong>modern technology</strong>.
        </p>
      </div>
    </section>

    <!-- YouTube Video Section -->
    <section id="video" class="pb-15 layout-section">
      <div class="max-w-5xl px-5 mx-auto">
        <div class="video-container">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/62hdDsyq60c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
    <section>
      <div class="my-40 flex flex-col gap-4 items-center">
        <NuxtLink to="/hire-me" class="btn btn--raised"> Hire Me </NuxtLink>
        <NuxtLink class="text-lg underline" to="/about-me"
          >Learn more about me</NuxtLink
        >
      </div>
    </section>
  </div>
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

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
