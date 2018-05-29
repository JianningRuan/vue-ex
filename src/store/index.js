import Vue from 'vue';
import Vuex from 'vuex';

import state from './states';
// import getters from './getters';
import * as getters from './getters';
import mutations from './mutations';
import actions from './actions';


import modulesB from './moduleB/index'

Vue.use(Vuex);



const store = new Vuex.Store({
  state,
  /*state: {
    count: 1,
    arr: [1, 2]
  },*/
  getters,
  /*getters: {
    count(state){
      console.log('state:', state);
      return state.count
    },
    arrLength(state){
      return state.arr.length;
    }
  },*/
  mutations,
  /*mutations: {
    setCount(state){
      state.count++
    },
    addCount(state, count){
      state.count = count
    }
  }*/
  actions,
  modules: {
    modulesB
  }
});

export default store;
