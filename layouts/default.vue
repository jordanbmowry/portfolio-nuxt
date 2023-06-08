<script lang="ts" setup>
import nuxtStorage from 'nuxt-storage';

const currentYear = computed(() => new Date().getFullYear());
const lightMode = ref(true);

onMounted(() => {
  const lightModeLocal = nuxtStorage.localStorage.getData('lightMode');

  if (lightModeLocal === 'true') {
    lightMode.value = true;
  } else if (lightModeLocal === 'false') {
    lightMode.value = false;
  } else {
    const val = document.documentElement.classList.contains('light-theme');
    nuxtStorage.localStorage.setData('lightMode', `${val}`);
    lightMode.value = val;
  }
});

watch(lightMode, async (newMode) => {
  if (newMode) {
    nuxtStorage.localStorage.setData('lightMode', 'true');
  } else {
    nuxtStorage.localStorage.setData('lightMode', 'false');
  }
  return document.documentElement.classList.toggle('light-theme');
});
</script>

<template>
  <div>
    <nav>
      <div class="max-w-5xl px-5 mx-auto mt-8">
        <div class="py-6 flex justify-between items-center">
          <img
            src="~/assets/svgs/logo.svg"
            alt="Jordan B Mowry logo"
            width="45"
            height="43"
          />
          <ul class="pl-0 list-none flex gap-2.5 nav-links">
            <li>
              <a href="#about-me" class="btn btn--nav">About me</a>
            </li>
            <li>
              <a href="#portfolio" class="btn btn--nav">Portfolio</a>
            </li>
            <li>
              <a href="#experience" class="btn btn--nav">Experience</a>
            </li>

            <li class="nav-hire-me">
              <a href="#hire-me" class="btn btn--raised">Hire me</a>
            </li>
          </ul>
        </div>
      </div>

      <button
        :class="{ active: lightMode }"
        v-if="lightMode"
        id="light-icon"
        aria-label="Toggle dark theme"
        class="toggle-theme"
        @click="lightMode = false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="M479.765-340Q538-340 579-380.765q41-40.764 41-99Q620-538 579.235-579q-40.764-41-99-41Q422-620 381-579.235q-41 40.764-41 99Q340-422 380.765-381q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM70-450q-12.75 0-21.375-8.675Q40-467.351 40-480.175 40-493 48.625-501.5T70-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170-450H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-450H790ZM479.825-760Q467-760 458.5-768.625T450-790v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-890v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720Q467-40 458.5-48.625T450-70v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-170v100q0 12.75-8.675 21.375Q492.649-40 479.825-40ZM240-678l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217-786 226-777l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5-282q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743-174 734-183Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786-743 777-734l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897-182.897q-8.897-8.896-8.897-21.5Q174-217 183-226l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291-273 291-261t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480-480Z"
            fill="var(--light-icon)"
          />
        </svg>
      </button>
      <button
        v-else
        id="dark-icon"
        aria-label="Toggle light theme"
        class="toggle-theme"
        :class="{ active: !lightMode }"
        @click="lightMode = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
        >
          <rect fill="none" height="24" width="24" />
          <path
            d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
            fill="var(--light-icon)"
          />
        </svg>
      </button>
    </nav>
    <slot />
    <footer class="mb-5">
      <div class="max-w-5xl px-5 mx-auto">
        <div class="footer">
          <div class="flex items-center" style="gap: 16px">
            <img
              src="~/assets/svgs/logo.svg"
              alt="Jordan Mowry logo"
              width="45"
              height="43"
            />
            <div>
              <p class="text--bold mb-0">
                &copy;{{ currentYear }} Jordan Mowry
              </p>
              <p class="mt-0">
                <small class="text--sm">All rights reserved.</small>
              </p>
            </div>
          </div>
          <div class="flex items-center" style="gap: 16px">
            <p class="text--sm">@jordanbmowry on Social Media</p>
            <ul class="list-none flex" style="gap: 16px">
              <li>
                <a
                  href="https://www.linkedin.com/in/jordan-mowry"
                  class="cursor-pointer"
                  target="_blank"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM7.68101 13.252H11.307V24.1464H7.68101V13.252ZM11.5479 9.8818C11.5244 8.8136 10.7605 8 9.5201 8C8.27969 8 7.46875 8.8136 7.46875 9.8818C7.46875 10.9279 8.25572 11.7649 9.47304 11.7649H9.49621C10.7605 11.7649 11.5479 10.9279 11.5479 9.8818ZM20.2088 12.9961C22.5948 12.9961 24.3836 14.5535 24.3836 17.8998L24.3834 24.1464H20.7576V18.3178C20.7576 16.8538 20.2329 15.8548 18.9203 15.8548C17.9186 15.8548 17.3219 16.5283 17.0599 17.1788C16.964 17.4119 16.9404 17.7367 16.9404 18.0623V24.1467H13.3141C13.3141 24.1467 13.3619 14.2745 13.3141 13.2522H16.9404V14.7953C17.4217 14.0535 18.2836 12.9961 20.2088 12.9961Z"
                      fill="var(--light-icon)"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@media (max-width: 48.5rem) {
  .nav-links li:not(:last-child) {
    display: none;
  }
}

#toggle-theme {
  all: inherit;
  outline: revert;
  box-sizing: border-box;
  cursor: pointer;
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 1;
  padding: 5px;
  transition: translate 180ms;
}
#toggle-theme:active {
  translate: 1px, 1px;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 37.5rem) {
  .footer {
    flex-direction: column;
  }
}
</style>
