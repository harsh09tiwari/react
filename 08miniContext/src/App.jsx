import './App.css'
import { Profile } from './Components/Profile'
import Login from './Components/Login'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
