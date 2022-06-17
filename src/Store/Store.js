
import { createStore } from 'redux'
const reducer =(state={counter:0},action)=>{
  if(action.type ==="Increment"){
    return {counter: state.counter+1}
  }
  if (action.type ==="Decrement"){
    return{counter:state.counter-1}
  }
  return state;
}

 
const Store = createStore(reducer);
export default Store;