<template>
  <div class="container">
    <div class="task">
      <h2> {{ task.title }} </h2>
      <p>Leírás {{ task.desc }} </p>
      <p> {{ task.isFinished }} </p>
      <p> {{ task.deadline }} </p>
      <button> save </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  color: white;
  justify-content: center;
  margin-top: 20px;
}



.task {
  background-color: rgb(49, 49, 49);
  border-radius: 14px;
  padding: 10px;
  width: 80%;
  max-width: 1000px;
}
</style>

<script setup>
  import { ref} from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useTaskStore } from '@/stores/tasks';

  const route = useRoute();
  const router = useRouter();
  const tasksStore = useTaskStore();
  const task = ref(tasksStore.tasks.find(t => t.id == route.params.id));

  console.log(task)


</script>



