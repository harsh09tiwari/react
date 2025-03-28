import {createContext, useContext} from 'react'


//     createContext()  is an object in react
export const TodoContext= createContext({
      todos : [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
      ],
      addTodo: (todo)=>{},
      updateTodo: (id,todo)=>{},
      deleteTodo: (id)=>{},
      toggleComplete: (id)=>{}
})


export const TodoProvider = TodoContext.Provider



//   creating and exporting TodoContext as a hook
export const useTodo= ()=>{
    return useContext(TodoContext)
}