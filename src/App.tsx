import { ChangeEvent, useState } from "react";
import TodoList from "./Components/TodoList";
import { ITodo } from "./Interfaces";

const App = () => {
  const [title, setTitle] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTodo = () => {
    const newTodo = { title, deadline };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDeadline(0);
  };

  const deleteTodo = (title: string) => {
    setTodos(todos.filter((todo) => todo.title !== title));
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Please add todo"
        onChange={handleChange}
      />
      <input
        type="number"
        name="deadline"
        value={deadline}
        onChange={handleChange}
      />
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo, key) => {
        return <TodoList key={key} todo={todo} onDelete={deleteTodo} />;
      })}
    </div>
  );
};

export default App;
