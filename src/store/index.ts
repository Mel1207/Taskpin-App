import { createStore } from "vuex"
import Task from "../types/Task"

export default createStore({
  state: {
    tasks: <Task[]>[],

    showModal: false,
    newTask: {
      title: '',
      priorityLevel: 'low',
      status: 'todo'
    }
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