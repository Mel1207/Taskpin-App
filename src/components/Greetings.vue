<template>
  <div>
    <h1 class="text-[14px] md:text-xl font-semibold mb-[3px]">{{ message }}</h1>
    <p class="text-xs md:text-sm text-[#22222250]">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">

defineProps({
  message: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  }
})

</script>