<script setup lang="ts">
defineProps<{
  tag: Tag
}>()
</script>

<template>
  <Button
    :label="tag.label"
    :to="`/tag/${tag.key}`"
    as="router-link"
    severity="secondary"
    size="small"
    rounded
  />
</template>
