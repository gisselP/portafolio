<script setup></script>

<template>
  <header class="fixed top-0 right-0 z-20 w-full gap-6 px-16">
    <section class="absolute top-0 right-0 md:hidden">
      <img class="p-7" src="../assets/toggle.svg" height="80px" width="80px" />
    </section>
    <nav class="hidden md:block">
      <ul class="flex items-center justify-end gap-8 text-sm">
        <li>
          <a href="/presentation" class="flex items-center gap-2">
            <img src="../assets/union.svg" height="80" />
            Sobre mí</a
          >
        </li>
        <li>
          <a href="/about" class="flex items-center gap-2">
            <img src="../assets/earth.svg" height="80" />Proyectos</a
          >
        </li>
        <li>
          <a href="/proyects" class="flex items-center gap-2">
            <img src="../assets/ship.svg" height="80" />Experiencia</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss"></style>
