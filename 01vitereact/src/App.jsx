import Chai from "./Chai";


//    In React, functional components must start with an uppercase letter when used as JSX tags.

function App() {   

  const username=" how are you"  

//   we can only add write evaluated expression only in this html.  which means cant use loops, if statements, etc.   if we want to add we have to write it above

  return (
    //   <div></di>  can be used to wrap, bcoz it can take only 1 eement
// this is also known as fragment   <></>
    <>    
    <Chai/>
    <h1>hello Shivam  {username}</h1>         {/* for injecting the value */}
    <p>Lorem ipsum dolor sit.</p>
    </>
     
   );
}
export default App  
