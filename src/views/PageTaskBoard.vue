<template>
  <!-- <ModalConfirm /> -->
  <div class="pl-0 md:pl-[280px] md:pt-[70px]">
    <div class="container">
      <div class="flex justify-between items-center mt-[25px] md:mt-[40px] mb-[30px]">
        <Greetings message="Welcome back John 👋" description="Lets track your task today"/>
        <MobileButtonSet has-icon class-list="h-[40px] md:hidden px-[15px] bg-primary text-white flex gap-[10px] items-center rounded-lg hover:opacity-80 transition" @click="handleAddTask"/>
        <ButtonSet btn-title="New task" has-icon class-list="hidden md:flex h-[40px] px-[15px] bg-primary text-white gap-[10px] items-center rounded-lg hover:opacity-80 transition" @click="handleAddTask"/>
      </div>
      <!-- MOBILE TASK TAB WORKING WITH CLICK -->
      <div class="grid md:hidden grid-cols-3 gap-5 mb-5">
        <TaskHeader task-header-name="Todo" :task-count="String(todoTasks.length)" theme-class="bg-cGreen" @click="$store.state.taskTab = 1"/>
        <TaskHeader task-header-name="On-going" :task-count="String(onGoingTasks.length)" theme-class="bg-cBlue" @click="$store.state.taskTab = 2"/>
        <TaskHeader task-header-name="Done" :task-count="String(doneTasks.length)" theme-class="bg-cBlack bg-opacity-5" @click="$store.state.taskTab = 3"/>
      </div>
      <!-- TASK TAB NO WORKING CLICK -->
      <div class="hidden md:grid grid-cols-3 gap-5 mb-5">
        <TaskHeader task-header-name="Todo" :task-count="String(todoTasks.length)" theme-class="bg-cGreen"/>
        <TaskHeader task-header-name="On-going" :task-count="String(onGoingTasks.length)" theme-class="bg-cBlue"/>
        <TaskHeader task-header-name="Done" :task-count="String(doneTasks.length)" theme-class="bg-cBlack bg-opacity-5"/>
      </div>
      <div class="md:hidden">
        <div v-if="$store.state.taskTab === 1" class="border rounded-[15px] p-3 flex flex-col gap-[10px]">
          <div v-for="item in todoTasks" :key="String(item.id)" class="border rounded-lg p-[15px] grid grid-cols-[1fr,22px] gap-[10px] items-start" @click.exact="handleEditTask(item)">
            <div>
              <p class="text-sm font-semibold mb-[10px]">{{ item.title }}</p>
              <span class="block text-xs py-[5px] px-2 rounded-full w-max" :class="item.priorityLevel">{{ item.priorityLevel }} priority</span>
            </div>
            <button @click.stop="deleteTask(item.id)">
              <img src="../assets/icon-delete.svg" alt="icon delete">
            </button>
          </div>
        </div>
        <div v-if="$store.state.taskTab === 2" class="border rounded-[15px] p-3 flex flex-col gap-[10px]">
          <div v-for="item in onGoingTasks" :key="String(item.id)" class="border rounded-lg p-[15px] grid grid-cols-[1fr,22px] gap-[10px] items-start" @click.exact="handleEditTask(item)">
            <div>
              <p class="text-sm font-semibold mb-[10px]">{{ item.title }}</p>
              <span class="block text-xs py-[5px] px-2 rounded-full w-max" :class="item.priorityLevel">
                {{ item.priorityLevel }} priority
              </span>
            </div>
            <button @click.stop="deleteTask(item.id)">
              <img src="../assets/icon-delete.svg" alt="icon delete">
            </button>
          </div>
        </div>
        <div v-if="$store.state.taskTab === 3" class="border rounded-[15px] p-3 flex flex-col gap-[10px]">
          <div v-for="item in doneTasks" :key="String(item.id)" class="border rounded-lg p-[15px] grid grid-cols-[1fr,22px] gap-[10px] items-start" @click.exact="handleEditTask(item)">
            <div>
              <p class="text-sm font-semibold mb-[10px]">{{ item.title }}</p>
              <span class="block text-xs py-[5px] px-2 rounded-full w-max" :class="item.priorityLevel" >
                {{ item.priorityLevel }} priority
              </span>
            </div>
            <button @click.stop="deleteTask(item.id)">
              <img src="../assets/icon-delete.svg" alt="icon delete">
            </button>
          </div>
        </div>
      </div>
      <div class="hidden md:grid grid-cols-3 gap-5 content">
        <div class="border rounded-[15px] p-3 flex flex-col gap-[10px]">
          <div v-for="item in todoTasks" :key="String(item.id)" class="border rounded-lg p-[15px] grid grid-cols-[1fr,22px] gap-[10px] items-start" @click.exact="handleEditTask(item)">
            <div>
              <p class="text-sm font-semibold mb-[10px]">{{ item.title }}</p>
              <span class="block text-xs py-[5px] px-2 rounded-full w-max" :class="item.priorityLevel">{{ item.priorityLevel }} priority</span>
            </div>
            <button @click.stop="deleteTask(item.id)">
              <img src="../assets/icon-delete.svg" alt="icon delete">
            </button>
          </div>
        </div>
        <div class="border rounded-[15px] p-3 flex flex-col gap-[10px]">
          <div v-for="item in onGoingTasks" :key="String(item.id)" class="border rounded-lg p-[15px] grid grid-cols-[1fr,22px] gap-[10px] items-start" @click.exact="handleEditTask(item)">
            <div>
              <p class="text-sm font-semibold mb-[10px]">{{ item.title }}</p>
              <span class="block text-xs py-[5px] px-2 rounded-full w-max" :class="item.priorityLevel">
                {{ item.priorityLevel }} priority
              </span>
            </div>
            <button @click.stop="deleteTask(item.id)">
              <img src="../assets/icon-delete.svg" alt="icon delete">
            </button>
          </div>
        </div>
        <div class="border rounded-[15px] p-3 flex flex-col gap-[10px]">
          <div v-for="item in doneTasks" :key="String(item.id)" class="border rounded-lg p-[15px] grid grid-cols-[1fr,22px] gap-[10px] items-start" @click.exact="handleEditTask(item)">
            <div>
              <p class="text-sm font-semibold mb-[10px]">{{ item.title }}</p>
              <span class="block text-xs py-[5px] px-2 rounded-full w-max" :class="item.priorityLevel" >
                {{ item.priorityLevel }} priority
              </span>
            </div>
            <button @click.stop="deleteTask(item.id)">
              <img src="../assets/icon-delete.svg" alt="icon delete">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import store from '../store'
import { GetData } from '../controllers/GetData'
import { DeleteData } from '../controllers/DeleteData'
// import ModalConfirm from '../components/modal/ModalConfirm.vue'
import ButtonSet from '../components/buttons/ButtonSet.vue'
import TaskHeader from '../components/TaskHeader.vue'
import Greetings from '../components/Greetings.vue'
import MobileButtonSet from '../components/buttons/MobileButtonSet.vue'

const { getTasks } = GetData()
const { deleteTask } = DeleteData()

const todoTasks = computed(() => store.state.tasks.filter((item: { status: string; }) => item.status === 'todo'))

const onGoingTasks = computed(() => store.state.tasks.filter((item: { status: string; }) => item.status === 'ongoing'))

const doneTasks = computed(() => store.state.tasks.filter((item: { status: string; }) => item.status === 'done'))

const handleAddTask = () => {
  store.state.newTask.title = ''
  store.commit('openModal')
}

const handleEditTask = (task: object) => {
  console.log(todoTasks.value.length)
  store.commit('openModal')
  store.state.newTask = task
}

onMounted(() => {
  getTasks()
})

</script>