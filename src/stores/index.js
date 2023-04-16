const store = createStore({
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
    totalTasks (state) {
      return state.tasks.value.length
    }
  }
})