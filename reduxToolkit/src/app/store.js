/*  Steps for creating store
1=>  Configure store
2=>  Create Reducers

 */

import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice';



export const store = configureStore({
    reducer: todoReducer
})