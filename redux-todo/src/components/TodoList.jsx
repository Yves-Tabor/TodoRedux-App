import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todo";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.value.todos);
  
  if (todos.length === 0) {
    return <p className="empty-state">No todos yet. Add one above.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key = {todo.id}
          todo = {todo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
