<template>
  <header>
    <Header />
  </header>

  <UContainer class="min-h-[calc(100vh-100px)]">
    <slot></slot>
  </UContainer>
  <UDivider
    label="Footer"
    :ui="{ label: 'text-2xl text-white/70 ' }"
    type="dashed"
    class="py-5 mt-10"
  />
</template>

<!-- <script setup lang="ts">
const useLoginStore = useLogin();

const { locale } = useI18n();

const { qtdLoggedUsers } = storeToRefs(useLoginStore);
</script> -->
