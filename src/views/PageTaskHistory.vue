<template>
  <div class="pl-[280px] pt-[70px]">
    <div class="container">
      <div class="flex justify-between items-center mt-[40px] mb-[30px]">
      <Greetings message="Good afternoon John ☀️" description="Here's your task history"/>
      </div>
      <TaskFilter />
      <div class="w-full rounded-[10px] border p-5 mt-5">
        <div class="bg-slate-50 rounded-[5px] w-full h-12 grid grid-cols-[200px,300px,1fr,1fr] gap-[10px] px-5 items-center text-[14px] font-medium">
          <p>Priority Level</p>
          <p>Title</p>
          <p>Status</p>
          <p class="text-end">Actions</p>
        </div>
        <div v-for="item in $store.state.tasks" :key="item.id" class="px-5 border-b grid grid-cols-[200px,300px,1fr,1fr] items-center h-12 w-full text-[14px] gap-[10px]">
          <span class="block text-xs py-[5px] px-2 rounded-full w-max" :class="item.priorityLevel">
            {{ item.priorityLevel }} priority
          </span>
          <p>{{ item.title }}</p>
          <p class="text-opacity-50 text-black">{{ item.status }}</p>
          <div class="flex justify-end">
            <ButtonSet btn-title="Delete" class-list="py-[5px] rounded-[5px] bg-cRed text-white text-[12px] px-[10px]"/>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script setup lang="ts">
import ButtonSet from '../components/buttons/ButtonSet.vue';
import Greetings from '../components/Greetings.vue'
import TaskFilter from '../components/TaskFilter.vue'


</script>