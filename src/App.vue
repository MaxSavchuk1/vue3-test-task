<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
</script>

<template>
  <app-layout>
    <router-view v-slot="{ Component, route }">
      <transition name="slide-in" mode="out-in">
        <div class="h-full" :key="route.name">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </app-layout>
</template>

<style lang="postcss">
.slide-in-enter-from {
  transform: translateX(100%);
}
.slide-in-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-in-leave-to {
  transform: translateX(-100%);
}
.slide-in-leave-active {
  transition: transform 0.3s ease-in;
}
</style>
