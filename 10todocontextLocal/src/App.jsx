import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Context/TodoContext'
import { TodoForm } from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

   
  const addTodo = (todo) => {    //   "todo" form se mil raha hai
    setTodos((prev) => [...prev, {id:Date.now(), ...todo}])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id === id ? todo: prevTodo))   //   map gives every element, so checking by id to update
  }
//    or can use this method

  // prev.map((eachVal)=>{
  //   if(eachVal.id===id){
  //     return todo;
  //   }
  // })

  
  const deleteTodo = (id) => {   //   map is not good in deletion approach
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))   //   jo match nai kar raha use return kar dega
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo ))  //  false hai to vahi rahne do (prevTodo)  true hai to change kar do =>  completed: !prevTodo.complete > jo value hai uska kar do=> like if true then convert it into false
  }

//    for storing the  previos => "todos"
//  local Storage tab tak use kar sakte hai jab tak hum browser pe hai, agar server pe kaam hua to nai use kar sakte
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))     //  accesing the value

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])   //   we can add "todos" in dependency but then it will also get the item, which is not good.
  //  so use another useEffect for any change in the todos, which is better approach

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))     //  localStorage  value string form me store karta hai
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>

    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=> (
              //  key ka kaam iteration ke liye hai,  just like index of an Array
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div> 
            ))}
        </div>
    </div>
    </div>

    </TodoProvider>
  )
}

export default App
