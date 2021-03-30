import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import TodoList from "./todolist/TodoList";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/todolist">
          <TodoList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
