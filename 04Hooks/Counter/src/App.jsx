import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
const increment = ()=>{
  if(count==20) return;
  count++;
  setCount(count);
}
const decrement = ()=>{
  if(count==0) return;
  count--;
  setCount(count);
}
  return (
    <>
      <h1 className='bg-blue-800 '>Hello Invictus!</h1>
    </>
  )
}

export default App
