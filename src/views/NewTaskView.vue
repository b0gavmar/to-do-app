<template>
  <div class="container">
    <div>a</div>
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
import {ref} from 'vue'
import { useTaskStore } from '@/stores/tasks';
import { useRoute, useRouter } from 'vue-router';

const taskStore = useTaskStore();

const route = useRoute();

const editTask = (id) =>{
  route.push(`.edittask/${id}`);
}

</script>



