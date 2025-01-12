<template>
  <div class="container">
    <div class="task">
      <div class="center">
          <label >Feladat címe:</label>
          <br>
          <input type="text" v-model="currentTask.title" placeholder="Cím" required/><br>
        </div>
        <div class="center">
          <label >Feladat leírása:</label>
          <br>
          <textarea  type="text" v-model="currentTask.desc" placeholder="Leírás" required/>
        </div>
        <div class="center">
          <label >Állapota: </label>
          <br>
          <input type="radio" id="kesz" :value="true" name="status" v-model="currentTask.isFinished"/>
          <label for="kesz">Kész</label>
          <br>
          <input type="radio" id="nincs" :value="false" name="status"  v-model="currentTask.isFinished"/>
          <label for="nincs">Nincs Kész</label>
        </div>
        <div class="center">
          <label >Határidő:</label>
          <br>
          <input type="date" v-model="deadlineString">
        </div>
        <br>
        <div>
          <button @click="editTaskInfo" class="btn btn-primary">Feladat mentése</button>
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

.center{
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

label{
  font-size: larger;
}

.task {
  background-color: rgb(49, 49, 49);
  border-radius: 14px;
  padding: 20px;
  width: 80%;
  max-width: 400px;

}

button{
  margin-right: 5px;
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

  const deadlineString = ref(new Date(task.value.deadline)); 

  const currentTask = {
  id: task.value.id,
  title: task.value.title,
  desc: task.value.desc,
  isFinished: task.value.isFinished,
  deadline: task.value.deadline,
  };

const editTaskInfo = () =>{
  const month = Number(new Date(deadlineString.value).getMonth())+1;

  if("NaN.NaN.NaN" != new Date(deadlineString.value).getFullYear()+"."+new Date(deadlineString.value).getMonth()+"."+new Date(deadlineString.value).getDate()){
    currentTask.deadline = new Date(deadlineString.value).getFullYear()+"."+(Number(new Date(deadlineString.value).getMonth())+1)+"."+new Date(deadlineString.value).getDate();
  }
  if(currentTask.title.trim != '' && currentTask.desc.trim != '' && currentTask.deadline != NaN){
    console.log('Current Task:', currentTask);
    tasksStore.tasks[currentTask.id-1] = {...currentTask};
    router.push(`/`);
  }
  else{
    console.log(currentTask);
    alert("A feladatnak kell cím!")
  }
  
}

</script>



