import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1);

  const addValue = ()=>{
    setCount(count+1)
  }

  const removeValue = ()=>{
    setCount(count ? count-1 : count=0)
  }

  const reset = ()=>{
    setCount(0)
  }

  return (
    <>
    <div classN="counter">
  <h1>Counter</h1>

  <h2>Count: {count}</h2>

  <div class="buttons">
    <button onClick={removeValue}>-</button>
    <button onClick={addValue}>+</button>
  </div>

  <button onClick={reset}>Reset</button>
</div>
    </>
  )
}

export default App
