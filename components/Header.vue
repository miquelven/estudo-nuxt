<template>
  <header class="bg-gray-700/40">
    <div
      class="flex w-full m-auto justify-between px-4 py-5 item-center md:max-w-screen-lg"
    >
      <h1 class="text-3xl font-bold">Miquelven</h1>
      <select
        v-model="locale"
        class="bg-transparent font-bold border-4 border-white/50 rounded-md"
      >
        <option class="bg-gray-700/4 text-white focus:bg-red-300" value="pt">
          pt
        </option>
        <option class="bg-gray-700/40 text-white" value="en">en</option>
      </select>
      <nav class="flex items-center gap-10">
        <NuxtLink
          v-for="(route, index) in routes"
          :key="index"
          class="hover:underline"
          :to="route.path"
          >{{ route.name }}</NuxtLink
        >
        <ClientOnly>
          <UButton
            :icon="
              isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
            "
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
      </nav>
    </div>
    <p class="max-w-screen-lg mx-auto text-white/40">
      Quantidade de usuários logados: {{ qtdLoggedUsers }}
    </p>
  </header>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const useLoginStore = useLogin();

const { qtdLoggedUsers } = storeToRefs(useLoginStore);

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const { routes } = routesApp();
</script>
