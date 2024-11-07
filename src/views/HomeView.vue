<script setup lang="ts">
const title = ref('FULL-CYCLE EVENT AGENCY')
</script>

<template>
  <h1 class="title">{{ title }}</h1>

  <div class="links">
    <router-link to="/" class="link-left">where?</router-link>
    <router-link to="/" class="link-bottom">who?</router-link>
    <router-link to="/" class="link-right">what?</router-link>
  </div>

  <div class="rotating-text-container">
    <p class="rotating-text-reversed">
      <span class="rotating-text-ticker-reversed">
        {{ `${title} `.repeat(2) }}
      </span>
      <span>{{ `${title} `.repeat(2) }}</span>
    </p>

    <p class="rotating-text">
      <span class="rotating-text-ticker">{{ `${title} `.repeat(2) }}</span>
      <span>{{ `${title}`.repeat(2) }}</span>
    </p>
  </div>

  <div class="circle"></div>
</template>

<style lang="postcss" scoped>
.absolute-center {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
}

.circle {
  @apply absolute-center w-[294px] h-[294px] sm:w-[482px] sm:h-[482px] xl:h-[578px] xl:w-[578px] bg-yellow rounded-full blur-[38px];
}

.title {
  @apply absolute-center text-[34px] sm:text-[58px] xl:text-[82px] font-bold z-10 text-center w-full max-w-[90%] sm:max-w-[74%] xl:max-w-[1023px];
}

.links {
  @apply hidden sm:block;
}

.links a {
  @apply absolute text-sm xl:text-base;
}

.links a::after {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  display: block;
  width: 100%;
  height: 1px;
  background: white;
  width: 0;
  transition: 0.3s;
}

.links a:hover {
  @apply text-white;
}

.links a:hover:after {
  width: 100%;
}

.link-left {
  @apply -left-4 top-1/2 -translate-y-1/2 -rotate-90;
}

.link-bottom {
  @apply bottom-4 left-1/2 -translate-x-1/2 mb-2.5;
}

.link-right {
  @apply -right-4 top-1/2 -translate-y-1/2 rotate-90;
}

.rotating-text-container {
  @apply absolute -z-10 h-full overflow-hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
  /* width: 100%; */
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  /* transform-origin: bottom; */

  /* transform: rotate(-45deg) translate(50%, -50%); */
  transform: rotate(-45deg);
}

.rotating-text,
.rotating-text-reversed {
  @apply text-[28px] sm:text-[42px] xl:text-[52px] italic text-transparent absolute;
  -webkit-text-stroke: 1px rgb(var(--color-dark-gray));
  /* -webkit-text-stroke: 1px rgb(var(--color-gray)); */
  display: flex;
}

.rotating-text {
  @apply mt-10 sm:mt-16 xl:mt-20;
  animation: marquee 30s linear infinite;
}

.rotating-text-reversed {
  @apply mb-10 sm:mb-16 xl:mb-20 right-0;
  animation: marquee-reversed 30s linear infinite;
}

.rotating-text-ticker {
  position: relative;
  left: 0%;
  animation: swap 30s linear infinite;
}

.rotating-text-ticker-reversed {
  position: relative;
  left: 0%;
  animation: swap-reversed 30s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee-reversed {
  0% {
    transform: translateX(00%) rotate(180deg);
  }
  100% {
    transform: translateX(100%) rotate(180deg);
  }
}

@keyframes swap {
  0%,
  50% {
    left: 0%;
  }
  50.01%,
  100% {
    left: 100%;
  }
}

@keyframes swap-reversed {
  0%,
  50% {
    left: 0%;
  }
  50.01%,
  100% {
    left: 100%;
  }
}
</style>
