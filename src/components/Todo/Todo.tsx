import { TodoItem } from "../../shared/types";

interface TodoProps {
  todo: TodoItem;
  onDelete: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, onDelete }) => {
  return (
    <div className="todo">
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>✕</button>
    </div>
  );
};

export default Todo;
