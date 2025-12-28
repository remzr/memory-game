import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Memory-Game</h1>
      <main>
        <Card />
        <Card />
        <Card />
        <Card />        
        <Card />
        <Card />             
      </main>
    </>
  )
}

export default App
