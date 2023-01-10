import { useState } from "react"

export const useCounter = (initialValue) => {

    const [count, setCount] = useState(initialValue)
    const increment = (value) => setCount(count + value)
    const decrement = (value) => {
        if(count == 1) return
        setCount(count - value)
    }
    const reset = () => setCount(initialValue)


    return {
        count,
        increment,
        decrement,
        reset
    }
}