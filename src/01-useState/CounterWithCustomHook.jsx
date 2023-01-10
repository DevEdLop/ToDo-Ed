import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHook = () => {

  const {
    count,
    increment,
    decrement,
    reset
  } = useCounter(10)



  return (
    <>


      <h1>Counter with Hook: {count}</h1>

      <hr />

      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        -1
      </button>

    </>
  )
}

export default CounterWithCustomHook
