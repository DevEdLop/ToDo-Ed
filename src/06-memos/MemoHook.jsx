import { useMemo, useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"



const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('ahi vamos ...')
    }

    return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {

    const { count, increment } = useCounter(4000)
    const [show, setShow] = useState(true)


    const messagMemorizeValue = useMemo(() => heavyStuff(count), [count])

    return (

        <>

            <h1>Counter: <Small value={count} /></h1>
            <hr />

            <h4>{(messagMemorizeValue)}</h4>

            <button
                className="btn btn-outline-info"
                onClick={() => increment(1)}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </>
    )
}
