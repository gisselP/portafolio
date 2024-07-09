<script setup>
import Header from './components/HeaderComponent.vue';
import Left from "./components/Left.vue"
import Menu from "./components/Menu.vue";
import Sidebar from "./components/Sidebar.vue"
import Background from "./components/Background.vue"
</script>

<template>
  <div>
    <Background />
    <Header />
    <Left />
    <Menu />
    <Sidebar />
  </div>
</template>
<style lang="postcss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Raleway:wght@100..900&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  @apply h-full relative;
  color: #fdefc1;
  font-family: "Raleway", sans-serif;
}

.title-header {
  @apply text-base md:text-xl font-bold;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
}

.title-monserrat {
  line-height: 1;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-size: 30.5px;
  @apply font-semibold sm:text-5xl;
}

@media (min-width: 600px) {
  .title-monserrat {
    font-size: 40px;
    line-height: 1;
  }
}

@media (min-width: 1024px) {
  .title-monserrat {
    font-size: 55px;
    line-height: 1;
  }
}
</style>