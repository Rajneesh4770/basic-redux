import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
function Test() {
    const dispatch =useDispatch();
    const counter = useSelector((state)=>state.counter)
    const IncrementHandler=()=>{
            dispatch({type:'Increment'})
    }
    const DecrementHandler =()=>{
            dispatch({type:'Decrement'})
    }
  return (
    <> 
    <h1>Counter App</h1>
    <h2>{counter}</h2>
    <button onClick={IncrementHandler}>Increment</button>
    <button onClick={DecrementHandler}>Decrement</button>
    </>
  )
}

export default Test