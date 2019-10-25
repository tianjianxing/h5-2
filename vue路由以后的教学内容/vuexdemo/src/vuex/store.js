import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:1
  },
  mutations:{
    mutationsAddCount(state,n=0){
      state.count += n;
    },
    mutationsReduceCount(state,n=0){
      state.count -= n;
    }
  },
  actions:{
    actionsAddCount(context,n=0){
      console.log(context);
      context.commit('mutationsAddCount',n);
    },
    actionsReduceCount({commit},n=0){
      commit('mutationsReduceCount',n);
    }
  },
  getters:{
    gettersCount(state){
      return state.count * 10;
    }
  }
})