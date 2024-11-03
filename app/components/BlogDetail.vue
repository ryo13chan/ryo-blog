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
      <h2 class="text-4xl">
        {{ doc.title }}
      </h2>
      <div class="flex gap-2 my-2">
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
      <ContentRenderer :value="doc" />
    </template>
  </ContentDoc>
</template>
