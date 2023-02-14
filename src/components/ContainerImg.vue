<template>
  <button >{{ props.content }}</button>
  
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  content: String,
});
</script>

<style lang="postcss" scoped>
button {
  border-color: #2c3e50;
  border-width: 3px;
  @apply px-5 py-3 mt-4 text-xl rounded-md font-bold;
}
button:hover {
  color: white;
  background-color: #2c3e50;
  border-width: 3px;
  @apply px-5 py-3 mt-4 text-xl rounded-md font-bold;
}
</style>