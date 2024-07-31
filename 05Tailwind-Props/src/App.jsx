import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let array
  return (
    <>
      <h1 className='bg-blue-600  text-black p-4 rounded-xl mb-5 p-3 rounded-xl'>Hello tailwind</h1>
      <Card username = "A" array ={[1,2,3]}/>
      <Card username = "B"/>
    </>
  )
}

export default App
