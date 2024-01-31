<template>
  <div class="flex flex-col items-center">
    <h3 class="text-4xl font-semibold">Informações do usuário:</h3>

    <div v-if="users" class="flex flex-col items-center">
      <p class="text-2xl mt-16 mb-2 font-bold text-white/70">{{ fullName }}</p>
      <img
        class="rounded-full shadow-xl shadow-white/80 my-10 opacity-70 hover:opacity-100 transition-all duration-300"
        :src="users.avatar"
        alt="Imagem do usuário"
      />
      <p v-email>{{ users.email }}</p>
      <button
        class="mt-10 bg-[#f0f] w-full py-2 rounded-xl font-bold uppercase opacity-80 shadow-md shadow-white hover:opacity-100 transition-all duration-300"
        @click="loginUser(fullName)"
      >
        Logar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const id = route.params.id;

const usersInfo = useUsers();

const userLoginStore = useLogin();

const { getUsers } = usersInfo;
const { users } = storeToRefs(usersInfo);

const { loginUser } = userLoginStore;

onMounted(async () => {
  await getUsers(`id=${id.toString()}`);
});

const fullName = computed(
  () => `${users.value.first_name} ${users.value.last_name}`
);
</script>
