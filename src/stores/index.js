const store = createStore({
  state () {
    return {
      tasks: [],
      status: 'Ongoing',
    }
  },
  mutations: {
    totalTasks (state) {
      state.tasks.value.length
    }
  }
})