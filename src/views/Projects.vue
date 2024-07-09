<script setup>
import { ref } from "vue";
const proyects = ref([
  {
    title: "Eva",
    description:
      "Es un portal integral para estudiantes, docentes y personal administrativo. Ofrece servicios como <b>consulta de horarios, acceso a trámites, marcación de asistencia e información relevante,</b> con vistas personalizadas para cada usuario.<br> Diseñado para mejorar la gestión académica y administrativa.",
    resources: ["Javascript", "HTML & CSS", "Tailwind", "Vue 3", "API REST"],
    imgs: "image1",
  },
  {
    title: "Burger Queen",

    description:
      "Es una interfaz para un restaurante en el cual se pueden tomarpedidos, enviarlos al carrito de compras y también cambiar sus estados consumiendo una API proporcionado por el cliente.",
    resources: ["Angular", "API REST", "Postman"],
    imgs: "image4",
  },
  {
    title: "Only Cats",
    description:
      " Es una red social tematizada para personas amantes de los gatos que permite crear y compartir contenido. En él se implementó el sistema CRUD y la autenticación de usuarios con Firebase.",
    resources: ["Javascript", "HTML & CSS", "SPA", "Firebase"],
    imgs: "image3",
  },
]);
</script>
<template>
  <section id="projects" class="proyects">
    <article class="content content-proyects">
      <p class="title-header">Proyectos</p>
      <article class="grid grid-cols-1 grid-rows-3 gap-12 pt-3 mt-6 sm:gap-24">
        <section
          v-for="(item, index) in proyects"
          :key="item"
          class="grid items-center justify-between gap-6 pb-10 border-b sm:p-0 sm:border-none"
          :class="
            index % 2 === 0 ? 'grid-cols-auto-fit ' : 'grid-cols-fit-auto '
          "
        >
          <inline-svg
            :src="require(`@/assets/proyects/${item.imgs}.svg`)"
            :class="index % 2 === 0 ? 'sm:order-2 sm:text-right' : 'sm:order-1'"
            class="image-svg"
          ></inline-svg>
          <div
            class="text-sm"
            :class="
              index % 2 === 0
                ? 'sm:order-1 sm:text-left'
                : 'sm:order-2 sm:text-right'
            "
          >
            <p class="text-base font-bold">{{ item.title }}</p>
            <p v-html="item.description" class="my-2"></p>
            <p
              class="flex flex-row flex-wrap gap-3"
              :class="index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'"
            >
              <span v-for="i in item.resources" :key="i">{{ i }}</span>
            </p>
          </div>
        </section>
      </article>
    </article>
  </section>
</template>

<style lang="postcss" scoped>
.proyects {
  @apply py-32 h-full;
  background: linear-gradient(#1c7891, #68afb8);
}
.proyects article {
  @apply flex flex-col h-full;
}
span {
  @apply text-sm font-bold inline-block;
}
.title-proyect {
  @apply font-bold text-base;
  font-family: "Montserrat", sans-serif;
}
.image-svg {
  @apply mx-auto sm:m-0 lg:h-64 w-60 h-auto lg:w-full sm:max-w-full shadow-2xl;
}
@screen sm {
  .grid-cols-auto-fit {
    @apply gap-12;
    grid-template-columns: 1fr auto;
  }
  .grid-cols-fit-auto {
    @apply gap-12;
    grid-template-columns: auto 1fr;
  }
}
</style>
