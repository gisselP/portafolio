<script setup>
import Presentation from "../views/Presentation.vue";
import About from "../views/About.vue";
import Proyects from "../views/Proyects.vue";
import Experience from "../views/Experience.vue";
</script>

<template>
  <main>
    <Presentation/>
<About />
 <Proyects />
    <Experience />
  </main>
</template>

<style lang="postcss">
main > *{
  @apply place-items-center grid; 
}
/* main > * {
  @apply flex items-center px-7 lg:px-40 md:px-28 xl:px-60;
  height: 100vh;
} */
</style>
