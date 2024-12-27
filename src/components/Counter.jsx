import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(5)
  
  function plus() {
    setCount(count + 1)
  }
  function minus() {
    setCount(count - 1)
  }

  return (
    <>
      <h2>{count}</h2>

      <button onClick={plus}>Increment</button>
      <button onClick={minus}>Decrement</button>
    </>
  )
}

export default Counter