import React from 'react'     /// can also use  {StrictMode}   instead of React
import ReactDOM from 'react-dom/client'   /// can also  use {createRoot} instead of ReactDOM.  after that just reomve "ReactDOM."  from the render section
import App from './App.jsx'


//   In React, functional components must start with an uppercase letter when used as JSX tags.

function MyApp() {
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}
//   when we render the above function it converted  like this below code( ReactElement).

//   if we render "ReactElement"  it cant be rendered bcoz it is custom made, and in react it is predefined
//   and for rendering, use     ReactElement    only bcoz it is an object not a function   

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "anjali"
//   since it is an object we can't just add anything in this like if() or loops.  in obj we add key value pairs
const reactElement = React.createElement(
   'a',
   {href: 'https://google.com', target: '_self'},
   'click me to visit => ',
   anotherUser  ///   injecting variable
)

ReactDOM.createRoot(document.getElementById('root'))
.render(

//  it is a function so it will run if we type like this MyApp()
    
    // <MyApp />
  
    // anotherElement
    reactElement

    // <App/>
)
 