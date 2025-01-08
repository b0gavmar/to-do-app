<template>
  <div class="container">
    <div v-for="t in taskStore.tasks" :key="t.id" class="task">
      <h3>{{ t.title }}</h3>      
      <div>
        <p>{{ t.desc }}</p>
        <p v-if="t.isFinished">Státusz: Kész</p>
        <p v-else>Státusz: Nincs kész</p>
      </div>
      <div class="footer">
        <p>asd</p>
      </div>

    </div>
  </div>
</template>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    color: white;
  }
.task{
  background-color: rgb(49, 49, 49);
  border-radius: 14px;
  padding: 8px;
}
</style>

<script setup>
import {ref} from 'vue'
import { useTaskStore } from '@/stores/tasks';
import { useRoute, useRouter } from 'vue-router';

const taskStore = useTaskStore();

const route = useRoute();

</script>



