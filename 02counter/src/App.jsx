import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 1;

  let [counter, setCounter] = useState(1)


  const addValue = () => {
    counter = counter + 1;
    if(counter > 20 ){ counter = 20}
    setCounter(counter)
    console.log(counter)
  }

  const decreaseValue = () => {
     counter= counter- 1;
     
    if(counter < 0){ counter = 0}
    setCounter(counter)

    console.log(counter)
  }

  return (
    <>
      <h1>Counter Value {counter}</h1>
      <button onClick={addValue} >add value {counter}</button>
      <br /> <br />
      <button onClick={decreaseValue}>decrease value {counter}</button>
    </>
  )
}

export default App
