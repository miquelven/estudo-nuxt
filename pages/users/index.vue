<template>
  <div>
    <UCard class="min-h-[calc(100vh-100px)]">
      <template #header>
        <p class="text-sm">Quantidade de usuários: {{ usersLength }}</p>
        <h3
          class="my-5 flex items-center text-xl font-semibold"
          id="usersSelected"
        >
          Usuários Selecionados:
          <span
            class="bg-blue-600 px-6 rounded-md mx-4"
            v-for="(user, index) in userSelected"
            :key="index"
            >{{ user }}</span
          >
        </h3>
      </template>

      <h1 class="text-center text-3xl font-semibold mb-10">
        {{ $t("titulo") }}
      </h1>
      <div v-if="loading">
        <h3 class="font-3xl font-bold">Carregando</h3>
      </div>
      <ListUsers :users="users" v-else />
    </UCard>
  </div>
</template>

<script setup>
const usersInfo = useUsers();

const userStore = useUserStore();

const { userSelected } = storeToRefs(userStore);

const { users, loading, usersLength } = storeToRefs(usersInfo);
const { getUsers } = usersInfo;

const nuxtApp = useNuxtApp();

onMounted(() => {
  // if (users.value.length > 0) return;
  console.log(users.value);
  getUsers("delay=1");
  //toast error modificado
  // nuxtApp.$toast.error("Erro na aplicação");
});
</script>
