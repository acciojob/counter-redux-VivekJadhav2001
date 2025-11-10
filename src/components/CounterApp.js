import React from 'react'
import {useDispatch, useSelector} from "react-redux"
function CounterApp() {

    const count = useSelector((state)=>state.count)

    const dispatch = useDispatch()

    function increment(){
        return {type: "INCREMENT"}
    }

    function decrement(){
        return {type: "DECREMENT"}
    }
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <h1>Count: {count}</h1>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default CounterApp