<script setup lang="ts">
const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('nuxt-color-mode', colorMode.value)
}
</script>

<template>
  <Button
    :icon="`pi ${$colorMode.value === 'light' ? 'pi-sun' : 'pi-moon'}`"
    rounded
    severity="secondary"
    @click="toggleColorMode"
  />
</template>
