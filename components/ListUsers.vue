<template>
  <ul id="listUsersArea">
    <li v-for="user in users" :key="user.key">
      <div class="max-w-1/2">
        <UButton @click="togglePage(user.id)" label="Ver Mais" color="gray">
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right-20-solid" />
          </template>
        </UButton>
      </div>

      <h3>{{ user.first_name }} {{ user.last_name }}</h3>
      <img :src="user.avatar" alt="Imagem do usuário" />
      <span v-email>{{ user.email }}</span>
      <button class="select" @click="addUser(user.first_name)">
        Selecionar
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps(["users"]);

const userStore = useUserStore();

const { addUserSelected } = userStore;

const router = useRouter();

const togglePage = (id: number) => {
  router.push(`/users/${id}`);
};

const nuxtApp = useNuxtApp();

const addUser = (userName: string) => {
  nuxtApp.$toast.success("Usuário selecionado!");
  addUserSelected(userName);
};
</script>
