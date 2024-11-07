<script setup lang="ts"></script>

<template>
  <header class="header">
    <LangSwitch />

    <MainLogo class="w-11 xs:w-16 xl:w-20 mx-auto" />

    <MenuButton class="h-2.5 sm:hidden cursor-pointer" />
  </header>
</template>

<style lang="postcss" scoped>
.header {
  @apply flex items-center relative p-4 xl:p-6;
}
</style>
