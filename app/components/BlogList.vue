<script setup lang="ts">
import { format, diffDays } from '@formkit/tempo'
import type { QueryBuilderParams } from '@nuxt/content'

defineProps<{
  query?: QueryBuilderParams
}>()

const isNewArticle = (date: string) => {
  const now = new Date()
  const createdAt = new Date(date)
  return diffDays(now, createdAt) < 7
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <ContentList
      :query="query"
    >
      <template #default="{ list }">
        <div
          v-for="article in list"
          :key="article._path"
        >
          <Tag
            v-if="isNewArticle(article.createdAt)"
            value="New"
            severity="contrast"
            class="mr-2"
          />
          <span>{{ format(article.createdAt, 'YYYY-MM-DD') }}</span>
          <NuxtLink :to="article._path">
            <h2 class="m-0">
              {{ article.title }}
            </h2>
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
      </template>
      <template #not-found />
    </ContentList>
  </div>
</template>
