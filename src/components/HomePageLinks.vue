<script setup lang="ts"></script>

<template>
  <div class="links">
    <router-link to="/" class="link-left">where?</router-link>
    <router-link to="/" class="link-bottom">who?</router-link>
    <router-link to="/" class="link-right">what?</router-link>
  </div>
</template>

<style lang="postcss" scoped>
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
</style>
