import React, { useState } from 'react'
import UserContext from "./UserContext"
// import { useState } from 'react'

const UserContextProvider = ({children}) => {   //   "children" here is just a generic name, and it can be anything
    const [user, setUser] = React.useState(null)  //  without importing {useState}
    return(
        <UserContext.Provider value={{user, setUser}}>   {/* we have to access the value here using property => context.Provider */}
        {children}
        </UserContext.Provider>
    )
}
 
export default UserContextProvider