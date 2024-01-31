export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive("email", {
    mounted(el) {
      el.style = "color: #f0f; cursor=pointer; margin: 10px 0";
    },
  });
});
