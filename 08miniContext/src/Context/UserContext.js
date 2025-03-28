import React from 'react'
import { createContext } from 'react';    //   this or

const UserContext = React.createContext()   //   that

export default UserContext;  















//   CONTEXT IS PROVIDER, and it is like global variable
// context ke saath provider banana padta hai jsike andar wrap karte hai

//   the "UserContext' is provider here or context

//    Exapmle for understanding 
{/* <UserContext>   /
<Login/>
<Card>
    <Data/>
</Card>
<UserContext/> */} 