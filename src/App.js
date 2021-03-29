import { useState } from "react";
import AddForm from "./AddForm";
import "./App.css";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "buy some coffee" },
    { id: 2, content: "play video games" },
  ]);

  const deleteTodos = (id) => {
    let tod = todos.filter((todo) => todo.id !== id);
    setTodos(tod);
  };

  const addTodos = (todo) => {
    todo.id = Math.random();
    setTodos((prevState) => {
      [...prevState, todo];
    });
  };

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={todos} deleteTodos={deleteTodos} />
      <AddForm addTodos={addTodos} />
    </div>
  );
}

export default App;
