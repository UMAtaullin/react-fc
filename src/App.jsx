import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [likes, setLikes] = useState(5)
  const [value, setValues] = useState('some text')
  
  function plus() {
    setLikes(likes + 1)
  }
  function minus() {
    setLikes(likes - 1)
  }

  return (
    <>
      <h2>{value}</h2>
      <h2>{likes}</h2>
      <input 
        type="text" 
        value={value}
        onChange={e => setValues(e.target.value)} 
        />
      <button onClick={plus}>Increment</button>
      <button onClick={minus}>Decrement</button>
    </>
  )
}

export default App
