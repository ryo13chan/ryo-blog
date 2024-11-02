<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <AppHeader />
    <div class="flex lg:justify-between gap-8 flex-col lg:flex-row">
      <main class="flex-1 pl-4 lg:pl-8 py-4">
        <slot />
      </main>
      <aside class="lg:w-80 lg:sticky lg:top-0 lg:h-full lg:py-4 px-4 lg:px-0">
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
