<template>
  <div class="m-auto max-w-screen-lg mt-20">
    <h1 class="text-center text-5xl font-semibold">Usuários Logados:</h1>

    <ul class="grid grid-cols-3 text-center mt-20 gap-40 justify-center">
      <li
        v-for="(user, index) in loggedUsers"
        :key="index"
        class="bg-blue-400 py-2 px-5 rounded-md font-bold"
      >
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const userStore = useLogin();

const { loggedUsers } = storeToRefs(userStore);
</script>
