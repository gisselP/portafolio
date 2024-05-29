<script setup>
import { ref } from "vue";
const proyects = ref([
  {
    description:'Descripción de eva',
    plataforms:'Angular Firebase',
    imgs: [
      'login',
      'comunidad',
      'notification',
    ]
  },
  {
    description:'Es una interfaz para un restaurante en el cual se pueden tomarpedidos, enviarlos al carrito de compras y también cambiar sus estados consumiendo una API proporcionado por el cliente.',
    plataforms:'Angular API Postman',
    imgs: [
      'comunidad',
      'comunidad',
      'comunidad',
    ]
  },
  {
    description:' Es una red social tematizada para personas amantes de los gatos que permite crear y compartir contenido. En él se implementó el sistema CRUD y la autenticación de usuarios con Firebase.',
    plataforms:'Javascript CSS HTML SPA Firebase',
    imgs: [
      'comunidad',
      'comunidad',
      'comunidad',
    ]
  }
])

</script>
<template>
  <section class="proyects">
    <article>
      <p class="text-xl font-bold">Proyectos</p>
      <article class="grid grid-cols-1 grid-rows-3 gap-20 pt-3 mt-6">
        <section v-for="(item, index) in proyects" :key="item" class="grid items-center justify-between grid-cols-2 gap-9">
          <section class="slider" :class="index % 2 === 0 ? 'order-1 mr-auto ':'order-2'"> 
            <div class="slides">
              <template v-for="image in item.imgs" :key="image">
                <img :src="require(`@/assets/${image}.png`)" class="slide" />
              </template> 
           </div>
           <div class="overlay"></div>
          </section>
          <p class="text-sm md:text-base" :class="index % 2 === 0 ? 'order-2 text-right':'order-1'">
            {{ item.description}}
            <br />
            <span>{{ item.plataforms}}</span>
          </p>
        </section>
      </article>
    </article>
    
  </section>
</template>

<style lang="postcss" scoped>
.proyects {
  @apply py-32 h-full;
  background: linear-gradient(#1c7891, #68AFB8);
}
.proyects article{
  @apply  flex flex-col h-full; 
}
span{
  @apply text-sm font-bold inline-block pt-2.5;
} 
.slider {
  border-color: #2c3e50;
  border-width: 6px;
  height: 38vh;
  @apply overflow-hidden rounded-xl relative ;
}
.slides {
  display: flex;
/*   transition: transform 1s ease-in-out; */
}

.slide {
  width: 100%;
  flex: 0 0 auto;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4));
  transition: opacity 0.5s ease; 
  pointer-events: none;
}
.slider:hover .slides {
  @apply opacity-100;
  animation: slideAnimation 6s  infinite;
}
.slider:hover .overlay {
  opacity: 0;
}
@keyframes slideAnimation {
  0%, 33% { transform: translateX(0); }
  33%, 66% { transform: translateX(-100%); }
  66%, 100% { transform: translateX(-200%); } 
}


</style>
