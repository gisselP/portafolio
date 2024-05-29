<script setup>
import { ref } from "vue";

const show = ref(false);
const inputCheckbox = ref(false);
</script>

<template>
  <aside
    class="fixed bottom-0 flex flex-col items-center h-full md:justify-end sm:w-28 lg:w-36 xl:w-44"
  >
    <section class="pt-6 md:pb-12">
      <section class="wrapper">
        <input v-model="inputCheckbox" type="checkbox" />
        <div class="fab">
          <svg
            width="30"
            height="30"
            viewBox="0 0 41 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.7423 11.4641C30.3452 11.8751 30.8857 11.8681 31.6124 11.8012C32.3391 11.7343 33.0198 11.4165 33.5376 10.9023C33.8283 10.613 34.0591 10.2691 34.2165 9.89038C34.374 9.51163 34.455 9.10549 34.455 8.69531C34.455 8.28513 34.374 7.879 34.2165 7.50024C34.0591 7.12149 33.8283 6.77758 33.5376 6.48828C32.9487 5.90283 32.152 5.57434 31.3216 5.57464C30.4912 5.57493 29.6948 5.90398 29.1063 6.48984C28.5908 7.00326 28.2717 7.68119 28.2044 8.40564C28.1372 9.13009 28.3261 9.85517 28.7383 10.4547L27.5204 11.4641C20.4258 4.51875 13.2383 0 9.59537 0C8.8985 0 8.33366 0.0867192 7.77819 0.6625C5.55319 2.96563 4.34069 5.96641 4.09772 9.27891C3.7985 13.3531 4.961 17.8836 7.46412 22.1133L8.186 23.0782C8.186 23.0782 6.35865 25.2508 5.81178 26.168L5.80553 26.1672C4.00006 29.2297 3.2846 35.8141 3.2846 35.8141C3.2846 32.7305 3.2846 37.5094 3.2846 35.8141C1.47288 36.0977 7.30753e-05 37.4164 7.30753e-05 39.3L6.10352e-05 41.0734L7.30753e-05 43.2297H18.9758V41.0734V39.3C18.9758 37.4164 17.6196 36.0961 15.8078 35.8141C15.8078 35.8141 15.7055 32.4617 16.5001 31.7297L17.8532 32.4617C22.0993 34.9531 26.6462 36.1242 30.7352 35.8141C34.3946 35.5367 37.336 34.4375 39.5243 31.9883C41.7399 29.5062 37.0422 21.1469 28.7383 12.7297L29.7423 11.4641ZM20.529 16.1383L18.3368 17.6305C12.0493 10.9086 8.76412 4.99844 8.76412 2.38281C8.76412 2.06094 8.82037 1.8125 8.91569 1.71641C9.01334 1.61953 9.26647 1.56172 9.59459 1.56172C12.4094 1.56172 18.6586 5.56484 26 12.7297L20.529 16.1383ZM38.4883 30.3367C38.4883 30.6594 38.4313 30.9078 38.336 31.0039C38.2383 31.1008 37.9852 31.1586 37.6571 31.1586C35.0297 31.1586 29.0969 27.8883 22.3524 21.6305L23.8493 19.4461L27.5 14.2297C34.6961 21.5422 38.4883 27.5344 38.4883 30.3367Z"
              :fill="inputCheckbox ? `white`:`#2c3e50`"
            />
          </svg>
        </div>
        <div class="fac">
          <a href="#"><img src="../assets/linkedin.svg" /></a>
          <a href="#"> <img src="../assets/git-hub.svg" /></a>
          <a href="#"
            ><img src="../assets/gmail.svg" class="svg-path"
          /></a>
        </div>
      </section>
    </section>
  </aside>
</template>

<style lang="postcss">
.icon {
  color: #2c3e50;
}
:root {
  --background: #4285f4;
  --icon-color: #344955;
  --width: 50px;
  --height: 50px;
  --border-radius: 100%;
}
.wrapper {
  position: relative;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper .fab {
  @apply ml-7 sm:ml-0 p-3 transition rounded-full ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110;
  position: relative;
  z-index: 3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper .fac {
  @apply flex flex-row md:flex-col justify-around items-center w-36 h-8 md:w-8 md:h-36;
  border-radius: 64px;
  position: absolute;
  z-index: 2;
  padding: 0.5rem 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  opacity: 0;
  top: -110px; 
  transition: opacity 0.2s ease-in, top 0.2s ease-in, width 0.1s ease-in;
}

.wrapper .fac a {
  color: var(--icon-color);
  opacity: 0.8;
}

.wrapper .fac a:hover {
  transition: 0.2s;
  opacity: 1;
  color: #30444f;
}

.wrapper input {
  height: 100%;
  width: 100%;
  border-radius: var(--border-radius);
  cursor: pointer;
  position: absolute;
  z-index: 5;
  opacity: 0;
}

.wrapper input:checked ~ .fab {
  background-color: #2c3e50;
}

.wrapper input:checked ~ .fab::before {
  @apply animate-ping absolute inline-flex h-full w-full rounded-full bg-inherit opacity-75;
 content: ''; 
}

.wrapper input:checked ~ .fac {
  @apply top-3.5 w-36 h-8 md:w-8 md:h-36 left-24 sm:left-20 md:left-3.5 md:-top-44; 
  animation: fac-animation 0.4s ease-out forwards 0.1s;
  opacity: 1;
}

@keyframes fab-animation {
  0% {
    transform: rotate(0) scale(1);
  }

  20% {
    transform: rotate(60deg) scale(0.93);
  }

  55% {
    transform: rotate(35deg) scale(0.97);
  }

  80% {
    transform: rotate(48deg) scale(0.94);
  }

  100% {
    transform: rotate(45deg) scale(0.95);
  }
}

@keyframes fab-animation-reverse {
  0% {
    transform: rotate(45deg) scale(0.95);
  }

  20% {
    transform: rotate(-15deg);
  }

  55% {
    transform: rotate(10deg);
  }

  80% {
    transform: rotate(-3deg);
  }

  100% {
    transform: rotate(0) scale(1);
  }
}

@keyframes fac-animation {
  0% {
    transform: scale(1, 1);
  }

  33% {
    transform: scale(0.95, 1.05);
  }

  66% {
    transform: scale(1.05, 0.95);
  }

  100% {
    transform: scale(1, 1);
  }
}

/* .container-list {
  @apply flex flex-col items-center justify-end absolute bottom-5 w-full;
  height: 90px; 
}

.list,
.buttton-list {
  @apply grid gap-8 justify-items-center; 
}

.container-list:hover {
  transition: height 0.7s;
  height: 190px;
}

.container-list:hover .buttton-list{
  @apply opacity-0;  
  transition: opacity 0.8s
}
.container-list:hover .list{
  opacity: 1;
  transition: opacity 0.5s
}
.list {
  opacity: 0;
  transition: opacity 0.5s
} */
</style>
