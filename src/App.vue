<template>
      <div class="center" style="width: 800px">    
<h1 style="text-align: center;">Vuejs with Vuex<br />(Task management)</h1><br />
<div class="center" style="width: 100%;">
    <div class="center" style="display: flex;">
        <input type="text" id="txtaddTask" class="form-control" v-model="input_task" 
        placeholder="Add task"
        style="width: 180px;" />
        <Button
            @btn-click="addTask"
            :text="'Add Task'"
            :className="'btn btn-primary'"   
          />
    </div>

    <div class="center">
        Total tasks: {{ totalTasks }}<br />
        <div style="margin-bottom: 8px;">
          <Button
            @btn-click="getData"
            :text="'All Tasks'"
            :className="'btn btn-primary'"   
          />
          <Button
            @btn-click="TasksList('Ongoing')"
            :text="'Ongoing'"
            :className="'btn btn-primary'"     
          />          
          <Button
            @btn-click="TasksList('Completed')"
            :text="'Completed'"
            :className="'btn btn-primary'"     
            :color="'#EFF2F3'"
          />
        </div>
       
<div class="alltasks">
    <div class="tasks" v-for="task in tasks" :key="id" style="padding: 8px; width: 80%; border: 1px solid gray;" >
        <table>
            <tr>
                <td><div id="iddiv">{{ task.id }}</div></td>
                <td>{{ task.task }}</td>
                <td><i v-show="task.status === 'Completed'" class="bi bi-check-circle-fill" style="font-size: 24px; color: #EC7063;"></i></td>
                <td>
                    <button v-show="task.status === 'Ongoing'" @click="completed(task.id)">Mark as completed</button>
                </td>
            </tr>
        </table>      
    </div> 
</div>
    </div>
</div>
</div>
</template>
<script>
import axios from 'axios'
import { useStore } from 'vuex';
import { computed, ref } from 'vue'
import Button from './components/Button.vue'
export default {
  name: 'App',
  components: {
    Button,
  },
  setup(){
    let store = useStore()
    const input_task = ref('')
    let tasks = computed(function () {
      return store.state.tasks
    });

    let totalTasks = computed(function () {
      return store.getters.totalTasks
    });
    async function addTask () {
        const v = { "id": (Number(totalTasks) + 1), "task": input_task.value, "status":"Ongoing", "favorite":0 }
        const res = await axios.post('http://127.0.0.1:3000/task/', v,
          {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          }
        );
        console.log(res);
    };
    const completed = async (id) => {
        let confirm_message = "Confirm to update task as completed"
        if (confirm(confirm_message) == false) {
            return false;
        }
        const v = { "status":"Completed" }
        const res = await axios.patch(`http://127.0.0.1:3000/task/${id}`, v,
          {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          }
        );
        console.log(res);
    }
    function TasksList(v) {
      store.state.tasks = store.state.tasks.filter((task) => { return task.status === v })
    };
    const getData = async () => {
      const res = await axios.get("http://127.0.0.1:3000/task");
      store.commit('addNew', res.data);
    };

    return {
      tasks,
      getData,
      TasksList,
      totalTasks,
      addTask,
      input_task,
      completed
    }
  }
}
</script>
<style>
    @import "bootstrap/dist/css/bootstrap.css";
    @import "bootstrap-icons/font/bootstrap-icons.css";
</style>

<style scoped>
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}
#iddiv {
    width: 50px; 
    height: 50px; 
    text-align: center; 
    border-radius: 50%; 
    background-color: #2ECC71; 
    font-size: 28px; 
    color: white; 
    padding: 2;
}
</style>
