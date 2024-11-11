<template>
  <div class="rounded-lg bg-opacity-15 px-2 md:px-5 flex items-center justify-center md:justify-between h-[40px] md:h-[50px]" :class="themeClass">
    <p class="text-center text-xs md:text-sm font-semibold">{{ taskHeaderName }}</p>
    <div class="hidden md:flex h-[30px] w-[30px] bg-white bg-opacity-60 items-center justify-center text-sm font-semibold rounded-full">{{ taskCount }}</div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  taskHeaderName: {
    required: true,
    type: String
  },
  taskCount: {
    required: true,
    type: String
  },
  themeClass: {
    required: true,
    type: String
  }
})

</script>
