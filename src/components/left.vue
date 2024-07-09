<script setup>
import { ref } from "vue";

const show = ref(false);
const inputCheckbox = ref(false);
</script>

<template>
  <aside class="space-icon">
    <section class="pt-6 md:pb-12">
      <section class="wrapper">
        <input v-model="inputCheckbox" type="checkbox" />
        <div class="fab">
          <inline-svg
            :src="require(`@/assets/satelite.svg`)"
            class="w-16 h-16 p-3"
          ></inline-svg>
        </div>
        <div class="fac">
          <a href="#">
            <inline-svg :src="require(`@/assets/linkedin.svg`)" />
          </a>
          <a href="#">
            <inline-svg :src="require(`@/assets/git-hub.svg`)" />
          </a>
          <a href="#">
            <inline-svg :src="require(`@/assets/gmail.svg`)" class="svg-path"
          /></a>
        </div>
      </section>
    </section>
  </aside>
</template>

<style lang="postcss">
.wrapper {
  @apply relative flex justify-center items-center;
  color: #1d5e75;
} 

.wrapper:hover{
  color: #fdefc1;
}

.wrapper .fac {
  @apply absolute  invisible  flex flex-row md:flex-col justify-between sm:justify-around items-center w-36 h-8 md:w-8 md:h-36;
  transition: opacity 0.2s ease-in, top 0.2s ease-in, width 0.1s ease-in;
}
.wrapper .fac a {
  color: #95edea9a;
  @apply hover:scale-110;
}

.wrapper .fac a:hover {
  color: #95edea;
}

.wrapper input {
  @apply cursor-pointer;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 5;
  opacity: 0;
}

.wrapper input:checked ~ .fab {
  color: #fdefc1;
}

.wrapper input:checked ~ .fab::before {
  @apply animate-ping absolute inline-flex h-full w-full rounded-full bg-inherit opacity-75;
  content: "";
  background-color: #95edea55;
}

.wrapper input:checked ~ .fac {
  @apply top-3.5 w-36 visible h-8 md:w-8 md:h-36 left-24 sm:left-20 md:left-3.5 md:-top-44;
  animation: fac-animation 0.4s ease-out forwards 0.1s;
}

.space-icon {
  @apply z-50 fixed bottom-0 flex flex-col items-center h-full md:justify-end w-28 lg:w-36 xl:w-44;
}

@media (min-width: 1024px) and (max-width: 1080px) {
  .space-icon {
    @apply w-20;
  }
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
</style>
