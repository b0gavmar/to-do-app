import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TasksView from '../views/TasksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TasksView,
    },
    {
      path: '/newtask',
      name: 'new task',
      component: () => import('../views/NewTaskView.vue'),
    },
    {
      path: `/edittask/:id`,
      name: 'edit task',
      component: () => import('../views/EditTaskView.vue'),
    },
  ],
})

export default router
