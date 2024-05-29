<template>
  <article id="about" class="about">
    <section class="content-about">
      <section class="flex flex-col items-start gap-5">
          <p class="text-xl font-bold ">Sobre mí</p>
          <div
            class="grid text-base gap-4"
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
      <img class="" src="../assets/prototipo.svg" />
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
  @apply flex relative z-20 gap-20;
  width: 880px;
}
</style>
