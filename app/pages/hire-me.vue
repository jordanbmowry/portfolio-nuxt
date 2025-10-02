<template>
  <div>
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
              <!-- Location Section -->
              <div class="flex mb-10" style="gap: 16px">
                <LocationIcon width="30" height="30" />
                <div>
                  <p class="text">Current location</p>
                  <p class="text--bold">Bloomington, Indiana</p>
                  <p class="text--bold">USA</p>
                </div>
              </div>
              <!-- Email Section -->
              <div class="flex mb-10" style="gap: 16px">
                <EmailIcon width="30" height="30" />
                <div>
                  <p class="text mt-0 mb-1.5">Email</p>
                  <a class="text--bold" href="mailto:jordan.mowry@gmail.com"
                    >jordan.mowry@gmail.com</a
                  >
                </div>
              </div>
            </address>
          </div>

          <!-- Contact Form -->
          <form v-if="!hasFormSubmitted" @submit.prevent="onSubmit">
            <!-- Name Input -->
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
            <!-- Email Input -->
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
            <!-- Message Input -->
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
            <!-- Submit Button -->
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
          <!-- Success Message -->
          <div v-else>
            <h3 class="title">
              Form submission successful.
              <NuxtImg
                class="ml-4 inline-block"
                src="/images/send.png"
                alt="paper plane"
              />
            </h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
// @ts-ignore
import LocationIcon from '~/assets/icons/location-icon.svg?component';
// @ts-ignore
import EmailIcon from '~/assets/icons/email-icon.svg?component';
// @ts-ignore
import PhoneIcon from '~/assets/icons/phone-icon.svg?component';

const FORMSPARK_ACTION_URL = 'https://submit-form.com/NXAd7ScE';

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

  const formDataFormatted = new FormData();
  formDataFormatted.append('name', formData.name);
  formDataFormatted.append('email', formData.email);
  formDataFormatted.append('message', formData.message);

  try {
    await fetch(FORMSPARK_ACTION_URL, {
      method: 'POST',
      body: formDataFormatted,
    });
    hasFormSubmitted.value = true;
  } catch (error) {
    console.error(error);
  } finally {
    formSubmittingInProcess.value = false;
  }
});
</script>

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
  background-color: var(--input-bg);
  border: 0;
  border-bottom: 1px solid var(--input-border);
  padding: 12px 10px;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1.9;
  color: var(--text-color);
  margin-bottom: 24px;
  transition: border-color 200ms, background-color 0.3s ease;
}

.input:focus {
  border-bottom-color: var(--primary);
  outline: none;
}

.input::placeholder {
  color: var(--gray-dark);
  opacity: 0.7;
}

textarea.input {
  resize: vertical;
  min-height: 100px;
}
</style>
