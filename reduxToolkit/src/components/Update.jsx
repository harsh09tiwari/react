import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { updateTodo } from '../features/todo/todoSlice'

export function Update(todoId) {
    const todo = useSelector((state) => state.todos.find((t) => todo.id === todoId));

    const [text, setText] = useState(todo ? todo.text : "");

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateTodo({ id: todoId, newText: text }));
        // onCancel(); // Close edit mode
      };
    return (
        <form onSubmit={handleUpdate} className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg shadow-md">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 bg-gray-700 text-white p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button type="submit" className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
        Save
      </button>
    </form>
    )
}
