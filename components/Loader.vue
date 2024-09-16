<template>
  <div>
    <LoadingSpinner class="spinner" />
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import LoadingSpinner from '~/assets/svgs/loading-spinner.svg?component';
</script>

<style scoped>
.spinner {
  animation: rotate 2s linear infinite;
  position: block;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
}

.spinner .path {
  stroke: var(--primary);
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
