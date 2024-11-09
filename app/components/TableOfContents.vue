<script setup lang="ts">
const path = defineModel<string>('/')
</script>

<template>
  <ContentDoc :path="path">
    <template #default="{ doc }">
      <div v-if="doc.body?.toc?.links?.length">
        <div class="text-xl mb-2 font-bold">
          Table of Contents
        </div>
        <!-- 見出し2 -->
        <div
          v-for="link in doc.body.toc.links"
          :key="link.id"
        >
          <div class="my-2">
            <NuxtLink :href="`#${link.id}`">
              {{ link.text }}
            </NuxtLink>
          </div>
          <!-- 見出し3 -->
          <div
            v-for="childLink in link.children"
            :key="childLink.id"
            class="pl-4 my-2"
          >
            <NuxtLink :href="`#${childLink.id}`">
              {{ childLink.text }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </template>
    <template #not-found />
  </ContentDoc>
</template>
