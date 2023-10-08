import { createRouter, createWebHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import Stat from '@/views/Stat.vue'
const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/stats',
    name: 'Stat',
    component: Stat
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
