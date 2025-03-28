import { useState } from 'react'    //   useState   is a hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //  value is updating every time so it will not be const but since it's an array we can use that(const) but the size will become fix
  let [counter, setCounter] = useState(0)    ///    this is the syntax of using useState hook,

  // let counter = 15;
  
  const addValue = ()=>{
    if (counter <20) { 
      counter +=1
      setCounter(counter)
    
    //   or
    // setCounter(counter+1)
    // setCounter(previousCounter => previousCounter+1)
    // setCounter(previousCounter => previousCounter+1)
    // setCounter(previousCounter => previousCounter+1)
    
    
    
    
    // console.log('value added' , counter);
    }
  }

  const subValue = ()=>{
    if (counter > 0) {
      setCounter(counter-1)
    }
  }

  const reset = ()=>{
    // if (counter == 20 ) {
      counter = 0;
      setCounter(counter)
    // }
  }

  //    we do not create function inside the return

  return (
    <>
      <h1>Namaste Anjali</h1>
      <h2>Anjali Counter: {counter}</h2>

      <button onClick={addValue}>Add Anjali {counter}</button>
      <br />
      <button onClick={subValue}> Remove Anjali {counter}</button>
      <br />
      <button onClick={reset}>Reset Anjali</button>

      <p>footer : {counter}</p>
    </>
  )
}

export default App