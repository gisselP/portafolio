<template>
  <section class="experience">
    <article>
      <section class="absolute bottom-0 right-0">
        <img src="../assets/tree.svg" width="380" />
      </section>
      <section class="flex flex-col justify-center gap-2 my-auto">
        <p class="text-lg font-bold">Experiencia</p>
        <h1 class="text-6xl">Front end Developer</h1>
        <p class="text-lg font-bold">
          InLearning Institutos | Enero 2022 -Actualidad
        </p>
        <ul class="mt-6 ml-20">
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
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.experience {
  background: linear-gradient(357.86deg, #cdeec1 6.39%, #ffedd8 87.78%);
}
.experience article {
  @apply relative z-20 flex items-center;
  margin: 0px auto;
  max-width: 1000px;
  height: 100vh;
}
h1 {
  font-family: "Raleway", sans-serif;
  @apply text-6xl;
}
</style>
