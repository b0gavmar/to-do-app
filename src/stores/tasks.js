import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const task = ref(0)

  const tasks = ref([
      {
        id: 1,
        title: "feladat1",
        desc: "első feladat leírás",
        isFinished: true,
        deadline: "2025.01.20",
      },
      {
        id: 2,
        title: "feladat2",
        desc: "második feladat leírás",
        isFinished: false,
        deadline: "2025.02.10",
      }
  ]);

  return { tasks}
})
