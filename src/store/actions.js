
let actions = {
  waitAndAddCount({commit}){
    console.log('已点击');
    setTimeout(()=>{
      commit('addCount', 20)
    }, 3000)
  },
  waitAndAdd({commit}, addNum){
    console.log('已点击');
    setTimeout(()=>{
      commit('addCount', addNum);
    },3000)
  }
};

export default actions;
