<template>
  <div :class="classList">
    <img v-if="hasIcon" src="../../assets/icon-add.svg" alt="icon add">
  </div>
</template>

<script setup lang="ts">

defineProps({
  classList: {
    required: true,
    type: String
  },
  hasIcon: {
    required: true,
    type: Boolean
  }
})

</script>