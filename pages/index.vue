<template>
  <div>
    <h1 class="text-5xl font-semibold text-white/90">
      Acesse a aba de Usuários para vê-los!
    </h1>
    <NuxtLink class="mt-20 text-blue-700 text-2xl" to="/users"
      >Usuários</NuxtLink
    >
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>
