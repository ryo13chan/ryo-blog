<script setup lang="ts">
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <TagButton
      v-for="tag in tags"
      :key="tag.key"
      :tag="tag"
    />
  </div>
</template>
