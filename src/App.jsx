import { useState } from 'react'
import './App.css'
import Hangman from './components/hangman'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hangman></Hangman>
      
    </>
  )
}

export default App
