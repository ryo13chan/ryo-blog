<script setup lang="ts">
</script>

<template>
  <div>
    <div class="text-xl mb-2 font-bold">
      Tag
    </div>
    <div class="flex flex-wrap gap-2">
      <TagButton
        v-for="tag in tags"
        :key="tag.key"
        :tag="tag"
      />
    </div>
  </div>
</template>
