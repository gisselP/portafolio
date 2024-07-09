<template>
  <section id="experience" class="experience">
    <section class="content content-experience">
      <section class="flex flex-col justify-center gap-2 my-auto">
        <p class="title-header">Experiencia</p>
        <h1 class="title-monserrat">Front end Developer</h1>
        <p class="font-bold text-md md:text-lg">
          InLearning Institutos <span class="hidden sm:inline-block">| Enero 2022 -Actualidad</span>
        </p>
        <ul class="list-experience">
          <li>
            <b>Creo interfaces adaptables y estilizadas </b> utilizando Tailwind CSS.
          </li>
          <li> 
            <b>Implemento componentes </b>interactivos y reactivos utilizando Vue 3.
          </li>
          <li> 
            <b>Conecto fluidamente el front-end y back-end </b>mediante servicios API REST.
          </li>
          <li>
            <b>Resolución eficaz de incidencias y optimización </b>del código para mejorar el rendimiento y la mantenibilidad del sistema.
          </li>
          <li>
            <b>Comunicación continua y efectiva con diversas áreas</b> y equipos, asegurando una integración cohesiva y alineada con los objetivos del proyecto.
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
  @apply  w-full;
  color: #186E86;
}
.experience article {
  @apply grid items-center w-full h-full;
}
.list-experience {
  list-style: disc;
  font-weight: 500;
  @apply pl-10 text-sm lg:text-base flex flex-col gap-1.5 py-2 z-10 pb-20 sm:pb-0;
}
.palm {
  @apply absolute bottom-0 mx-auto w-40 h-auto md:w-96 sm:max-w-full;
  right: 10%;
}

</style>
