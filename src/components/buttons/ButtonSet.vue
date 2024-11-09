<template>
  <button :class="classList">
    <p>{{ btnTitle }}</p>
    <img v-if="hasIcon" src="../../assets/icon-add.svg" alt="icon add">
  </button>
</template>

<script setup lang="ts">

defineProps({
  btnTitle: {
    required: true,
    type: String
  },
  classList: {
    required: true,
    type: String
  },
  hasIcon: {
    required: false,
    type: Boolean
  }
})

</script>

<style scoped>

</style>