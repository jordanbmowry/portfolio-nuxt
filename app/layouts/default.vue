<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
// @ts-ignore
import LogoSvg from '~/assets/icons/logo.svg?component';
// @ts-ignore
import LinkedInSvg from '~/assets/icons/linkedin.svg?component';
// @ts-ignore
import UpworkSvg from '~/assets/icons/upwork.svg?component';

// Initialize theme
const { initializeTheme } = useTheme();

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
      <Disclosure
        as="div"
        class="relative"
        :style="{ backgroundColor: 'var(--nav-bg)' }"
      >
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                :style="{
                  color: 'var(--text-color)',
                  ':hover': { backgroundColor: 'var(--nav-hover)' },
                }"
                @click="openMenu = !openMenu"
              >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon
                  v-if="!openMenu"
                  class="block h-8 w-8"
                  aria-hidden="true"
                />
              </DisclosureButton>
            </div>
            <div
              class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
            >
              <div class="flex flex-shrink-0 items-center">
                <LogoSvg width="45" height="43" alt="Jordan B Mowry logo" />
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
            <!-- Theme Toggle Button -->
            <div
              class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
              <ThemeToggle />
            </div>
          </div>
        </div>

        <DisclosurePanel
          v-if="openMenu"
          class="fixed inset-0 top-16 left-0 z-50 sm:hidden"
          :style="{ backgroundColor: 'var(--nav-bg)' }"
        >
          <!-- Backdrop -->
          <div
            class="fixed inset-0 bg-black bg-opacity-75"
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
                'block rounded-md px-3 py-3 text-lg font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
              @click="openMenu = false"
            >
              {{ item.name }}
            </DisclosureButton>

            <!-- Theme Toggle in Mobile Menu -->
            <div class="flex justify-center py-4">
              <ThemeToggle />
            </div>

            <DisclosureButton
              v-if="openMenu"
              class="absolute top-4 right-4 p-2 text-gray-400 hover:text-white focus:outline-none"
              @click="openMenu = false"
            >
              <XMarkIcon class="h-8 w-8" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </nav>

    <!-- Main Content -->
    <main class="flex-1 pt-12">
      <slot />
    </main>

    <!-- Footer -->
    <footer>
      <div class="max-w-5xl px-5 mx-auto">
        <div class="footer">
          <div class="flex items-center" style="gap: 16px">
            <LogoSvg width="45" height="43" alt="Jordan B Mowry logo" />
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
            <p class="text--sm">@jordanbmowry on</p>
            <ul class="list-none flex" style="gap: 16px">
              <li>
                <a
                  href="https://www.linkedin.com/in/jordan-mowry"
                  class="cursor-pointer"
                  target="_blank"
                >
                  <LinkedInSvg width="32" height="32" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~01a20a180b9ed432fc"
                  class="cursor-pointer"
                  target="_blank"
                >
                  <UpworkSvg width="32" height="32" />
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
}

footer {
  margin-top: auto;
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
