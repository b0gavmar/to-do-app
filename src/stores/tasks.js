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
        deadline: "2025.1.20",
      },
      {
        id: 2,
        title: "feladat2",
        desc: "második feladat leírás",
        isFinished: false,
        deadline: "2025.2.10",
      },
      {
        id: 3,
        title: "feladat3",
        desc: "harmadik feladat leírás",
        isFinished: true,
        deadline: "2025.2.15"
      },
      {
        id: 4,
        title: "feladat4",
        desc: "negyedik feladat leírás",
        isFinished: false,
        deadline: "2025.3.1"
      },
      {
        id: 5,
        title: "feladat5",
        desc: "ötödik feladat leírás",
        isFinished: true,
        deadline: "2025.3.10"
      },
      {
        id: 6,
        title: "feladat6",
        desc: "hatodik feladat leírás",
        isFinished: false,
        deadline: "2025.4.5"
      },
      {
        id: 7,
        title: "feladat7",
        desc: "hetedik feladat leírás",
        isFinished: true,
        deadline: "2025.4.15"
      },
      {
        id: 8,
        title: "feladat8",
        desc: "nyolcadik feladat leírás",
        isFinished: false,
        deadline: "2025.5.1"
      },
      {
        id: 9,
        title: "feladat9",
        desc: "kilencedik feladat leírás",
        isFinished: true,
        deadline: "2025.5.10"
      },
      {
        id: 10,
        title: "feladat10",
        desc: "tizedik feladat leírás",
        isFinished: false,
        deadline: "2025.6.1"
      },
      {
        id: 11,
        title: "feladat11",
        desc: "tizenegyedik feladat leírás",
        isFinished: true,
        deadline: "2025.6.10"
      },
      {
        id: 12,
        title: "feladat12",
        desc: "tizenkettedik feladat leírás",
        isFinished: false,
        deadline: "2025.7.1"
      },
  ]);

  const deleteTask = (id) => {
    tasks.value = tasks.value.filter(task => task.id !== id);
  };

  return { tasks, deleteTask };
})
