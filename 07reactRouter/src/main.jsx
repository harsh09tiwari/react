import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home  from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'//  does not have curly bracket bcoz it is exportd using default
import {User}  from './components/User/User.jsx'     //   no default export
import {Github,githubInfoLoader} from './components/Github/Github.jsx' 


///  FIRST METHOD

//  '/'    top level element, iske andar nesting ho rahi hai
//      to jo render karna hai vo isko batana padta hai

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout/>,
//     children: [ 
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element:<About/>
//       },
//       {
//         path: "contact",
//         element:<Contact/>
//       }  
//     ]
//   }
// ])


//  SECOND METHOD
// ABOUT THIS =>  It creates a router configuration using React Router’s createBrowserRouter and createRoutesFromElements functions.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element= {<Layout/>}>   //  outlet se mila hai, nesting ke liye, aur ye top level hai
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="user/:userid" element={<User/>} />    //   ":"  ke  baad jo bhi hai vo important hai
      <Route 
      loader={githubInfoLoader}   //  concept of LOADER
      path ="github" 
      element={<Github/>}

      />
     </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />   {/* creating Router here  */}
  </StrictMode>,
)
