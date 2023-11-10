<template>
  <section class="presentation">
    <section class="flex flex-col items-start justify-center gap-4">
      <p class="text-sm font-medium xl:mr-64 lg:text-lg">Hola, mi nombre es</p>
      <h1>Gissel Peña <span class="hidden md:inline">Chávez</span></h1>
      <p class="subtitle">
        Explorando y construyendo experiencias web con empatía
      </p>
      <p class="pt-3 text-sm font-medium xl:mr-64 lg:text-lg">
        Soy una <span class="font-bold">front-end developer</span> curiosa y dedicada a comprender las necesidades de los usuarios para ofrecer soluciones
        efectivas y sostenibles.
        ¡Echa un vistazo a mi
        trabajo!
      </p>
      <button @click="scrollToAbout">Cónoceme más</button>
    </section>
  </section>
</template>

<script setup>
const scrollToAbout = () => {
  // Obtener el elemento "About" por su ID o clase
  const aboutSection = document.querySelector("#about"); // Suponiendo que tiene un ID llamado "about"

  // Hacer scroll hacia el elemento "About"
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" }); // Usa "smooth" para una transición suave
  }
};
</script>

<style lang="postcss" scoped>
.presentation {
  height: 100vh;
  background: linear-gradient(0deg, #e6ebfe 4.93%, #b4c3fe 88.77%);
}

h1 { 
  @apply  text-5xl lg:text-6xl font-bold;
  font-family: "Raleway", sans-serif;
  line-height: 1;
}

.subtitle {
  @apply text-2xl leading-7 md:text-4xl opacity-70;
  font-family: "Raleway", sans-serif;
}

button {
  @apply py-2 px-4 md:px-5 md:py-3 mt-12 lg:w-60 md:text-lg xl:text-xl rounded-md font-bold;
  border-color: #2c3e50;
  border-width: 3px;
}

button:hover {
  color: white;
  background-color: #2c3e50;
  border-width: 3px;
  @apply xl:px-5 xl:py-3 xl:text-xl rounded-md font-bold;
}

</style>
