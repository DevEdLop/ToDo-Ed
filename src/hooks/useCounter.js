import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [count, setCount] = useState(initialValue)
    const increment = (value = 1) => setCount(count + value)
    const decrement = (value = 1) => {
        if (count == 1) return
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