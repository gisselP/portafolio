<script setup>
import { ref } from "vue";

const props = defineProps({
  content: String,
});
</script>

<template>
  <inline-svg :src="require(`@/assets/background/shine.svg`)" class="icon one"></inline-svg>
  <inline-svg :src="require(`@/assets/background/circle.svg`)" class="icon two"></inline-svg>
  <inline-svg :src="require(`@/assets/background/circle.svg`)" class="icon three"></inline-svg>
  <inline-svg :src="require(`@/assets/background/circle.svg`)" class="icon four"></inline-svg>
  <inline-svg :src="require(`@/assets/background/shine.svg`)" class="icon five"></inline-svg>
  <inline-svg :src="require(`@/assets/background/galaxy.svg`)" class="icon six"></inline-svg>
  <inline-svg :src="require(`@/assets/background/planet1.svg`)" class="icon seven"></inline-svg>
  <inline-svg :src="require(`@/assets/background/circle.svg`)" class="icon eight"></inline-svg>
  <inline-svg :src="require(`@/assets/background/circle.svg`)" class="icon nine"></inline-svg>
  <inline-svg :src="require(`@/assets/background/circle.svg`)" class="icon ten"></inline-svg>
  <inline-svg :src="require(`@/assets/background/system.svg`)" class="icon eleven"></inline-svg>
  <inline-svg :src="require(`@/assets/background/circle.svg`)" class="icon twelve"></inline-svg>
  <inline-svg :src="require(`@/assets/background/shine.svg`)" class="icon thirteen"></inline-svg>
  <inline-svg :src="require(`@/assets/background/circle.svg`)" class="icon fourteen"></inline-svg>
  <inline-svg :src="require(`@/assets/background/circle.svg`)" class="icon fiveteen"></inline-svg>
  <inline-svg :src="require(`@/assets/background/circle.svg`)" class="icon sixteen"></inline-svg>
  <inline-svg :src="require(`@/assets/background/galaxy.svg`)" class="icon seventeen"></inline-svg>
  <inline-svg :src="require(`@/assets/background/death-star.svg`)" class="icon eighteen"></inline-svg>
  <inline-svg :src="require(`@/assets/background/planet2.svg`)" class="icon nineteen"></inline-svg>
  <inline-svg :src="require(`@/assets/background/planet3.svg`)" class="icon twenty"></inline-svg>

</template>
<style lang="postcss" scoped>
.icon{
  @apply absolute;
}
.one{
  color: #f8f69a;
  left: 50%; 
  top: 4%;
}
.two{
  @apply h-6;
  color: #68C4CB;
  left: 35%; 
  top: 2%;
}
.three{
  @apply h-4;
  color: #c4a5ec;
  left: 40%; 
  top: 18%;
}
.four{
  @apply h-3;
  color: #f98472;
  left: 10%;
  top: 8%;
}
.five{
  @apply h-3;
  color: #eec574;
  left: 15%;
  top: 2%;
}
.six{ 
  color: #b9bde8;
  right: 15%;
  top: 10%;
}
.seven{ 
  color: #b9bde8;
  right: 15%;
  top: 15%;
}
.eight{ 
  @apply h-3.5;
  color: #f9f6d8;
  right: 5%;
  top: 8%;
}
.nine{
  @apply h-2;
  color: #eae7cc;
  right: 18%;
  top: 3%;
}
.ten{
  @apply h-2;
  color: #eee682;
  right: 30%;
  top: 15%;
}
.eleven{
  @apply h-8;
  color: #e8e6a2;
  left: 15%;
  top: 18%;
}
.twelve{
  @apply h-2.5;
  color: #a282ee;
  right: 40%;
  top: 22%;
}
.thirteen{
  @apply h-5 rotate-45 transition-all;
  color: #ddcc4c;
  right: 10%;
  top: 30%;
}
.fourteen{
  @apply h-5;
  color: #c1609d;
  left: 28%;
  top: 38%;
}
.fiveteen{
  @apply h-7;
  color: #82bcee;
  right: 14%;
  top: 38%;
}
.sixteen{
  @apply h-7;
  color:rgb(171, 145, 67);
  left: 18%;
  top: 24%;
}
.seventeen{
  @apply h-4;
  color: #9aedbd;
  right: 44%;
  top: 30%;
}
.eighteen{
  @apply h-4;
  right: 4%;
  top: 22%;
}
.nineteen{
  @apply h-8;
  left: 6%;
  top: 32%;
}
.twenty{
  @apply h-96;
  left: 5%;
  top: 35%;
}
</style>