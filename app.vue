<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup></script>

<style>
.page-enter-active {
  animation: page-in 0.5s;
}
.page-leave-active {
  animation: page-in 0.5s reverse;
}
@keyframes page-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
