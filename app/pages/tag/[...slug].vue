<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'

const route = useRoute()
const tag = computed(() => {
  const slug = route.params.slug
  if (!slug || !slug[0]) return null
  return getTag(slug[0])
})

const query: QueryBuilderParams = computed(() => {
  return {
    where: [
      tag.value ? { tags: { $contains: tag.value.key } } : {},
    ],
    sort: [{ createdAt: -1 }],
  }
})

useHead(() => {
  return {
    title: tag.value ? tag.value.label : '',
  }
})
</script>

<template>
  <div v-if="tag">
    <h2 class="text-center mt-0">
      {{ tagLabel(tag) }}
    </h2>
    <BlogList :query="query" />
  </div>
</template>
