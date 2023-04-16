import { createStore } from "vuex";

export default createStore({
  state () {
    return {
      tasks: [],
      status: 'Ongoing',
    }
  },
  mutations: {
    addNew (state, v) {
        state.tasks = v
    },
    updateStatus(state) {
        state.status = "Completed"
    }
  },
  actions: {

  },
  getters: {
    getTasks (state) {
      return state.tasks
    },
    totalTasks (state) {
        return state.tasks.length  
    }
  }
})