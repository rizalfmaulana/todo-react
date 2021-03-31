import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Post from "./component/Post";
import TodoList from "./todolist/TodoList";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route>
        <Route path="/todolist">
          <TodoList />
        </Route>
        <Route path="/blogs/:id">
          <Post />
        </Route> */}
        <Route exact path="/" component={Home} />
        <Route path="/todolist" component={TodoList} />
        <Route path="/blogs/:id" component={Post} />
      </Switch>
    </Router>
  );
}

export default App;
