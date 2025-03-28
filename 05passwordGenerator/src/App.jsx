import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //   useRef   Hook
  const passwordRef = useRef(null)

  ///      useCallback  Hook
  const passwordGenerator = useCallback(()=>{    //   one is a callback and the other is dependencies array 
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numberAllowed)  str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()+_-[]{};':,.>/?|~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])   //    setPassword is used here as a concept of memoization (use for optimization), we can remove it also

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()       //   highlighting the  selection
    // passwordRef.current?.setSele ctionRange(0,3)    //   giving range for selection
    window.navigator.clipboard.writeText(password)
  },[password ])

  ////        useEffect  Hook
  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])
 
  return (
    <>
    <div className ='w-full max-w-xl mx-auto shadow-md rounded-lg py-3 px-4 my-8 bg-gray-700 text-violet-300'>
      <h1 className ='text-white text-center my-2'>Password Generator</h1>
      <div className ='flex shadow rounded-xl overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3 bg-white text-black '
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button  onClick={copyPasswordToClipboard} className='outline-none bg-violet-400 text-white px-3 py-1 shrink-0 active:bg-violet-700'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-5'>
        <div className='flex items-center gap-x-3'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(chai)=>{setLength(chai.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-3'>
        <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={(chai)=>{
            setNumberAllowed((prev)=>!prev)}}
          />
          <label>Numbers</label>
          <div className='flex items-center gap-x-3'>
        <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={(chai)=>{
            setCharAllowed((prev)=>!prev)}}
          />
          <label>Characters</label>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
