import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className="w-full h-screen duration-200" style = {{backgroundColor:color}}>
      <div  className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-4xl">
          <button onClick={()=>setColor("red")} className="px-4 py-1 rounded-full text-white shadow-lg" style ={{backgroundColor:"black"}}>Red</button>
          <button onClick={()=>setColor("green")} className="px-4 py-1 rounded-full text-white shadow-lg" style ={{backgroundColor:"black"}}>Green</button>
          <button onClick={()=>setColor("yellow")} className="px-4 py-1 rounded-full text-white shadow-lg" style ={{backgroundColor:"black"}}>Yellow</button>
          <button onClick={()=>setColor("white")} className="px-4 py-1 rounded-full text-white shadow-lg" style ={{backgroundColor:"black"}}>White</button>
          <button onClick={()=>setColor("violet")} className="px-4 py-1 rounded-full text-white shadow-lg" style ={{backgroundColor:"black"}}>Violet</button>
        </div>
      </div>
    </div>
  
  )
}

export default App
