import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cardlol'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name: 'harsh',
    age: 20
  }
  let newArray = [1,2,3]
  return (
    <>
     <h1 className="bg-green-400 text-black p-7 rounded-2xl mb-5">Tailwind test</h1>      
     <Card Fname='chai aur code' btnText="click me" />
     {/* no "btnText" in below so adding default value in child component */}
     <Card  Fname='shivam'/>
     {/* <Card  myArr={newArray} someObject={myObj} /> */}
    </>
  )
}

export default App
