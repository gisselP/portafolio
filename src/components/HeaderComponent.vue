<script setup>
import { ref } from 'vue'

const headerItems = ref([
  {
    link: 'presentation',
    icon: 'union',
    text: 'Sobre mí'
  },
  {
    link: 'about',
    icon: 'earth',
    text: 'Proyectos'
  },
  {
    link: 'proyects',
    icon: 'ship',
    text: 'Experiencia'
  }
])
</script>

<template>
  <header class="fixed top-0 right-0 z-20 w-full">
    <section class="absolute top-0 right-0 md:hidden">
      <img class="p-7" src="../assets/toggle.svg" height="80px" width="80px" />
    </section>
    <nav class="hidden md:block">
      <ul class="flex items-center justify-end h-24 gap-10 px-20 text-sm">
        <li v-for="item of headerItems" :key="item">
          <a :href="`/${item.link}`"> 
            <inline-svg :src="require(`@/assets/${item.icon}.svg`)"></inline-svg>
            {{item.text}}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="postcss" scoped>
ul li > a {
  @apply flex items-center gap-2 font-medium ;
  font-family: "Montserrat";
}
</style>
