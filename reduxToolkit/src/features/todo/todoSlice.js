import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos : [{id : 1, text : "harsh"}]
}

export const todoSlice = createSlice({
    name: 'todo',   ///   name is property
    initialState,  //   every slice has initial state
    //    property
    reducers: {
          // addtodo me hamesha state, aur action milega
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),                // Date.now() can be also used
                                            //    payload is an object
                text: action.payload      // value  ex => "hello world"
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo : (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id  ? {...todo , text : action.payload.newText} : todo)
        }
    }
})


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions       //    important step => exporting individual functionality


export  default todoSlice.reducer    //   saare reducers ko export karna padta hai, kyuki jo reducer register karoge usi se value leke update kar sakta hu
