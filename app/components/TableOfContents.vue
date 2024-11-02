<script setup lang="ts">
const path = defineModel<string>('/')
</script>

<template>
  <ContentDoc :path="path">
    <template #default="{ doc }">
      <div v-if="doc.body?.toc?.links?.length">
        <div class="text-xl mb-2 font-bold">
          目次
        </div>
        <!-- 見出し2 -->
        <div
          v-for="link in doc.body.toc.links"
          :key="link.id"
        >
          <NuxtLink :href="`#${link.id}`">
            {{ link.text }}
          </NuxtLink>
          <!-- 見出し3 -->
          <div
            v-for="childLink in link.children"
            :key="childLink.id"
            class="pl-4"
          >
            <NuxtLink :href="`#${childLink.id}`">
              {{ childLink.text }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </template>
  </ContentDoc>
</template>
