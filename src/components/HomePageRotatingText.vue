<script setup lang="ts">
type Props = {
  title: string
}

withDefaults(defineProps<Props>(), {
  title: ''
})

const { width, height } = useWindowSize()

const angle = ref(0) // angle between the bottom side of the viewport and the diagonal

watchEffect(() => {
  angle.value = Math.floor(
    (Math.atan(height.value / width.value) * 180) / Math.PI
  )
})
</script>

<template>
  <div
    class="rotating-text-container"
    :style="{ transform: `rotate(-${angle}deg)` }"
  >
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
</template>

<style lang="postcss" scoped>
.rotating-text-container {
  @apply absolute -z-10 h-0;
  white-space: nowrap;
  display: flex;
  align-items: center;
  left: 50%;
  top: 50%;
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
  animation: swap 30s linear infinite;
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
</style>
