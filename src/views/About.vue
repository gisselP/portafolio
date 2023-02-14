<template>
  <section class="about">
    <article class="about-grid">
      <article
        class="grid items-center w-full h-full grid-cols-2 justify-items-end"
      >
        <section class="flex flex-col items-start">
          <p class="text-xl font-bold">Sobre mí</p>
          <div class="flex flex-col gap-4 mt-6 mr-20 text-lg">
            <p>
              ¡Hola de nuevo! Soy Gissel, tengo 22 años y me considero una
              persona curiosa con muchas ganas de jugar, experimentar y
              aprender.
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
              En la actualidad estoy en el camino de tomar distintas
              oportunidades que me lleven a mi objetivo que es generar un
              impacto positivo a las personas.
            </p>
          </div>
        </section>
        <section>
          <img src="../assets/astronout.svg" height="200" />
        </section>
      </article>
    </article>
  </section>
</template>

<script></script>

<style lang="postcss" scoped>
.about {
  background: linear-gradient(180deg, #e6ebfe 0%, #fee6f2 100%);
}
.about-grid {
  @apply relative z-20 flex items-center;
  margin: 0px auto;
  max-width: 1000px;
  height: 100vh;
}
</style>
