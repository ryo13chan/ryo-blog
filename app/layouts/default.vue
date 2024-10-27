<script setup lang="ts">

</script>

<template>
  <div class="flex lg:justify-between gap-8 flex-col lg:flex-row">
    <main class="flex-1">
      <slot />
    </main>
    <aside class="lg:w-80">
      <div class="text-xl mb-2 font-bold">
        Tag
      </div>
      <TagList />
    </aside>
  </div>
</template>
