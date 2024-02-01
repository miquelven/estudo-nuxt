interface Routes {
  name: string;
  path: string;
}

export default () => {
  const routes: Routes[] = [
    { name: "Home", path: "/" },
    { name: "Users", path: "/users" },
    { name: "UsersLogged", path: "/userslogged" },
  ];

  return { routes };
};
