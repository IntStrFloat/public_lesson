import { useState } from "react";
import Todo from "./components/Todo/Todo";
import { TodoItem } from "./shared/types";
import "./App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [text, setText] = useState<string>("");

  const addTodo = () => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text }]);
    setText("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Новая задача..."
        />
        <button onClick={addTodo}>Добавить</button>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default App;
