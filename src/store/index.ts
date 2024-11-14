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
    isEditing: false,
    showModal: false,
    isTyping: false,
    selectedTab: 1,
    taskTab: 1,
    activeAccordion: 1,
    modalConfirm: false,
    selectedItem: ''
  },
  mutations: {
    openModal(state: { showModal: boolean }) {
      state.showModal = true
    },
    closeModal(state: { showModal: boolean }) {
      state.showModal = false
    },
    openConfirmModal(state: { modalConfirm: boolean }) {
      state.modalConfirm = true
    },
    closeConfirmModal(state: { modalConfirm: boolean }) {
      state.modalConfirm = false
    }
  },
  actions: {
    
  },
  modules: {

  }
})