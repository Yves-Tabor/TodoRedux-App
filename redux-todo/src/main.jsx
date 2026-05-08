import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import todoReducer from "./features/todo.js"

const store = configureStore({
  reducer: {
    todo: todoReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
