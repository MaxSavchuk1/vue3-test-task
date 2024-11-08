<script setup lang="ts"></script>

<template>
  <div class="header">
    <LangSwitch />

    <div class="mx-auto relative w-12 xs:w-16 xl:w-20 h-full">
      <MainLogo class="header-logo" />
      <MainLogoFilled class="header-logo-filled" />
    </div>

    <MenuButton class="h-2.5 sm:hidden cursor-pointer" />
  </div>
</template>

<style lang="postcss" scoped>
.header {
  @apply flex items-center relative p-4 xl:p-6;
}

.header-logo,
.header-logo-filled {
  @apply absolute top-0 mt-2 xs:mt-0;
}

.header-logo {
  animation: hide 3s linear forwards;
}

.header-logo-filled {
  animation: show 3s linear reverse;
}

@keyframes hide {
  0% {
    clip-path: inset(0 0 0 0);
  }
  100% {
    clip-path: inset(0 0 100% 0);
  }
}

@keyframes show {
  0% {
    clip-path: inset(0 0 0 0);
  }
  100% {
    clip-path: inset(100% 0 0 0);
  }
}
</style>
