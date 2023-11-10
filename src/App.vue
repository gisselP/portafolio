<script setup>
import Header from './components/Header.vue';
import Left from "./components/Left.vue"
import Menu from "./components/Menu.vue";
import Sidebar from "./components/Sidebar.vue"
</script>

<template>
  <body>
    <Header />
    <Left />
    <Menu />
    <Sidebar/>
  </body>
</template>

<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/utilities";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Raleway:wght@700&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar * {
  background: transparent;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(254, 249, 249, 0.69);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}
</style>
