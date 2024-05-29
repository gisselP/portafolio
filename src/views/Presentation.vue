<template>
  <section class="presentation">
    <section class="content-presentation">
      <p class="pre-title">Hola , mi nombre es</p>
      <h1>Gissel Peña Chávez</h1>
      <p class="subtitle">
        Diseño web fiel al concepto, eficaz y humano
      </p>
      <div class="text-base flex flex-col gap-2 pr-12">
        <p>
          <span class="font-semibold">Desarrolladora Front-End</span> apasionada por la precisión visual, comprometida con la <span class="font-semibold">creación de interfaces web eficaces y sostenibles. </span>       
        </p>
        <p>
          Valoro profundamente las conexiones, tanto en el código como con mi equipo, y me esfuerzo por fomentar un ambiente de trabajo colaborativo y ameno.      
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
  background: linear-gradient( #091d27, #103F50);
}

.content-presentation {
  @apply grid place-content-center relative z-20 gap-4;
  width: 880px;
}

h1 { 
  @apply text-6xl font-semibold;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
}
.pre-title{
  @apply font-bold xl:mr-64 text-base;
}

.subtitle {
  @apply text-2xl leading-7 md:text-4xl opacity-70;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
}

button {
  @apply h-16 w-60 font-bold rounded-lg text-xl mt-8;
  border-color: #51BAB6;
  border-width: 4px;
}

button:hover {
  color: white;
  background-color: #2c3e50;
  border-width: 3px;
  @apply xl:px-5 xl:py-3 xl:text-xl rounded-md font-bold;
}

</style>
