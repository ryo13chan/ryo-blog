<script setup lang="ts">
defineProps<{
  fileName: string
  circle?: boolean
}>()
</script>

<template>
  <img
    :src="`/images/${fileName}`"
    class="w-12 h-12"
    :class="{
      'rounded-full': circle,
    }"
  >
</template>
