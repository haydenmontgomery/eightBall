import { useState } from 'react'
import EightBall from './EightBall'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EightBall />
    </>
  )
}

export default App
