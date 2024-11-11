<template>
  <div class="rounded-lg bg-opacity-15 px-5 flex items-center justify-between h-[50px]" :class="themeClass">
    <p class="text-sm font-semibold">{{ taskHeaderName }}</p>
    <div class="h-[30px] w-[30px] bg-white bg-opacity-60 flex items-center justify-center text-[14px] font-semibold rounded-full">{{ taskCount }}</div>
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
