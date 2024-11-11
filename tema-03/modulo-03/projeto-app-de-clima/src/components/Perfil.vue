<template>
  <UsuarioFoto :url="'www.sistemafictio.com.br/users/photo/' + user.id" />
  <UsuarioBio texto="user.bio" />
  <UsuarioSeguidores :lista="user.seguidores" />
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: 1,
        nome: "Pedro",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        seguidores: ["Joao", "Maria", "Jose", "Lucas"],
      },
    };
  },
};
</script>

<style></style>
