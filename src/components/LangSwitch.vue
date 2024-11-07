<script setup lang="ts"></script>

<template>
  <div class="lang-switch">
    <img src="/tongue.png" alt="switch" width="15" />
    <span class="ru-lang">RU</span>
    <span class="ua-lang">UA</span>
  </div>
</template>

<style lang="postcss" scoped>
.lang-switch {
  @apply h-[34px] w-[34px] lg:h-[38px] lg:w-[38px] border-stone-300 border rounded-full flex justify-center items-center relative;
}

.lang-switch img {
  @apply w-[14px] lg:w-[15px] mt-0.5;
}

.ru-lang,
.ua-lang {
  @apply absolute ml-1.5 text-xs lg:text-sm font-medium cursor-pointer;
}

.ru-lang {
  @apply left-10 opacity-0 transition-opacity duration-700;
}

.ua-lang {
  @apply left-20 opacity-0 transition-opacity duration-700 delay-700;
}

.lang-switch:hover span {
  @apply opacity-100;
}
</style>
