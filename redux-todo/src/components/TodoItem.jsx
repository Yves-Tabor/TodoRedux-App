import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todo";


function TodoItem({todo}) {
  const dispatch = useDispatch()
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label className="todo-checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={()=> dispatch(toggleTodo(todo.id))}  
        />
        <span className="checkmark"></span>
      </label>
      <span className="todo-text">{todo.text}</span>
      <button className="delete-btn" onClick={()=> dispatch(deleteTodo(todo.id))}>
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
