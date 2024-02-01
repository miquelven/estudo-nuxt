<template>
  <div
    class="text-green-400 font-bold h-screen w-full flex flex-col justify-center items-center gap-10"
  >
    <p class="text-8xl">{{ error.statusCode }}</p>
    <p class="text-xl">{{ error.statusMessage }}</p>

    <UButton>
      <NuxtLink to="/">Ir para Home</NuxtLink>
    </UButton>

    <!-- <UButton @click="redirectHome">Ir para Home</UButton> -->
  </div>
</template>

<script setup>
defineProps({
  error: {
    default: {
      url: "",
      statusCode: 0,
      statusMessage: "",
      message: "",
      description: "",
      data: {},
    },
  },
});

// OUTRA FORMA DE REDIRECIONAR
// const redirectHome = () => clearError({ redirect: "/" });
</script>
