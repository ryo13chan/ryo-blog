<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <AppHeader />
    <div class="flex lg:justify-between gap-8 flex-col lg:flex-row">
      <main class="flex-1 px-16 lg:px-32 py-4">
        <slot />
      </main>
      <aside class="lg:w-80 lg:sticky lg:top-0 lg:h-full lg:py-4 px-16 lg:px-0 py-4">
        <div class="flex flex-col gap-8">
          <TableOfContents
            v-if="route.name === 'slug'"
            :path="route.path"
          />
          <TagList />
        </div>
      </aside>
    </div>
  </div>
</template>
