<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'

useHead(() => {
  return {
    title: '',
  }
})

const query: QueryBuilderParams = { path: '/', sort: [{ createdAt: -1 }] }
</script>

<template>
  <div>
    <h2 class="text-center mt-0">
      Home
    </h2>
    <BlogList :query="query" />
  </div>
</template>
