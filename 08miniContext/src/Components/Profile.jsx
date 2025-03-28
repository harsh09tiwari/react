import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

export function Profile(props) {
    
    const {user} = useContext(UserContext)

    if (!user) return <div>Please Login</div> 

    return(
        <div>Welcome {user.username}</div>
    )
}
