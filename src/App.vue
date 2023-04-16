<template>
      <div class="center" style="width: 800px">    
<h1 style="text-align: center;">Vuejs with Vuex<br />(Task management)</h1><br />
<div class="center" style="width: 100%;">
    <div class="center" style="display: flex;">
        <input type="text" id="txtaddTask"  class="form-control" v-model="taks_input" 
        placeholder="Add task"
        style="width: 180px;" />
        <button @click="addtask" class="btn btn-primary" 
        style="margin-left: 10px; background-color: #0FEFEF;"
        >Add Task</button>
    </div>

    <div class="center">
        Total tasks: {{ totalTasks }}<br />
        <div style="margin-bottom: 8px;">
            <button @click="getData" class="btn btn-primary" 
            style="padding-left: 4px; margin-right: 4px;">
                All tasks
        </button>
        <button @click="TasksList('Ongoing')" class="btn btn-primary" 
            style="padding-left: 4px; margin-right: 4px;">
                Ongoing
        </button>
        <button @click="TasksList('Completed')" class="btn btn-primary" 
            style="padding-left: 4px; margin-right: 4px;">
                Completed
        </button>
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
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      tasks: [],
      status: 'Ongoing',
      totalTasks: 0,
    }
  },
  methods: {
    totalTasks: function () {

    },
    TasksList: function (v) {

    },
  },
  computed: {
    
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
