<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

const FORMSPARK_ACTION_URL = 'https://submit-form.com/NXAd7ScE';
let toggleLightThemeButton: HTMLElement;
let toggleDarkThemeButton: HTMLElement;
let scrollDownButton: HTMLElement;
let aboutMeElement: HTMLElement;

const hasScrolledToAboutMe = ref(false);
const formSubmittingInProcess = ref(false);
const hasFormSubmitted = ref(false);

function toggleLightTheme() {
  document.documentElement.classList.add('light-theme');
}
function toggleDarkTheme() {
  document.documentElement.classList.remove('light-theme');
}

function scrollToAboutMe() {
  const scrollOffset = aboutMeElement.offsetTop - 20;
  window.scrollTo({
    top: scrollOffset,
    behavior: 'smooth',
  });
  hasScrolledToAboutMe.value = true;
}

onMounted(() => {
  toggleLightThemeButton = document.getElementById(
    'light-icon'
  )! as HTMLElement;

  toggleDarkThemeButton = document.getElementById('dark-icon')! as HTMLElement;

  scrollDownButton = document.getElementById('scroll-down')! as HTMLElement;
  aboutMeElement = document.getElementById('about-me')! as HTMLElement;

  if (toggleLightThemeButton !== null) {
    toggleLightThemeButton.addEventListener('click', toggleLightTheme);
  }

  if (toggleDarkThemeButton !== null) {
    toggleLightThemeButton.addEventListener('click', toggleDarkTheme);
  }

  if (scrollDownButton !== null) {
    scrollDownButton.addEventListener('click', () => {
      scrollToAboutMe();
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
  if (toggleLightThemeButton !== null) {
    toggleLightThemeButton.removeEventListener('click', toggleLightTheme);
  }

  if (toggleDarkThemeButton !== null) {
    toggleDarkThemeButton.removeEventListener('click', toggleDarkTheme);
  }

  if (scrollDownButton !== null) {
    scrollDownButton.removeEventListener('click', () => {
      scrollToAboutMe();
      hasScrolledToAboutMe.value = true;
    });
  }
});

const validations = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  message: yup.string().required(),
});

const { handleSubmit } = useForm({
  validationSchema: validations,
});

const { value: email, errorMessage: emailError } = useField('email');
const { value: name, errorMessage: nameError } = useField('name');
const { value: message, errorMessage: messageError } = useField<
  string | undefined
>('message');

const onSubmit = handleSubmit(async (formData) => {
  formSubmittingInProcess.value = true;
  try {
    await useCustomFetch(FORMSPARK_ACTION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData,
    });
    hasFormSubmitted.value = true;
  } catch (error) {
    console.error(error);
  } finally {
    formSubmittingInProcess.value = false;
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
        <h2 class="title--lg mt-0 mb-10 break-words">Software Engineer</h2>
        <img
          src="~/assets/images/profile-img.png"
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
              With a proven track record as a Full Stack Developer, Jordan is
              proficient in JavaScript, HTML, CSS, React, Vue.js, and Node.js.
              He excels at building intuitive user interfaces that are both
              aesthetically pleasing and functional.
            </p>
            <p class="text--lg">
              In his most recent role as an OutSystems Developer, Jordan built
              user-friendly web and mobile apps to streamline complex business
              processes. He championed low-code development, optimized app
              UX/UI, and contributed to projects like a mobile banking app and a
              web application for managing workers' compensation claims.
            </p>
            <p class="text--lg">
              At Upwork, Jordan specialized in developing and customizing
              Shopify themes and plugins, integrating third-party apps, and
              ensuring optimal store performance while closely collaborating
              with clients.
            </p>
          </div>
          <div>
            <p class="text--lg">
              During his time at TapOnIt, Jordan gained experience in creating
              user-friendly web pages and mobile apps, integrating back-end
              functionality with appealing UI designs. His focus on clean,
              efficient code resulted in high-quality web designs and
              applications.
            </p>
            <p class="text--lg">
              Jordan has also completed the Udacity Cloud Developer Nanodegree,
              enhancing his expertise in AWS services such as Lambda, S3,
              DynamoDB, and API Gateway, allowing him to design scalable, secure
              cloud solutions.
            </p>
            <p class="text--lg">
              His diverse skill set spans front-end technologies like React and
              Vue.js, and back-end development with Node.js and PostgreSQL.
              Jordan’s commitment to staying updated with the latest
              technologies ensures innovative solutions for every project.
            </p>
            <p class="text--lg">
              My commitment to staying up-to-date with the latest trends and
              technologies in the field enables me to deliver innovative
              solutions and provide valuable insights to drive project success.
              I am constantly seeking new challenges and opportunities to expand
              my skill set and contribute to impactful projects.
            </p>
            <p class="text--lg">
              Explore his projects or reach out for potential collaborations via
              the
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
            src="~/assets/images/portfolio-05.png"
            width="300"
            height="300"
            alt="Serverless TODO Application"
            class="portfolio-screenshot rounded-full"
          />
          <div>
            <h3 class="title">Serverless TODO Application</h3>
            <p class="text">
              The Serverless TODO Application is a full-stack project developed
              as part of the Udacity Cloud Developer Nanodegree program. This
              application allows users to manage their tasks, providing features
              like creating, updating, deleting, and retrieving TODO items. Each
              item can have an optional attachment image.
            </p>
            <p class="text">
              The backend is built with AWS Lambda and managed through the
              Serverless Framework. It uses API Gateway for routing, DynamoDB
              for storage, and S3 for file uploads. User authentication is
              handled through Auth0, ensuring secure access to data.
            </p>
            <p class="text">
              This project showcases my ability to develop scalable, serverless
              applications on AWS, using a combination of infrastructure as
              code, cloud services, and modern development practices.
            </p>
            <a
              href="https://magnificent-eclair-0c01b7.netlify.app/"
              class="btn btn--line"
              target="_blank"
              >Visit</a
            >
          </div>
        </div>
        <div class="flex mb-24 portfolio" style="gap: var(--gap)">
          <img
            src="~/assets/images/portfolio-01.png"
            width="300"
            height="300"
            alt="Restaurant reservations app"
            class="portfolio-screenshot rounded-full"
          />
          <div>
            <h3 class="title">Restaurant Reservations App</h3>
            <p class="text">
              The Restaurant Reservations App is a full-stack application,
              designed as a capstone project for Thinkful's software engineering
              bootcamp. The application is developed to manage and optimize the
              process of restaurant reservations. Its main purpose is to help
              fine dining restaurants coordinate and manage their reservations
              effectively. It is used exclusively by restaurant personnel,
              thereby, making the reservation process easy and organized.
            </p>
            <p class="text">
              Key functionalities of this app include creating and listing
              reservations and tables, creating reservations for future and
              working dates, seating reservations, changing existing
              reservations, and more. These operations are driven by user
              stories simulating restaurant employees' workflows, thereby
              ensuring the application aligns with the real-world needs of its
              users.
            </p>
            <p class="text">
              Built with an array of powerful technologies such as React,
              Bootstrap on the front end, and Node, Express, and PostgreSQL on
              the back end, this application provides a stable, user-friendly,
              and secure platform for managing restaurant reservations.
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
            alt="We Love Movies app"
            class="portfolio-screenshot rounded-full"
          />
          <div>
            <h3 class="title">We Love Movies</h3>
            <p class="text">
              We Love Movies is a robust REST API designed to provide
              comprehensive information about movies. The core of the project
              was developed using Node.js and Express.js, and leverages the
              power of Knex.js for effective querying of a PostgreSQL database.
              This backend API is intended to serve as the foundation for
              applications that need access to extensive and reliable movie
              details.
            </p>
            <p class="text">
              The API offers a multitude of endpoints, enabling features such as
              listing all movies, fetching specific movie details, showcasing
              theaters where a movie is playing, and managing reviews. It's
              designed with a keen focus on usability and performance, ensuring
              seamless integration with frontend applications.
            </p>
            <p class="text">
              With an easy setup process, you can run We Love Movies locally,
              making development and testing a breeze. Simply clone the project,
              install dependencies, create your .env file, connect to your
              PostgreSQL database, run migrations, seed data, and finally, start
              the server.
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
              Decoder Ring is an interactive frontend application that
              translates encoded texts using three different methods that have
              been historically significant - Caesar Shift, Polybius Square, and
              Substitution Cipher. The project serves as a capstone from
              Thinkful's curriculum, focusing on the creation of complex
              algorithms and the application of unit testing with Mocha and
              Chai.
            </p>
            <p class="text">
              The application allows users to input the text they wish to decode
              along with additional parameters depending on the decoding method.
              For example, the Caesar Shift requires a shift number that isn't 0
              or less than -25 or greater than 25. The Polybius Square simply
              needs the text, and the Substitution Cipher requires the text and
              an alphabet key with 26 unique characters.
            </p>
            <p class="text">
              The core goal of the project was not only to build a user-friendly
              decoding tool but also to test the ability to write effective unit
              tests. This serves as an excellent showcase of problem-solving
              skills, understanding of various decoding techniques, and
              proficiency in testing code reliability.
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
              The Flashcard App is a dynamic and engaging frontend application
              designed to help users enhance their studying process. Using this
              tool, you can create, store, and utilize digital flashcards for
              any subject.
            </p>
            <p class="text">
              The application offers a convenient and efficient way to memorize
              new information and review it whenever necessary. Whether you're
              studying for an exam, learning a new language, or simply want to
              retain new information better, the Flashcard App is a practical
              tool for self-education.
            </p>
            <p class="text">
              It is built with a user-friendly interface to ensure a seamless
              learning experience. Get started with your personalized flashcards
              and revolutionize your study habits!
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
          <form v-if="!hasFormSubmitted" @submit.prevent="onSubmit">
            <label for="hire-name" class="sr-only">Your name</label>
            <div>
              <p class="text-red-600" v-if="nameError">{{ nameError }}</p>
              <input
                v-model="name"
                id="hire-name"
                name="name"
                type="text"
                autocomplete="name"
                class="input"
                placeholder="Your name"
              />
            </div>
            <label for="hire-email" class="sr-only">Your email</label>
            <div>
              <p class="text-red-600" v-if="emailError">{{ emailError }}</p>
              <input
                v-model="email"
                id="hire-email"
                name="email"
                type="email"
                autocomplete="email"
                class="input"
                placeholder="Your email"
              />
            </div>
            <label for="hire-message" class="sr-only">Your message</label>
            <div>
              <p v-if="messageError" class="text-red-600">{{ messageError }}</p>
              <textarea
                v-model="message"
                id="hire-message"
                class="input"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div class="hire-action">
              <button
                v-if="!formSubmittingInProcess"
                :disabled="formSubmittingInProcess"
                type="submit"
                class="btn btn--raised"
              >
                Send
              </button>
              <Loader v-else class="mt-4 ml-6" />
            </div>
          </form>
          <div v-else>
            <h3 class="title">
              Form submission successful.
              <img
                class="ml-4 inline-block"
                src="~/assets/images/send.png"
                alt="paper plane"
              />
            </h3>
            <p class="font-bold"></p>
          </div>
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
  position: relative;
  top: 8rem;
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

.portfolio-screenshot {
  border-radius: 50%;
  width: clamp(175px, 20vw, 300px);
  height: clamp(175px, 20vw, 300px);
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
