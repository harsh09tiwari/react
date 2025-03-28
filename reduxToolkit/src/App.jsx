import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddTodo } from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Update } from './components/Update'

function App() {

  return (
    <Provider store={store}>
     <AddTodo/>
     <Todos/>
     {/* <Update/> */}
    </Provider>
  )
}

export default App
