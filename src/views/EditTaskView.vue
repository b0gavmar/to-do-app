<template>
  <div class="container">
    <p> {{ route.params.id }}</p>
    <p>{{ task.title }}</p>
  </div>
</template>

<style scoped>
.container{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    color: white;
    justify-content: center;
    margin-top: 20px;
  }
.task{
  background-color: rgb(49, 49, 49);
  border-radius: 14px;
  padding: 10px;
}
</style>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useTaskStore } from '@/stores/tasks';

  const route = useRoute();
  const tasksStore = useTaskStore();
  const task = ref();

  onMounted ( ()=>{
    task.value = tasksStore.value.find(t => t.id == route.params.id);
  });


</script>



