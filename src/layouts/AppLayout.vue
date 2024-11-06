<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <component :is="route.meta.layoutComponent">
    <slot />
  </component>
</template>
