<script setup>
import Header from "./components/header.vue";
import Left from "./components/left.vue";
import Menu from "./components/menu.vue";

</script>

<template>
  <body>
    <Header />
    <Left />
    <Menu />
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

.grilla {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  background: linear-gradient(0deg, #faebdb 4.93%, #fbdddb 88.77%);
}
.aside {
  grid-column-start: 1;
}
.blue {
  background: blue;
  display: fixed;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
}
</style>
