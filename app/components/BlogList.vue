<script setup lang="ts">
import { format } from '@formkit/tempo'
// import type { QueryBuilderParams } from '@nuxt/content'

// const path = defineModel<string>('/')

// const query: QueryBuilderParams = {
//   path: '/',
//   // where: [
//   //   { tags: { $contains: 'react' } },
//   // ],
// }
</script>

<template>
  <div class="flex flex-col gap-8">
    <ContentList
      v-slot="{ list }"
    >
      <div
        v-for="article in list"
        :key="article._path"
      >
        <span>{{ format(article.createdAt, 'YYYY-MM-DD') }}</span>
        <NuxtLink
          :to="article._path"
          class="font-bold text-lg hover:underline"
        >
          <h2>{{ article.title }}</h2>
        </NuxtLink>
        <div class="flex gap-2 mt-2">
          <template
            v-for="tag in article.tags"
            :key="tag"
          >
            <TagButton
              v-if="getTag(tag)"
              :tag="getTag(tag)!"
            />
          </template>
        </div>
      </div>
    </ContentList>
  </div>
</template>
