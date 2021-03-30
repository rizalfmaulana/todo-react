import { useState } from "react";

const AddForm = ({ addTodos }) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content);
    addTodos(content);
    setContent("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add new Todo: </label>
        <input type="text" onChange={handleChange} value={content} />
      </form>
    </div>
  );
};

export default AddForm;
