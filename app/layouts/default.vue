<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <AppHeader />
    <div class="flex lg:justify-between gap-8 flex-col lg:flex-row">
      <main class="flex-1">
        <slot />
      </main>
      <aside class="lg:w-80 sticky top-0 h-full">
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
