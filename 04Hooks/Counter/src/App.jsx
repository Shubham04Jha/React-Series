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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>{count}</h1>
      <button
      onClick={increment}>
        Add Value
      </button>
      <br />
      <button
      onClick={decrement}>
        Remove Value
      </button>
    </>
  )
}

export default App
