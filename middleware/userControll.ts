export default defineNuxtRouteMiddleware((to, from) => {
  const idParam = +to.params.id;
  if (isNaN(idParam) || idParam < 0) {
    return navigateTo("/users");
  }
});
