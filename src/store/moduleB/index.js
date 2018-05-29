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
    playBtn(state){
      return state.play? 'show': 'hide'
    }
  }
};

export default modulesB;
