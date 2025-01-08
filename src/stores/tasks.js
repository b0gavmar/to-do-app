import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const task = ref(0)

  const tasks = ref([
      {
        title: "feladat1",
        desc: "első feladat leírás",
        isFinished: true,
        deadline: "2025.01.20",
      }
  ]);

  function addTask() {
    const tmp = madarak.value.find((x) => x.id==id);
    tmp.szavazat = tmp.szavazat+1 || 1;
    console.log(madar.value);
  }

  return { tasks }
})
