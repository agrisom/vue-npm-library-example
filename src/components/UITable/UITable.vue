<script setup lang="ts">
import type { AnyEntityWithId } from '../../shared/types/AnyEntityWithId';

const props = defineProps<{
  items: AnyEntityWithId<unknown>[],
}>();
</script>
  
<template>
  <ul v-for="item in props.items" :key="item.id">
    <li>{{item}}</li>
  </ul>
</template>
  