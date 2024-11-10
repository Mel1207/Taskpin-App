import { createStore } from "vuex"

export default createStore({
  state: {
    showModal: false,
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