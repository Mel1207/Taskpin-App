import { createStore } from "vuex"
import Task from "../types/Task"

export default createStore({
  state: {
    tasks: <Task[]>[],
    newTask: {
      title: '',
      priorityLevel: 'low',
      status: 'todo'
    },
    showModal: false,
    isTyping: false,
    selectedTab: 1
  },
  mutations: {
    openModal(state: { showModal: boolean }) {
      state.showModal = true
    },
    closeModal(state: { showModal: boolean }) {
      state.showModal = false
    }
  },
  actions: {
    
  },
  modules: {

  }
})