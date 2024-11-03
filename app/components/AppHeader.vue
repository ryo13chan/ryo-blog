<template>
  <header
    class="w-full px-4 lg:px-8 py-4 border-b border-surface flex justify-between items-center"
  >
    <NuxtLink to="/">
      <h1 class="m-0 text-2xl">
        <div class="flex gap-4 items-center">
          <AppAvatar
            file-name="icon.jpg"
            circle
          />
          <span>Ryo Blog</span>
        </div></h1>
    </NuxtLink>
    <ColorButton />
  </header>
</template>
