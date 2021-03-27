import { ListItem } from "@material-ui/core";

const Todos = ({ todos, deleteTodos }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <ListItem className="collection-item" key={todo.id}>
          <span onClick={() => deleteTodos(todo.id)}>{todo.content}</span>
        </ListItem>
      );
    })
  ) : (
    <p>You haven't todo's left</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
