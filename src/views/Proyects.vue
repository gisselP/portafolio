<template>
  <section class="proyects">
    <article>
      <p class="text-xl font-bold">Proyectos</p>
      <article class="grid grid-cols-1 grid-rows-3 gap-20 mt-6">
        <section class="grid items-center justify-between grid-cols-2 gap-9">
          <div class="mr-auto proyectos"><span>Nutricorp</span></div>
          <p class="text-base text-right">
            Es una e-commerce en el cual puedes logearte con google,
            seleccionar,filtar y buscar productos en el menu de compras. Así
            mismo puedes añadir los productos a un carrito de compras.
            <br />
            <span class="text-sm font-bold">Angular Firebase</span>
          </p>
        </section>
        <section class="grid items-center justify-between grid-cols-2 gap-9">
          <p class="text-base text-left">
            Es una interfaz para un restaurante en el cual se pueden tomar
            pedidos, enviarlos al carrito de compras y también cambiar sus
            estados consumiendo una API proporcionado por el cliente.
            <br />
            <span class="text-sm font-bold">Angular API Postman</span>
          </p>
          <div class="ml-auto proyectos"><span>Burger Queen</span></div>
        </section>
        <section class="grid items-center justify-between grid-cols-2 gap-9">
          <div class="mr-auto proyectos"><span>Only Cats</span></div>
          <p class="text-base text-right">
            Es una red social tematizada para personas amantes de los gatos que
            permite crear y compartir contenido. En él se implementó el sistema
            CRUD y la autenticación de usuarios con Firebase.
            <br />
            <span class="text-sm font-bold"
              >Javascript CSS HTML SPA Firebase</span
            >
          </p>
        </section>
      </article>
    </article>
  </section>
</template>

<script></script>

<style lang="postcss" scoped>
.proyects {
  @apply py-32;
  background: linear-gradient(359.92deg, #ffedd8 8.5%, #fee6f2 94.69%);
}
.proyects article{
  @apply relative z-20 flex flex-col items-center;
  margin: 0px auto;
  max-width: 1000px;
  height: 100vh;
}
.proyectos {
  border-color: #2c3e50;
  border-width: 6px;
  width: 26vw;
  height: 28vh;
  @apply flex items-center justify-center text-3xl rounded-xl font-bold;
}
</style>
