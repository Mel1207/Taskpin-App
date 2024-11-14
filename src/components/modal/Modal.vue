<template>
  <div class="fixed z-20 h-screen w-full bg-black bg-opacity-50 flex items-center justify-center px-5">
    <div class="bg-white w-[600px] rounded-[20px] p-5">
      <div class="flex items-start justify-between mb-[45px]">
        <p class="text-lg font-bold" v-if="$store.state.isEditing">Edit task</p>
        <p class="text-lg font-bold" v-else>New task</p>
        <img src="../../assets/icon-close.svg" alt="icon close" class="cursor-pointer" @click="handleCancel">
      </div>
      <div class="mb-[15px]">
        <span class="text-sm font-semibold block mb-2">Title</span>
        <input type="text" placeholder="enter title" class="h-[45px] w-full rounded-lg border px-[15px] placeholder:text-sm placeholder:font-light" v-model="$store.state.newTask.title" @keydown="$store.state.isTyping = false" required :class="store.state.isTyping ? 'border-cRed' : ''">
      </div>
      <div class="mb-[15px] relative">
        <label for="priorityLevel" class="text-sm font-semibold block mb-2">Priority level</label>
        <select id="priorityLevel" v-model="$store.state.newTask.priorityLevel" name="priority level" class="mt-2 h-[45px] block w-full rounded-lg bg-transparent border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 sm:text-sm sm:leading-6 relative">
          <option value="low">Low priority</option>
          <option value="medium">Medium priority</option>
          <option value="high">High priority</option>
        </select>
        <img src="../../assets/icon-chevron-down.svg" alt="chevron down" class="arrow-down">
      </div>
      <div class="mb-[15px] relative">
        <label for="status" class="text-sm font-semibold block mb-2">Status</label>
        <select id="status" v-model="$store.state.newTask.status" name="status" class="mt-2 h-[45px] block w-full rounded-lg bg-transparent border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 sm:text-sm sm:leading-6 relative">
          <option value="todo">Todo</option>
          <option value="ongoing">On-going</option>
          <option value="done">Done</option>
        </select>
        <img src="../../assets/icon-chevron-down.svg" alt="chevron down" class="arrow-down">
      </div>

      <div class="flex justify-between items-center pt-[45px]">
        <ButtonSet btn-title="Cancel" class-list="h-[40px] px-[15px] border rounded-lg text-sm" @click="handleCancel"/>
        <div>
          <ButtonSet btn-title="save" class-list="h-[40px] px-[15px] rounded-lg text-sm text-white bg-cGreen" @click="handleSave" v-if="$store.state.isEditing"/>
          <ButtonSet btn-title="Submit" class-list="h-[40px] px-[15px] rounded-lg bg-primary text-white hover:opacity-80 transition" @click="handleSubmit" v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EditData } from '../../controllers/EditData'
import { PostData } from '../../controllers/PostData'
import store from '../../store'
import ButtonSet from '../buttons/ButtonSet.vue'

const { postTask } = PostData()
const { editTask } = EditData()

const handleSubmit = () => {
  if(!store.state.newTask.title) {
    store.state.isTyping = true
    return
  }
  postTask(store.state.newTask)
  store.commit('closeModal')
  store.state.newTask.title = ''
  store.state.newTask.priorityLevel = 'low'
  store.state.newTask.status = 'todo'
}

const handleSave = () => {
  editTask(store.state.newTask)
  store.commit('closeModal')
  store.state.isEditing = false
  store.state.newTask.title = ''
  store.state.newTask.priorityLevel = 'low'
  store.state.newTask.status = 'todo'
}

const handleCancel = () => {
  store.commit('closeModal')
  store.state.isTyping = false
  store.state.isEditing = false
}

</script>