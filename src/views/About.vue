<template>
  <article id="about" class="about">
    <section class="content-about">
      <section class="flex flex-col items-start gap-3 md:gap-5">
          <p class="title-header">Sobre mí</p>
          <div
            class="grid gap-2 md:gap-4 text-sm md:text-base"
          >
            <p>
              ¡Hola de nuevo! Soy Gissel, tengo 24 años y me considero una persona
              curiosa con muchas ganas de jugar, experimentar y aprender.
            </p>
            <p>
              En el 2021, empecé mi recorrido en la programación. Ingresé a un
              bootcamp de desarrollo web en donde aprendí distintas herramientas
              como Javascript, CSS y HTML.
            </p>
            <p>
              Quedé facinada por este mundo. Siempre descubres algo nuevo, nunca
              acaba.
            </p>
            <p>
              En la actualidad estoy en el camino de tomar distintas oportunidades
              que me lleven a mi objetivo que es generar un impacto positivo a las
              personas.
            </p>
          </div>
      </section>
      <img class="transition-image floating-image" src="../assets/prototipo.svg" />
    </section>
  </article>
</template>

<script></script>

<style lang="postcss" scoped>
.about {
  height: 100vh;
  background: linear-gradient(#103F50,#1c7891);
}
.content-about{
  @apply flex relative flex-col md:flex-row z-20 gap-10 md:gap-20 mx-6 lg:mx-0;
  max-width: 880px;
}
.transition-image {
  @apply block mx-auto w-40 h-auto lg:w-full md:max-w-full;
  transition: transform 0.3s ease-in-out;
}
.transition-image:hover {
  transform: scale(1.05);
}
.floating-image {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
