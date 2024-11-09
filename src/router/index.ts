import { createRouter, createWebHistory } from "vue-router"
import PageTaskBoard from "../views/PageTaskBoard.vue"
import PageTaskHistory from "../views/PageTaskHistory.vue"
import PageLanding from "../views/PageLanding.vue"


const routes = [
  {
    path: '/',
    component: PageTaskBoard
  },
  {
    path: '/task-history',
    component: PageTaskHistory
  },
  {
    path: '/landing-page',
    component: PageLanding
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router