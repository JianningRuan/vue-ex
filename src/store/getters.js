/*const getters = {
  count(state){
    console.log('state:', state);
    return state.count
  },
  arrLength(state){
    return state.arr.length;
  }
};

export default getters;*/

export const count = (state)=> state.count;
/* 相当于
* const count = function(state){
*   return state.count
* }
* */

export const arrLength = (state)=> state.arr.length;




