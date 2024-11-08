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
</style>
