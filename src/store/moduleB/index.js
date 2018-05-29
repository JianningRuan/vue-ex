const setPlay = 'setPlay';
const modulesB = {
  namespaced: true,
  state: {
    play: true
  },
  mutations: {
    [setPlay](state, play){
      return state.play = play;
    }
  },
  getters: {
    playBtn(state, getters, rootState){ // rootState 为根状态
      console.log('getters', getters);
      console.log('rootState', rootState);
      return state.play? 'show': 'hide'
    }
  },
  actions: {
    waitToPlay({state, commit, rootState}, play){
      console.log(rootState);
      setTimeout(()=>{
        commit('setPlay', play)
      }, 3000)
    }
  }
};

export default modulesB;
