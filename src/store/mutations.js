const setCount = 'setCount';
const addCount = 'addCount';

const mutations = {
  [setCount](state){
    state.count++
  },
  [addCount](state, count){
    state.count = count
  }
};

export default mutations;
