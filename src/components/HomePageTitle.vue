<script setup lang="ts">
type Props = {
  title: string
}

withDefaults(defineProps<Props>(), {
  title: ''
})

const titleRef = ref<HTMLElement | null>(null)

const { x, y } = useMouse({ touch: false })
const { width, height } = useWindowSize()

watch([x, y], () => {
  titleRef.value!.style.left = width.value / 2 + x.value / 50 + 'px'
  titleRef.value!.style.top = height.value / 2 + y.value / 50 + 'px'
})
watch([width, height], () => {
  titleRef.value!.style.left = width.value / 2 + 'px'
  titleRef.value!.style.top = height.value / 2 + 'px'
})
</script>

<template>
  <h1 ref="titleRef" class="title">{{ title }}</h1>

  <div class="absolute-center">
    <ShowReel class="showreel" />
    <div class="circle"></div>
  </div>
</template>

<style lang="postcss" scoped>
.absolute-center {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
}

.circle {
  @apply w-[294px] h-[294px] sm:w-[482px] sm:h-[482px] xl:h-[578px] xl:w-[578px] bg-yellow rounded-full blur-[38px];
}

.title {
  @apply absolute-center text-[34px] sm:text-[58px] xl:text-[82px] font-bold z-10 text-center w-full max-w-[90%] sm:max-w-[74%] xl:max-w-[1023px];
}

.showreel {
  @apply w-[90px] sm:w-28 xl:w-[118px] absolute -bottom-12 right-6 sm:bottom-0 sm:right-0 lg:bottom-4 lg:right-4 z-10;
}

.showreel:hover {
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>
