import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/TasksView.vue'),
    },
    {
      path: '/newtask',
      name: 'new task',
      //component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/edittask',
      name: 'edit task',
      //component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
