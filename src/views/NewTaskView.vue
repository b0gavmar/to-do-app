<template>
  <div class="container">
    <div class="task">
      <h2>Új feladat</h2>
      <div>
        <div>
          <label >Feladat címe:</label>
          <br>
          <input type="text" v-model="newTask.title" placeholder="Cím" required/><br>
        </div>
        <div>
          <label >Feladat leírása:</label>
          <br>
          <input v-model="newTask.desc" placeholder="Leírás" required/>
        </div>
        <div>
          <label >Állapota: </label>
          <br>
          <input type="radio" id="kesz" :value="true" name="status" v-model="newTask.isFinished"/>
          <label for="kesz">Kész</label>
          <br>
          <input type="radio" id="nincs" :value="false" name="status"  v-model="newTask.isFinished"/>
          <label for="nincs">Nincs Kész</label>
        </div>
        <div>
          <label >Határidő:</label>
          <br>
          <input type="date" v-model="deadlineString">
        </div>
        <br>
        <div>
          <button @click="addNewTask" class="btn btn-primary">Feladat hozzáadása</button>
        </div>
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
    justify-content: center;
    margin-top: 20px;
  }
.task{
  background-color: rgb(49, 49, 49);
  border-radius: 14px;
  padding: 20px;
  gap: 10px;

}


</style>

<script setup>
import {ref} from 'vue'
import { useTaskStore } from '@/stores/tasks';
import { useRoute, useRouter } from 'vue-router';

const taskStore = useTaskStore();

const router = useRouter();

const deadlineString = ref('');

//console.log(taskStore.tasks.value[taskStore.tasks.length - 1].id)

const newTask = {
  id: taskStore.tasks.length+1,
  title: useTaskStore().title,
  desc: useTaskStore().desc,NaN,
  isFinished: false,
  deadline: NaN,
};

const addNewTask = () =>{
  if("NaN.NaN.NaN" != new Date(deadlineString.value).getFullYear()+"."+new Date(deadlineString.value).getMonth()+"."+new Date(deadlineString.value).getDate()){
    newTask.deadline = new Date(deadlineString.value).getFullYear()+"."+new Date(deadlineString.value).getMonth()+1+"."+new Date(deadlineString.value).getDate();
  }
  if(newTask.id != undefined && newTask.title != undefined && newTask.desc != undefined && newTask.deadline != NaN){
    taskStore.tasks.push(newTask)
    console.log(newTask);
    router.push(`/`);
  }
  else{
    console.log(newTask);
    alert("Minden mezőt töltsön ki!")
  }
}

</script>



