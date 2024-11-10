<template>
  <Modal v-if="$store.state.showModal"/>
  <!-- <ModalConfirm /> -->
  <div class="pl-[280px] pt-[70px]">
    <div class="container">
      <div class="flex justify-between items-center mt-[40px] mb-[30px]">
        <div>
          <h1 class="text-xl font-semibold mb-[3px]">Welcome back John 👋</h1>
          <p class="text-sm text-[#22222250]">Lets track your task today</p>
        </div>
        <!-- <ButtonSet btn-title="New task" has-icon class-list="h-[40px] px-[15px] bg-primary text-white flex gap-[10px] items-center rounded-lg hover:opacity-80 transition" @click="$store.commit('openModal')"/> -->
        <ButtonSet btn-title="New task" has-icon class-list="h-[40px] px-[15px] bg-primary text-white flex gap-[10px] items-center rounded-lg hover:opacity-80 transition" @click="handleAdd"/>
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
          <div v-for="item in todoTasks" :key="String(item.id)" class="border rounded-lg p-[15px] flex justify-between items-start" @click="deleteTask(item.id)">
            <div>
              <p class="text-sm font-semibold mb-[5px]">{{ item.title }}</p>
              <span class="block text-[#FF6581] text-xs py-[5px] px-2 rounded-full bg-[#FF658115] w-max">{{ item.priorityLevel }} priority</span>
            </div>
            <button>
              <img src="../assets/icon-delete.svg" alt="icon delete">
            </button>
          </div>
        </div>
        <div class="border rounded-[15px] p-3 flex flex-col gap-[10px]">
          <div v-for="item in onGoingTasks" :key="String(item.id)" class="border rounded-lg p-[15px] flex justify-between items-start" @click="deleteTask(item.id)">
            <div>
              <p class="text-sm font-semibold mb-[5px]">{{ item.title }}</p>
              <span class="block text-[#FF6581] text-xs py-[5px] px-2 rounded-full bg-[#FF658115] w-max">{{ item.priorityLevel }} priority</span>
            </div>
            <button>
              <img src="../assets/icon-delete.svg" alt="icon delete">
            </button>
          </div>
        </div>
        <div class="border rounded-[15px] p-3 flex flex-col gap-[10px]">
          <div v-for="item in doneTasks" :key="Number(item.id)" class="border rounded-lg p-[15px] flex justify-between items-start" @click="deleteTask(item.id)">
            <div>
              <p class="text-sm font-semibold mb-[5px]">{{ item.title }}</p>
              <span class="block text-[#FF6581] text-xs py-[5px] px-2 rounded-full bg-[#FF658115] w-max">{{ item.priorityLevel }} priority</span>
            </div>
            <button>
              <img src="../assets/icon-delete.svg" alt="icon delete">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonSet from '../components/buttons/ButtonSet.vue'
import Modal from '../components/modal/Modal.vue'
// import ModalConfirm from '../components/modal/ModalConfirm.vue'
import { computed, onMounted, ref } from 'vue'
import Task from '../types/Task'

const tasks = ref<Task[]>([])
const newTask = ref({
  title: 'submit test',
  status: 'ongoing',
  priorityLevel: 'low'
})

const getTasks = async () => {
  await fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(data => tasks.value = data)
}

const postTask = async (task: { title: string, status: string, priorityLevel: string}) => {
  const response = await fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const createdTask = await response.json()
  tasks.value.push(createdTask)
  // const createdTask = await
}

const todoTasks = computed(() => tasks.value.filter(item => item.status === 'todo'))

const onGoingTasks = computed(() => tasks.value.filter(item => item.status === 'ongoing'))

const doneTasks = computed(() => tasks.value.filter(item => item.status === 'done'))

const deleteTask = async (id: String) => {
  try {
    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error('Failed to delete task')
    }
    // Update the tasks array by removing the deleted task
    tasks.value = tasks.value.filter(task => task.id !== id)
  } catch (err) {
    console.error(err)
  }
}

const handleAdd = () => {
  postTask(newTask.value)
  console.log('test')
}

onMounted(() => {
  getTasks()
  console.log(onGoingTasks)
  // console.log('component is running')
})

</script>