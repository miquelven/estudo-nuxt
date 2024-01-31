import { defineStore } from "pinia";

export const useUserStore = defineStore(
  "userStore",
  () => {
    const userSelected = ref<string[]>([]);

    const addUserSelected = (nameParam: string) => {
      const containUser = userSelected.value.includes(nameParam);
      if (containUser)
        return (userSelected.value = userSelected.value.filter(
          (userName) => userName !== nameParam
        ));
      userSelected.value.push(nameParam);
    };

    const qtdUserSelected = computed(() => userSelected.value.length);

    return {
      userSelected,
      addUserSelected,
      qtdUserSelected,
    };
  },
  {
    persist: true,
  }
);

export const useLogin = defineStore(
  "userLogin",
  () => {
    const loggedUsers = ref<string[]>([]);

    const loginUser = (nameUser: string) => {
      if (loggedUsers.value.includes(nameUser))
        return loggedUsers.value.splice(1, [
          loggedUsers.value.indexOf(nameUser),
        ]);

      loggedUsers.value.push(nameUser);
    };

    const qtdLoggedUsers = computed(() => loggedUsers.value.length);

    return {
      loggedUsers,
      loginUser,
      qtdLoggedUsers,
    };
  },
  {
    persist: {
      // localStorage
      storage: persistedState.localStorage,
      // cookies
      // storage: persistedState.cookies
      // cookies com options
      // storage: persistedState.cookiesWithOptions({
      //   expires:
      // })
      // session
      // storage: persistedState.sessionStorage
    },
  }
);
