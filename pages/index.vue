<script setup lang="ts">
let toggleThemeButton: HTMLElement;
let scrollDownButton: HTMLElement;
let aboutMeElement: HTMLElement;
let hasScrolledToAboutMe = ref<boolean>(false);

function toggleTheme() {
  document.documentElement.classList.toggle('light-theme');
}

function scrollToAboutMe() {
  window.scrollTo({
    top: aboutMeElement.offsetTop - 20,
  });
}

onMounted(() => {
  toggleThemeButton = document.getElementById('toggle-theme')! as HTMLElement;
  scrollDownButton = document.getElementById('scroll-down')! as HTMLElement;
  aboutMeElement = document.getElementById('about-me')! as HTMLElement;

  if (toggleThemeButton !== null) {
    toggleThemeButton.addEventListener('click', toggleTheme);
  }

  if (scrollDownButton !== null) {
    scrollDownButton.addEventListener('click', () => {
      if (!hasScrolledToAboutMe.value) {
        scrollToAboutMe();
        hasScrolledToAboutMe.value = true;
      }
    });
  }

  const prefersLight = window.matchMedia(
    '(prefers-color-scheme: light)'
  ).matches;

  if (prefersLight) {
    document.documentElement.classList.add('light-theme');
  }
});

onUnmounted(() => {
  if (toggleThemeButton !== null) {
    toggleThemeButton.removeEventListener('click', toggleTheme);
  }

  if (scrollDownButton !== null) {
    scrollDownButton.removeEventListener('click', () => {
      if (!hasScrolledToAboutMe.value) {
        scrollToAboutMe();
        hasScrolledToAboutMe.value = true;
      }
    });
  }
});
</script>

