import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    opinion:'',
    name:'',
    time:''
  },
  mutations: {
    editState(state,value){
      state.opinion = value[0]
      state.name = value[1]
      state.time = value[2]
    }
  },
  actions: {
  },
  modules: {
  }
})
