<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

const FORMSPARK_ACTION_URL = 'https://submit-form.com/NXAd7ScE';

const hasScrolledToAboutMe = ref(false);
const formSubmittingInProcess = ref(false);
const hasFormSubmitted = ref(false);

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
              <NuxtImage
                class="ml-4 inline-block"
                src="/images/send.png"
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

<style scoped>
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
