<template>
  <div class="fixed h-screen w-full bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white w-[400px] rounded-[20px] p-5">
      <div class="flex items-start justify-end mb-[45px]">
        <img src="../../assets/icon-close.svg" alt="icon close">
      </div>
      <img src="../../assets/img-warning.png" alt="warning" class="h-[70px] w-[70px] mx-auto block mb-[10px] mt-[15px]">
      <p class="text-lg font-semibold text-center mb-[10px]">Are you sure?</p>
      <p class="text-center text-[#00000060] mb-[15px]">Deleting this task is permanent and cannot be undone. Proceed with caution.</p>

      <div class="flex justify-between pt-[30px]">
        <ButtonSet btnTitle="Cancel" class-list="h-[40px] px-[15px] border rounded-lg text-sm"/>
        <ButtonSet btnTitle="Delete" class-list="h-[40px] px-[15px] rounded-lg bg-[#FF4B61] text-white hover:opacity-80 transition"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonSet from '../buttons/ButtonSet.vue';


</script>

<style scoped>

</style>