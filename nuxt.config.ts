// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    css: "/<rootDir>/assets",
  },
  css: ["@/assets/main.scss"],
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    [
      "@nuxtjs/i18n",
      {
        vueI18n: "./i18n",
      },
    ],
    "@nuxt/ui",
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/partials/_colors.scss" as *;',
        },
      },
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
