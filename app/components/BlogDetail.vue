<script setup lang="ts">
import { format, diffDays } from '@formkit/tempo'

const path = defineModel<string>('/')

const isNewArticle = (date: string) => {
  const now = new Date()
  const createdAt = new Date(date)
  return diffDays(now, createdAt) < 7
}
</script>

<template>
  <ContentDoc :path="path">
    <template #default="{ doc }">
      <Tag
        v-if="isNewArticle(doc.createdAt)"
        value="New"
        severity="contrast"
        class="mr-2"
      />
      <span>{{ format(doc.createdAt, 'YYYY-MM-DD') }}</span>
      <h2 class="text-4xl mt-0 mb-4">
        {{ doc.title }}
      </h2>
      <div class="flex gap-2 mb-8">
        <template
          v-for="tag in doc.tags"
          :key="tag"
        >
          <TagButton
            v-if="getTag(tag)"
            :tag="getTag(tag)!"
          />
        </template>
      </div>
      <div
        class="prose dark:prose-invert"
      >
        <ContentRenderer :value="doc" />
      </div>
    </template>
    <template #not-found />
  </ContentDoc>
</template>

<style scoped lang="scss">
.prose {
  :deep(h2), :deep(h3), :deep(h4), :deep(h5), :deep(h6) {
    > a {
      text-decoration: none;
      font-weight: revert;
    }
  }
  :deep(li) {
    margin: 0.5rem 0;
  }
}
</style>
