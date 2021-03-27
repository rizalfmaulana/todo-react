import { useState } from "react";
import "./App.css";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "buy some coffee" },
    { id: 2, content: "play video games" },
  ]);
  return (
    <div className="App">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
