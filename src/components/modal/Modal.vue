<template>
  <div class="fixed z-10 h-screen w-full bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white w-[600px] rounded-[20px] p-5">
      <p>{{ $store.state.newTask.title }}</p>
      <p>{{ $store.state.newTask.priorityLevel }}</p>
      <p>{{ $store.state.newTask.status }}</p>
      <div class="flex items-start justify-between mb-[45px]">
        <p class="text-lg font-bold">New task</p>
        <img src="../../assets/icon-close.svg" alt="icon close" class="cursor-pointer" @click="$store.commit('closeModal')">
      </div>
      <div class="mb-[15px]">
        <span class="text-sm font-semibold block mb-2">Title</span>
        <input type="text" placeholder="enter title" class="h-[45px] w-full rounded-lg border px-[15px] placeholder:text-sm placeholder:font-light" v-model="$store.state.newTask.title">
      </div>
      <div class="mb-[15px]">
        <label for="priorityLevel" class="text-sm font-semibold block mb-2">Priority level</label>
        <select id="priorityLevel" v-model="$store.state.newTask.priorityLevel" name="priority level" class="mt-2 h-[45px] block w-full rounded-lg bg-transparent border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 sm:text-sm sm:leading-6">
          <option value="low">Low priority</option>
          <option value="medium">Medium priority</option>
          <option value="high">High priority</option>
        </select>
      </div>
      <div class="mb-[15px]">
        <label for="status" class="text-sm font-semibold block mb-2">Status</label>
        <select id="status" v-model="$store.state.newTask.status" name="status" class="mt-2 h-[45px] block w-full rounded-lg bg-transparent border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 sm:text-sm sm:leading-6">
          <option value="todo">Todo</option>
          <option value="ongoing">On-going</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div class="flex justify-between items-center pt-[45px]">
        <ButtonSet btn-title="Cancel" class-list="h-[40px] px-[15px] border rounded-lg text-sm"/>
        <div>
          <ButtonSet btn-title="save" class-list="h-[40px] px-[15px] border rounded-lg text-sm mr-5" @click="handleSave"/>
          <ButtonSet btn-title="Submit" class-list="h-[40px] px-[15px] rounded-lg bg-primary text-white hover:opacity-80 transition" @click="handleSubmit"/>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import store from '../../store'
import ButtonSet from '../buttons/ButtonSet.vue'

const editTask = async (task: {id: any; title: string, status: string, priorityLevel: string}) => {
  try {
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    if(!response.ok) {
      throw new Error('Failed to edit task')
    }
  } catch {
    console.log('error')
  }
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
  store.state.tasks.push(createdTask)
}

const handleSubmit = () => {
  postTask(store.state.newTask)
  store.commit('closeModal')
  store.state.newTask.title = ''
}

const handleSave = () => {
  editTask(store.state.newTask)
  store.commit('closeModal')
}

</script>