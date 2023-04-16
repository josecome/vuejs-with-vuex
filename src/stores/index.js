const store = createStore({
  state () {
    return {
      tasks: [],
      status: 'Ongoing',
    }
  },
  mutations: {

  },
  getters: {
    totalTasks (state) {
      return state.tasks.value.length
    }
  }
})