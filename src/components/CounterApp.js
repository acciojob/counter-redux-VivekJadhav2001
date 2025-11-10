import React from 'react'
import { useDispatch, useSelector } from "react-redux"
function CounterApp() {

    const count = useSelector((state) => state.count)

    const dispatch = useDispatch()

    function increment() {
        dispatch({ type: "INCREMENT" })
    }

    function decrement() {
        dispatch({ type: "DECREMENT" })
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default CounterApp