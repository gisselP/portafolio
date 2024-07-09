<template>
  <section id="presentation" class="presentation">
    <section class="content content-presentation">
      <p class="pre-title">Hola , mi nombre es</p>
      <h1 class="title-monserrat">Gissel Peña Chávez</h1>
      <p class="subtitle">Diseño web fiel al concepto, eficaz y humano</p>
      <div class="flex flex-col gap-2 text-sm font-light leading-6 sm:pr-12 md:text-base">
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
  const aboutSection = document.querySelector("#about"); // Suponiendo que tiene un ID llamado "about"

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
  @apply grid place-content-center relative z-20 gap-3.5 justify-items-start;
}

.pre-title {
  @apply font-light;
  font-family: "Montserrat", sans-serif;
}

.subtitle {
  @apply hidden sm:block text-lg sm:text-2xl leading-6 md:leading-7 lg:text-3xl opacity-70;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
}


button {
  @apply px-12 py-2 md:py-3 font-bold rounded-lg lg:text-lg mt-2;
  border-color: #51bab6;
  border-width: 3px;
}

button:hover {
  color: #95edea;
  background-color: #2c3e50;
  border-width: 3px;
  box-shadow: 0 1px 30px 0 #95edea;
  transition: box-shadow 0.3s ease; 
  @apply px-12 py-2 md:py-3 font-bold rounded-lg lg:text-lg mt-2;
}
</style>
