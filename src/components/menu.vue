<script setup>
import Presentation from "../views/Presentation.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import Experience from "../views/Experience.vue";
</script>

<template>
  <main>
    <Presentation/>
    <About />
    <Projects />
    <Experience />
  </main>
</template>

<style lang="postcss">
main > *{
  @apply place-items-center grid; 
}

.content{
  @apply px-8 sm:px-12 md:px-20 lg:px-0 z-10;
  max-width: 880px;
}

/* main > * {
  @apply flex items-center px-7 lg:px-40 md:px-28 xl:px-60;
  height: 100vh;
} */
</style>
