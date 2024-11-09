<template>
  <div class="p-[7px] rounded-lg cursor-pointer hover:bg-slate-100 transition-all">
    <img :src="iconSrc" :alt="iconName">
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';


defineProps({
  iconSrc: {
    required: true,
    type: String as PropType<string>
  },
  iconName: {
    required: true,
    type: String
  }
})

</script>