<template>
  <section class="experience">
    <section class="content-experience">
      <section class="flex flex-col justify-center gap-2 my-auto">
        <p class="title-header">Experiencia</p>
        <h1 class=" title-monserrat">Front end Developer</h1>
        <p class="text-md md:text-lg font-bold">
          InLearning Institutos <span class="hidden sm:inline-block">| Enero 2022 -Actualidad</span>
        </p>
        <ul class="z-20 mt-6 ml-5 flex flex-col font-normal gap-1 text-sm md:ml-20 md:text-base">
          <li>
            Maquetar nuevas vistas con Tailwind implementando responsive
            design.
          </li>
          <li> Desarrollar interfaces dinámicas y funcionales con Vue 3.</li>
          <li> Realizar integraciones con servicios API Rest.</li>
          <li>
            Identificar y solucionar con eficacia incidencias en el código.
          </li>
          <li>
             Coordinar con el equipo de backend las integraciones requeridas.
          </li>
        </ul>
      </section>
      <img class="palm" src="../assets/palm.svg"  alt="palm"/>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.experience {
  height: 100vh;
  background: linear-gradient(#68AFB8, #BAE5DB);
}
.content-experience{
  @apply mx-6 lg:mx-0 w-full;
  max-width: 880px;
  color: #186E86;
}
.experience article {
  @apply grid items-center w-full h-full;
}
.palm {
  @apply absolute bottom-0 mx-auto w-40 h-auto md:w-96 sm:max-w-full;
  right: 10%;
}

</style>
