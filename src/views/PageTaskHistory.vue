<template>
  <div class="pl-0 md:pl-[280px] md:pt-[70px]">
    <div class="container">
      <div class="flex justify-between items-center mt-[25px] md:mt-[40px] mb-[30px]">
      <Greetings message="Good afternoon John ☀️" description="Here's your task history"/>
      </div>
      <TaskFilter />
      <div class="w-full rounded-[10px] border p-[10px] md:p-5 mt-5 overflow-y-scroll md:overflow-hidden">
        <div class="bg-slate-50 rounded-[5px] w-full h-12 grid grid-cols-[1fr,130px] md:grid-cols-[200px,300px,1fr,1fr] gap-[10px] px-[12px] md:px-5 items-center text-[14px] font-medium">
          <p class="md:hidden">Task</p>
          <p class="hidden md:block">Priority Level</p>
          <p class="hidden md:block">Title</p>
          <p class="hidden md:block">Status</p>
          <p class="text-end">Actions</p>
        </div>
        <TableItem v-if="$store.state.selectedTab === 1" v-for="item in $store.state.tasks" :key="item.id" :task-item="item"/>
        <TableItem v-if="$store.state.selectedTab === 2" v-for="item in lowTasks" :key="item.id" :task-item="item"/>
        <TableItem v-if="$store.state.selectedTab === 3" v-for="item in mediumTasks" :key="item.id" :task-item="item"/>
        <TableItem v-if="$store.state.selectedTab === 4" v-for="item in highTasks" :key="item.id" :task-item="item"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import store from '../store'
import { GetData } from '../controllers/GetData'
import Greetings from '../components/Greetings.vue'
import TaskFilter from '../components/TaskFilter.vue'
import TableItem from '../components/TableItem.vue'

const { getTasks } = GetData()

onMounted(() => {
  getTasks()
})

const lowTasks = computed(() => store.state.tasks.filter((item: { priorityLevel: string; }) => item.priorityLevel === 'low'))

const mediumTasks = computed(() => store.state.tasks.filter((item: { priorityLevel: string; }) => item.priorityLevel === 'medium'))

const highTasks = computed(() => store.state.tasks.filter((item: { priorityLevel: string; }) => item.priorityLevel === 'high'))

</script>