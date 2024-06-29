<script setup>
import Header from './components/HeaderComponent.vue';
import Left from "./components/Left.vue"
import Menu from "./components/Menu.vue";
import Sidebar from "./components/Sidebar.vue"
import Background from "./components/Background.vue"
</script>

<template>
  <body>
    <Background/>
    <Header />
    <Left />
    <Menu />
    <Sidebar/>
  </body>
</template>

<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/utilities";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Raleway:wght@100..900&display=swap');

body{
  @apply h-full relative;
  color: #fdefc1;
  font-family: "Raleway", sans-serif;
}
.title-header{
  @apply text-base md:text-xl font-bold;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
}  

.title-monserrat {
  @apply font-semibold text-3xl sm:text-5xl;
  line-height: 1;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
}

@screen md {
  .title-monserrat {
    font-size: 55px;
    line-height: 1;
  }
}
  /* 
.text-blue-dark{
  color: #2C3E50;
}

.text-wine-ligth{
  color: #EF959D;
}

.text-wine-dark{
  color: #811E0E;
}

::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar * {
  background: transparent;
}

 ::-webkit-scrollbar-track {
  border-radius: 10px;
}

 ::-webkit-scrollbar-thumb {
  background: rgba(254, 249, 249, 0.69);
  border-radius: 10px;
}

 ::-webkit-scrollbar-thumb:hover {
  background: #b30000;
} */
</style>
