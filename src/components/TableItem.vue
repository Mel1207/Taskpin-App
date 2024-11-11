<template>
  <div>
    <div class="px-5 border-b grid grid-cols-[200px,300px,1fr,1fr] items-center h-12 w-full text-[14px] gap-[10px]">
      <span class="block text-xs py-[5px] px-2 rounded-full w-max" :class="taskItem.priorityLevel">
        {{ taskItem.priorityLevel }} priority
      </span>
      <p>{{ taskItem.title }}</p>
      <p class="text-opacity-50 text-black">{{ taskItem.status }}</p>
      <div class="flex gap-[10px] justify-end">
        <ButtonSet btn-title="Edit" disabled class-list="py-[5px] border border-cGreen rounded-[5px] text-cGreen text-[12px] w-[58px] px-[10px]"/>
        <ButtonSet btn-title="Delete" disabled class-list="py-[5px] border border-cRed rounded-[5px] text-cRed text-[12px] px-[10px]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonSet from './buttons/ButtonSet.vue'

defineProps({
  taskItem: {
    required: true,
    type: Object
  }
})

</script>