<template>
  <main>
    <section
      id="intro"
      class="pb-48 scroll-mt-5 layout-section"
      aria-describedby="intro-h1 intro-h2"
    >
      <div class="max-w-5xl px-5 mx-auto">
        <h1 class="title--lg mb-0">Jordan B Mowry</h1>
        <h2 class="title--lg mt-0 mb-10 break-words">Web Developer</h2>
        <img
          src="~/assets/images/profile-img.jpg"
          width="300"
          height="300"
          alt="Jordan Mowry profile photo"
          class="rounded-full mx-auto mb-6"
        />
        <p class="text--xl">
          Jordan is a web developer based in Bloomington, Indiana.
        </p>
        <p class="text--xl my-0">
          Jordan brings your idea to life with
          <strong>modern technology</strong>.
        </p>
      </div>
      <button id="scroll-down" aria-label="Scroll down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
            stroke="var(--light-icon)"
          />
        </svg>
      </button>
    </section>
    <section
      id="about-me"
      class="pb-48 scroll-mt-5 layout-section"
      aria-labelledby="heading-aboutme"
    >
      <div class="max-w-5xl px-5 mx-auto">
        <h2 id="heading-aboutme" class="title--sm mb-9">About Me</h2>
        <div class="layout-grid-half">
          <div>
            <p class="text--lg">
              With a proven track record as a Full Stack Developer, I am
              proficient in JavaScript, HTML, CSS, React, Vue.js, and Node.js. I
              am passionate about solving engaging problems and have always
              found fulfillment in building cool user interfaces that are easy
              to use, aesthetically pleasing, and provide real solutions for
              people.
            </p>
            <p class="text--lg">
              In my most recent role as a Software Developer at Upwork, I
              specialized in developing and customizing Shopify themes and
              plugins based on client requirements. I successfully integrated
              third-party apps and services with the Shopify platform and
              ensured optimal performance, security, and search engine rankings
              for Shopify stores. I also provided technical support and
              troubleshooting while collaborating closely with clients to
              understand their business needs and deliver tailored solutions.
              Maintaining a high level of professionalism and responsiveness, I
              consistently met project deadlines and exceeded client
              expectations.
            </p>
            <p class="text--lg">
              Prior to that, as a Junior Software Engineer at TapOnIt, I gained
              hands-on experience in creating user-friendly web pages and mobile
              apps using HTML, CSS, JavaScript, Vue.js, and Nuxt. Working
              alongside designers, developers, and project managers, I
              seamlessly integrated back-end functionality with visually
              appealing user interface designs. I ensured website and mobile app
              usability and accessibility while optimizing them for speed and
              performance. My dedication to writing clean, efficient, and
              maintainable code aligned with coding standards and best
              practices, resulting in top-notch web designs and applications.
            </p>
          </div>
          <div>
            <p class="text--lg">
              My skills encompass a wide range of technologies, including
              front-end development with CSS, HTML, JavaScript, React, Vue.js,
              Nuxt, and TypeScript. On the back-end, I excel in utilizing
              Express, Node.js, PostgreSQL, and Knex.js to build robust and
              scalable applications. I am proficient in tools such as Chai, Git,
              GitHub, Heroku, Linux, and Mocha, ensuring seamless development
              workflows and efficient project management.
            </p>
            <p class="text--lg">
              My commitment to staying up-to-date with the latest trends and
              technologies in the field enables me to deliver innovative
              solutions and provide valuable insights to drive project success.
              I am constantly seeking new challenges and opportunities to expand
              my skill set and contribute to impactful projects.
            </p>
            <p class="text--lg">
              If you'd like to explore my previous projects in detail or discuss
              potential collaborations, please feel free to check out my
              <a href="#portfolio">portfolio</a> or reach out via the
              <a href="#hire-me">contact form</a>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="portfolio"
      class="pb-48 scroll-mt-5 layout-section"
      aria-labelledby="heading-portfolio"
    >
      <div class="max-w-5xl px-5 mx-auto">
        <h2 class="title--sm mb-9">Portfolio</h2>
        <div class="flex mb-24 portfolio" style="gap: var(--gap)">
          <img
            src="~/assets/images/portfolio-01.png"
            width="300"
            height="300"
            alt="Restaurant reservations app"
            class="portfolio-screenshot rounded-full"
          />
          <div>
            <h3 class="title">Restaurant reservations app</h3>
            <p class="text">
              Fullstack application to schedule restaurant reservations and seat
              customers for to help the buisness stay organized. Technologies
              used are React, JavaScript, HTML, CSS, Bootstrap, SQL, Express,
              and Node.js.
            </p>
            <a
              href="https://github.com/jordanbmowry/restaurant-reservation"
              class="btn btn--line"
              target="_blank"
              >Visit</a
            >
          </div>
        </div>
        <div class="portfolio">
          <img
            src="~/assets/images/portfolio-02.png"
            width="300"
            height="300"
            alt="Todo app"
            class="portfolio-screenshot rounded-full"
          />
          <div>
            <h3 class="title">We Love Movies</h3>
            <p class="text">
              A backend REST API to get information on movies using Node.js,
              Express, and PostgreSQL.
            </p>
            <a
              href="https://github.com/jordanbmowry/we-love-movies"
              class="btn btn--line"
              target="_blank"
              >Visit</a
            >
          </div>
        </div>
        <div class="portfolio">
          <img
            src="~/assets/images/portfolio-03.png"
            width="300"
            height="300"
            alt="Decoder Ring"
            class="portfolio-screenshot rounded-full"
          />
          <div>
            <h3 class="title">Decoder Ring</h3>
            <p class="text">
              Frontend Application that decodes text in three different ways
              used throughout history. Caesar Shift, Polybuis Square, and
              Substitution Cipher.
            </p>
            <a
              href="https://github.com/jordanbmowry/decoder-ring"
              class="btn btn--line"
              target="_blank"
              >Visit</a
            >
          </div>
        </div>
        <div class="portfolio">
          <img
            src="~/assets/images/portfolio-04.png"
            width="300"
            height="300"
            alt="Flashcard App"
            class="portfolio-screenshot rounded-full"
          />
          <div>
            <h3 class="title">Flashcard App</h3>
            <p class="text">
              A frontend application that is used to store flashcards and help
              with studying. Technologies used with React, JavaScript, HTML,
              CSS, and Bootstrap.
            </p>
            <a
              href="https://github.com/jordanbmowry/Flashcard-o-matic"
              class="btn btn--line"
              target="_blank"
              >Visit</a
            >
          </div>
        </div>
      </div>
    </section>

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
        </ul>
      </div>
    </section>

    <section
      id="hire-me"
      class="pb-48 scroll-mt-5 layout-section"
      aria-labelledby="heading-hireme"
    >
      <div class="max-w-5xl px-5 mx-auto">
        <h2 id="heading-hireme" class="title--sm mb-9">Hire Me</h2>
        <div class="hire-form">
          <div>
            <address>
              <div class="flex mb-10" style="gap: 16px">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 2.5C10.1625 2.5 6.25 6.4125 6.25 11.25C6.25 17.8125 15 27.5 15 27.5C15 27.5 23.75 17.8125 23.75 11.25C23.75 6.4125 19.8375 2.5 15 2.5ZM15 14.375C13.275 14.375 11.875 12.975 11.875 11.25C11.875 9.525 13.275 8.125 15 8.125C16.725 8.125 18.125 9.525 18.125 11.25C18.125 12.975 16.725 14.375 15 14.375Z"
                    fill="var(--light-icon)"
                  />
                </svg>
                <div>
                  <p class="text">Current location</p>
                  <p class="text--bold">Bloomington, Indiana</p>
                  <p class="text--bold">USA</p>
                </div>
              </div>
              <div class="flex mb-10" style="gap: 16px">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM25 10L15 16.25L5 10V7.5L15 13.75L25 7.5V10Z"
                    fill="var(--light-icon)"
                  />
                </svg>
                <div>
                  <p class="text mt-0 mb-1.5">Email</p>
                  <a class="text--bold" href="mailto:jordan.mowry@gmail.com"
                    >jordan.mowry@gmail.com</a
                  >
                </div>
              </div>
            </address>
          </div>
          <form netlify>
            <label for="hire-name" class="sr-only">Your name</label>
            <input
              id="hire-name"
              name="name"
              type="text"
              autocomplete="name"
              class="input"
              placeholder="Your name"
            />
            <label for="hire-email" class="sr-only">Your email</label>
            <input
              id="hire-email"
              name="email"
              type="email"
              autocomplete="email"
              class="input"
              placeholder="Your email"
            />
            <label for="hire-message" class="sr-only">Your message</label>
            <textarea
              id="hire-message"
              class="input"
              placeholder="Your message"
              name="message"
            ></textarea>
            <div class="hire-action">
              <button type="submit" class="btn btn--raised">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
#scroll-down {
  all: unset;
  outline: revert;
  box-sizing: border-box;
  position: absolute;
  bottom: 25px;
  left: calc(50vw - 48px / 2);
  cursor: pointer;
}

#scroll-down svg {
  fill: var(--dark-icon);
  transition: fill 350ms;
  animation: bounce 1.6s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

#scroll-down svg:hover {
  fill: var(--light-icon);
}

@keyframes bounce {
  0% {
    translate: 0 0;
  }

  50% {
    translate: 0 -15px;
  }
}

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

a {
  color: var(--anchor-color);
  opacity: 0.85;
  transition: opacity 200ms;
}

a:hover {
  opacity: 1;
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
