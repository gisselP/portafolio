<template>
  <section class="experience">
    <article class="relative">
      <section class="z-10 flex flex-col justify-center gap-2 my-auto">
        <p class="text-lg font-bold">Experiencia</p>
        <h1 class="text-6xl">Front end Developer</h1>
        <p class="text-lg font-bold">
          InLearning Institutos | Enero 2022 -Actualidad
        </p>
        <ul class="mt-6 ml-5 text-sm md:ml-20 md:text-base">
          <li>
            • Maquetar nuevas vistas con Tailwind implementando responsive
            design.
          </li>
          <li>• Desarrollar interfaces dinámicas y funcionales con Vue 3.</li>
          <li>• Realizar integraciones con servicios API Rest.</li>
          <li>
            • Identificar y solucionar con eficacia incidencias en el código.
          </li>
          <li>
            • Coordinar con el equipo de backend las integraciones requeridas.
          </li>
        </ul>
      </section>
      <img class="absolute right-0 w-40 sm:w-56 lg:w-80 xl:w-96 -bottom-2" src="../assets/trees.svg"  />
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.experience {
  @apply overflow-hidden;
  height: 100vh;
  background: linear-gradient(#68AFB8, #BAE5DB);
}
.experience article {
  @apply grid items-center w-full h-full;
}
h1 { 
  @apply  text-5xl lg:text-6xl font-bold;
  font-family: "Raleway", sans-serif;
  line-height: 1;
}

</style>
