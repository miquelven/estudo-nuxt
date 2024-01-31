export default function () {
  const users = ref([]);
  const loading = ref(true);

  const getUsers = async (params: string) => {
    try {
      const res = await fetch(`https://reqres.in/api/users?${params}`);
      const json = await res.json();
      users.value = json.data;
    } catch (err) {
      alert("Erro ao obter usuários!");
    } finally {
      loading.value = false;
    }
  };

  const usersLength = computed(() => users.value.length);

  return { users, loading, getUsers, usersLength };
}
