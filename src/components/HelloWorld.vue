<script setup lang="ts">
type ColorTest = 'green' | 'red' | undefined;
const props = defineProps<{
  msg: string;
  color: ColorTest;
}>();
</script>
  
<template>
  <div class="greetings">
    <h1 :class="[props.color]">{{  props.msg  }}</h1>
  </div>
</template>
  