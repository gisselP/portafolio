<template>
  <section class="presentation">
    <article>
      <section class="flex flex-col justify-center gap-2 my-auto">
        <p class="text-xl font-bold">Hola,soy</p>
        <h1 class="text-6xl">Gissel Peña Chávez</h1>
        <p class="mr-64 text-lg">
          front end developer curiosa por entender las necesidades del usuario
          con el fin de dar soluciones efectivas y sustentables. Siempre
          enfocada en la experiencia del mismo y al diseño de la página web.
        </p>
        <button>Cónoceme más</button>
      </section>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.presentation {
  @apply flex items-center px-24 lg:px-60;
  height: 100vh;
  background: linear-gradient(0deg, #e6ebfe 4.93%, #b4c3fe 88.77%);
}
.presentation article {
  @apply relative z-20 flex items-center;
  margin: 0px auto;
  max-width: 1000px;
  height: 100vh;
}

h1 {
  font-family: "Raleway", sans-serif;
  @apply text-6xl;
}
button {
  border-color: #2c3e50;
  border-width: 3px;
  @apply px-5 py-3 mt-4 w-60 text-xl rounded-md font-bold;
}
button:hover {
  color: white;
  background-color: #2c3e50;
  border-width: 3px;
  @apply px-5 py-3 mt-4 text-xl rounded-md font-bold;
}
</style>
