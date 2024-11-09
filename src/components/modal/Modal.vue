<template>
  <div class="fixed h-screen w-full bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white w-[600px] rounded-[20px] p-5">
      <div class="flex items-start justify-between mb-[45px]">
        <p class="text-lg font-bold">New task</p>
        <img src="../../assets/icon-close.svg" alt="icon close">
      </div>
      <div class="mb-[15px]">
        <span class="text-sm font-semibold block mb-2">Title</span>
        <input type="text" placeholder="enter title" class="h-[45px] w-full rounded-lg border px-[15px] placeholder:text-sm placeholder:font-light">
      </div>
      <div class="mb-[15px]">
        <label for="priorityLevel" class="text-sm font-semibold block mb-2">Priority level</label>
        <select id="priorityLevel" name="location" class="mt-2 h-[45px] block w-full rounded-lg bg-transparent border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 sm:text-sm sm:leading-6">
          <option>Low priority</option>
          <option>Medium priority</option>
          <option>High priority</option>
        </select>
      </div>
      <div class="mb-[15px]">
        <label for="status" class="text-sm font-semibold block mb-2">Status</label>
        <select id="status" name="location" class="mt-2 h-[45px] block w-full rounded-lg bg-transparent border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 sm:text-sm sm:leading-6">
          <option>Todo</option>
          <option>On-going</option>
          <option>Done</option>
        </select>
      </div>

      <div class="flex justify-between items-center pt-[45px]">
        <ButtonSet btn-title="Cancel" class-list="h-[40px] px-[15px] border rounded-lg text-sm"/>
        <ButtonSet btn-title="Submit" class-list="h-[40px] px-[15px] rounded-lg bg-primary text-white hover:opacity-80 transition"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonSet from '../buttons/ButtonSet.vue'


</script>