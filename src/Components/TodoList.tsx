import { ITodo } from "../Interfaces";

interface Props {
  todo: ITodo;
  onDelete(title: string): void;
}
const TodoList = ({ todo, onDelete }: Props) => {
  return (
    <div>
      {todo.title}
      {todo.deadline}
      <button onClick={() => onDelete(todo.title)}>X</button>
    </div>
  );
};

export default TodoList;
