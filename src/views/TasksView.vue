<template>
  <div class="container">
    <div v-for="t in taskStore.tasks" :key="t.id" class="task">
      <h3>{{ t.title }}</h3>
      <div>
        <p>{{ t.desc }}</p>
        <p v-if="t.isFinished">Státusz: Kész</p>
        <p v-else>Státusz: Nincs kész</p>
      </div>
      <p> {{ t.deadline }} </p>
      <div class="footer">
        <button @click="editTask(t.id)" class="btn btn-secondary">Szerkesztés</button>
        <button @click="deleteTask(t.id)" class="btn btn-danger">Törlés</button>
      </div>

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
  width: 250px;
}

p, h3{
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px; 
}

.task:hover {
  box-shadow: 0 0 40px rgb(30, 163, 240);
  background-color: #3f7ff5;
}

button{
  margin-right: 5px;
}

</style>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/tasks';
import { useRouter } from 'vue-router';

const taskStore = useTaskStore();

const route = useRouter();

const editTask = (id) => {
  route.push(`./edittask/${id}`);
}

const deleteTask = (id) => {
  taskStore.deleteTask(id);
};


</script>
