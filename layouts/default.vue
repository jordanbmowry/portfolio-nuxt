<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const currentYear = computed(() => new Date().getFullYear());
const openMenu = ref(false);
const navigation = [
  { name: 'HOME', href: '/', current: true, styles: 'btn btn--nav' },
  {
    name: 'ABOUT ME',
    href: '/about-me',
    current: false,
    styles: 'btn btn--nav',
  },
  {
    name: 'PORTFOLIO',
    href: '/portfolio',
    current: false,
    styles: 'btn btn--nav',
  },
  {
    name: 'EXPERIENCE',
    href: '/experience',
    current: false,
    styles: 'btn btn--nav',
  },
  {
    name: 'HIRE ME',
    href: '/hire-me',
    current: false,
    styles: 'btn btn--raised',
  },
];
</script>

<template>
  <div id="app">
    <!-- Navigation -->
    <nav>
      <Disclosure as="div" class="relative bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                @click="openMenu = !openMenu"
              >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon
                  v-if="!openMenu"
                  class="block h-6 w-6"
                  aria-hidden="true"
                />
              </DisclosureButton>
            </div>
            <div
              class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
            >
              <div class="flex flex-shrink-0 items-center">
                <img
                  src="~/assets/svgs/logo.svg"
                  alt="Jordan B Mowry logo"
                  width="45"
                  height="43"
                />
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="item.styles"
                    :aria-current="item.current ? 'page' : undefined"
                    >{{ item.name }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel
          v-if="openMenu"
          class="fixed inset-0 top-16 left-0 z-50 bg-gray-800 sm:hidden"
        >
          <!-- Backdrop -->
          <div
            class="fixed inset-0 bg-black bg-opacity-50"
            aria-hidden="true"
          ></div>
          <div class="relative z-10 space-y-1 px-2 pb-3 pt-2">
            <DisclosureButton
              v-for="item in navigation"
              :key="item.name"
              as="a"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
              @click="openMenu = false"
            >
              {{ item.name }}
            </DisclosureButton>
            <DisclosureButton
              v-if="openMenu"
              class="absolute top-4 right-4 p-2 text-gray-400 hover:text-white focus:outline-none"
              @click="openMenu = false"
            >
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </nav>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer>
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

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--nav-background);
}

footer {
  margin-top: auto;
}

.toggle-theme {
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 1001;
  padding: 5px;
  cursor: pointer;
  transition: transform 180ms;
}

.toggle-theme:active {
  transform: translate(1px, 1px);
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
