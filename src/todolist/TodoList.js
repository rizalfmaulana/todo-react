import { useState } from "react";
import AddForm from "./AddForm";
import Todos from "./Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "buy some coffee" },
    { id: 2, content: "play video games" },
  ]);

  const deleteTodos = (id) => {
    let tod = todos.filter((todo) => todo.id !== id);
    setTodos(tod);
  };

  const addTodos = (todo) => {
    const tod = { content: todo };
    tod.id = Math.random();
    const to = [...todos, tod];
    setTodos(to);
  };

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={todos} deleteTodos={deleteTodos} />
      <AddForm addTodos={addTodos} />
    </div>
  );
};

export default TodoList;
