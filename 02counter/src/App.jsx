import './App.css'
import { useState } from 'react'
import StudentCard from './StudentCard'
import ProductCard from './ProductCard'

function App() {
  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = ()=>{
    counter = counter + 1   
    setCounter(counter)
  }

  const removeValue = ()=>{
    counter = counter - 1
    setCounter(counter)
  }

  const buy = ()=>{
    console.log("Product Purchased");
    
  }

  return(
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add VALue</button><br />
      <button onClick={removeValue}> Remove Value</button>

    <StudentCard 
    name="Yash"
    age={22}
    course="BCA"
    city="Porbandar"
    />

    <ProductCard 
    product="iPhone 15"
    price={70000}
    category="Mobile"
    brand="Apple"
    buy={buy}
    />

    </>
  )
}

export default App
