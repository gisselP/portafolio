<template>
  <section class="presentation">
    <section class="content-presentation">
      <p class="pre-title">Hola , mi nombre es</p>
      <h1 class="title-monserrat">Gissel Peña Chávez</h1>
      <p class="subtitle">Diseño web fiel al concepto, eficaz y humano</p>
      <div class="flex flex-col gap-2 pr-12 leading-6 text-sm md:text-base font-light">
        <p>
          <span class="font-medium">Desarrolladora Front-End</span> apasionada
          por la precisión visual, comprometida con la
          <span class="font-medium">
            creación de interfaces web eficaces y sostenibles.
          </span>
          <span class="hidden sm:inline-block">Valoro el trabajo y la colaboración con mi equipo, y me esfuerzo por
          fomentar un ambiente de trabajo colaborativo y ameno.</span>
        </p>
      </div>
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
  background: linear-gradient(#091d27, #103f50);
}

.content-presentation {
  @apply grid place-content-center relative z-20 mx-6 gap-3.5 lg:mx-0;
  max-width: 880px;
}
.pre-title {
  @apply font-light;
  font-family: "Montserrat", sans-serif;
}


.subtitle {
  @apply hidden sm:block text-lg sm:text-2xl leading-6 md:leading-7 md:text-3xl opacity-70;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
}


button {
  @apply h-16 w-60 font-bold rounded-lg text-xl mt-2 md:mt-8;
  border-color: #51bab6;
  border-width: 4px;
}

button:hover {
  color: white;
  background-color: #2c3e50;
  border-width: 3px;
  @apply xl:px-5 xl:py-3 xl:text-xl rounded-md font-bold;
}
</style>
