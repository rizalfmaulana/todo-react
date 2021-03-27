const Todos = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p>You haven't todo's left</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
