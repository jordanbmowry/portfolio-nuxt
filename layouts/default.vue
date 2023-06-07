<script lang="ts" setup>
const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <div>
    <nav>
      <div class="max-w-5xl px-5 mx-auto">
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
      <button id="toggle-theme" aria-label="Toggle dark theme">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="var(--light-icon)"
        >
          <rect fill="none" height="24" width="24" />
          <path
            d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
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
