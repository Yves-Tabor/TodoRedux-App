
import { toggleTodo } from "../features/todo";


function TodoItem({todo, onToggle, onDelete}) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label className="todo-checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}  
        />
        <span className="checkmark"></span>
      </label>
      <span className="todo-text">{todo.text}</span>
      <button className="delete-btn" onClick={onDelete}>
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
