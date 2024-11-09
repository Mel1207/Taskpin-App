<template>
  <!-- <Modal /> -->
  <ModalConfirm />
  <div class="pl-[280px] pt-[70px]">
    <div class="container">
      <div class="flex justify-between items-center mt-[40px] mb-[30px]">
        <div>
          <h1 class="text-xl font-semibold mb-[3px]">Welcome back John 👋</h1>
          <p class="text-sm text-[#22222250]">Lets track your task today</p>
        </div>
        <ButtonSet btn-title="New task" has-icon class-list="h-[40px] px-[15px] bg-primary text-white flex gap-[10px] items-center rounded-lg hover:opacity-80 transition"/>
      </div>
      <div class="grid grid-cols-3 gap-5 mb-5">
        <div class="rounded-lg bg-green-100 px-5 flex items-center h-[50px]">
          <p class="text-sm font-semibold">Todo</p>
        </div>
        <div class="rounded-lg bg-blue-100 px-5 flex items-center h-[50px]">
          <p class="text-sm font-semibold">On-going</p>
        </div>
        <div class="rounded-lg bg-gray-100 px-5 flex items-center h-[50px]">
          <p class="text-sm font-semibold">Done</p>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-5 content">
        <div class="border rounded-[15px] p-3 flex flex-col gap-[10px]">
          <div class="border rounded-lg p-[15px] flex justify-between items-start">
            <div>
              <p class="text-sm font-semibold mb-[5px]">Walking the dog</p>
              <span class="block text-[#FF6581] text-xs py-[5px] px-2 rounded-full bg-[#FF658115] w-max">High priority</span>
            </div>
            <button>
              <img src="../assets/icon-delete.svg" alt="icon delete">
            </button>
          </div>
        </div>
        <div class="border rounded-[15px] p-3">2</div>
        <div class="border rounded-[15px] p-3">3</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonSet from '../components/buttons/ButtonSet.vue'
import Modal from '../components/modal/Modal.vue';
import ModalConfirm from '../components/modal/ModalConfirm.vue';


</script>

<style scoped>

</style>