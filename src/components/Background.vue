<script setup>
import { ref } from "vue";

const props = defineProps({
  content: String,
});
</script>

<template>
  <article class="w-full h-full">
    <inline-svg
      :src="require(`@/assets/background/moon.svg`)"
      class="icon moon"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/shine.svg`)"
      class="icon one"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon two"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon three"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon four"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/shine.svg`)"
      class="icon five"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/galaxy.svg`)"
      class="icon six"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/planet1.svg`)"
      class="icon seven"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon eight"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon nine"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon ten"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/system.svg`)"
      class="icon eleven"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon twelve"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/shine.svg`)"
      class="icon thirteen"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon fourteen"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon fiveteen"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/star.svg`)"
      class="icon sixteen"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/galaxy.svg`)"
      class="icon seventeen"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/death-star.svg`)"
      class="icon eighteen"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/planet2.svg`)"
      class="icon nineteen"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/planet3.svg`)"
      class="icon twenty"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/planet4.svg`)"
      class="icon planet4"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/shine.svg`)"
      class="icon twenty-one"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon twenty-two"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon twenty-three"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon twenty-four"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/shine.svg`)"
      class="icon twenty-five"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/galaxy.svg`)"
      class="icon twenty-six"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon twenty-seven"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon twenty-eight"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon twenty-nine"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/system.svg`)"
      class="icon thirty"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon thirty-one"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/shine.svg`)"
      class="icon thirty-two"
    ></inline-svg>
    <inline-svg
      :src="require(`@/assets/background/circle.svg`)"
      class="icon thirty-tree"
    ></inline-svg>
  </article>
</template>
<style lang="postcss" scoped>
.icon {
  @apply absolute;
}
.moon {
  left: -35px;
  top: -30px;
}
.one {
  color: #f8f69a;
  left: 50%;
  top: 4%;
}
.two {
  @apply h-6;
  color: #68c4cb;
  left: 35%;
  top: 2%;
}
.three {
  @apply h-4;
  color: #c4a5ec;
  left: 40%;
  top: 18%;
}
.four {
  @apply h-3;
  color: #f98472;
  left: 10%;
  top: 8%;
}
.five {
  @apply h-3;
  color: #eec574;
  left: 15%;
  top: 2%;
}
.six {
  color: #b9bde8;
  right: 15%;
  top: 10%;
}
.seven {
  color: #b9bde8;
  right: 15%;
  top: 15%;
}
.eight {
  @apply h-3.5;
  color: #f9f6d8;
  right: 5%;
  top: 8%;
}
.nine {
  @apply h-2;
  color: #eae7cc;
  right: 18%;
  top: 3%;
}
.ten {
  @apply h-2;
  color: #eee682;
  right: 30%;
  top: 15%;
}
.eleven {
  @apply h-8;
  color: #e8e6a2;
  left: 15%;
  top: 20%;
}
.twelve {
  @apply h-2.5;
  color: #a282ee;
  right: 40%;
  top: 22%;
}
.thirteen {
  @apply h-5 rotate-45 transition-all;
  color: #ddcc4c;
  right: 10%;
  top: 30%;
}
.fourteen {
  @apply h-5;
  color: #c1609d;
  left: 28%;
  top: 38%;
}
.fiveteen {
  @apply h-7;
  color: #82bcee;
  right: 14%;
  top: 38%;
}
.sixteen {
  @apply h-5;
  color: rgb(255, 155, 88);
  right: 35%;
  top: 42%;
}
.seventeen {
  @apply h-4;
  color: #9aedbd;
  right: 44%;
  top: 30%;
}
.eighteen {
  @apply h-4;
  color: #5a4c7e;
  right: 4%;
  top: 22%;
}
.nineteen {
  @apply h-8;
  left: 6%;
  top: 32%;
}
.twenty {
  @apply hidden sm:inline-block h-80;
  left: 0%;
  top: 38%;
}

.planet4 {
  right: 5%;
  bottom: 42%;
}

@screen md{
  .twenty {
    @apply hidden sm:inline-block h-96;
    left: 5%;
    top: 35%;
  }
  .planet4 {
    right: 5%;
    bottom: 45%;
  }
}
.twenty-one {
  @apply h-3;
  right: 45%;
  bottom: 46%;
  color: #f4edda;
}
.twenty-two {
  @apply h-3;
  left: 10%;
  bottom: 50%;
  color: #5a4c7e;
}
.twenty-three {
  @apply h-2;
  left: 5%;
  bottom: 35%;
  color: #54df2a;
}
.twenty-four {
  @apply h-5;
  left: 20%;
  bottom: 42%;
  color: #6187f9;
}
.twenty-five {
  @apply h-4 transform rotate-45;
  right: 22%;
  bottom: 32%;
  color: #f5d398;
}
.twenty-six {
  @apply h-4 transform rotate-45;
  right: 10%;
  bottom: 38%;
  color: #0c7c8b;
}
.twenty-seven {
  @apply h-4 transform rotate-45;
  right: 4%;
  bottom: 30%;
  color: #efa0d2;
}
.twenty-eight {
  @apply h-4 transform rotate-45;
  right: 30%;
  bottom: 21%;
  color: #e4efa0;
}
.twenty-nine {
  @apply h-3 transform rotate-45;
  left: 30%;
  bottom: 18%;
  color: #e5ebbd;
}
.thirty {
  @apply h-5 transform rotate-45;
  left: 10%;
  bottom: 10%;
  color: #597c90;
}
.thirty-one {
  @apply h-5;
  left: 2%;
  bottom: 25%;
  color: #b6ecff;
}
.thirty-two {
  @apply h-5;
  right: 2%;
  bottom: 15%;
  color: #fae038;
}
.thirty-tree {
  @apply h-2;
  right: 10%;
  bottom: 8%;
  color: #f3d9eb;
}
</style>
