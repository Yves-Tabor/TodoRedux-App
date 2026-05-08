import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState: {value: initialStateValue},
    reducers:{
        addTodo : (state, action) =>{
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            }
            state.value.todos.push(newTodo)
        },
        toggleTodo : (state, action) =>{
            state.value.todos = state.value.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            )
        },
        deleteTodo : (state, action) => {
            state.value.todos = state.value.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer