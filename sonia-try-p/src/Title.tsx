import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './title.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Wordle</h1>
        <button id='info'>מידע על המשחק</button>

    </>
  )
}

export default App
