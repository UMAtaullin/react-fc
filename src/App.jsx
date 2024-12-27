import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [likes, setLikes] = useState(5)
  
  function plus() {
    setLikes(likes + 1)
  }
  function minus() {
    setLikes(likes - 1)
  }

  return (
    <>
      <h1>{likes}</h1>
      <button onClick={plus}>Increment</button>
      <button onClick={minus}>Decrement</button>
    </>
  )
}

export default App
