import React, {useState, useContext} from "react";
import UserContext from "../Context/UserContext";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} =  useContext(UserContext)    //  getting "setUser" from UserContextProvider by using useContext

    const handleSubmit = (chai)=>{
        chai.preventDefault()
        setUser({username,password})    //   value set kar rahe hai ya daal rahe hai
    }

    return(
        <div>
            <h1>Login</h1>

            <input type="text"
            value={username}
            onChange={(chai)=> setUsername(chai.target.value)}
            placeholder="username" />
            {"      "}
            <input type="text"
            value={password}
            onChange={(chai) => setPassword(chai.target.value)}
            placeholder="password" />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;