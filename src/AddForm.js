import { useState } from "react";

const AddForm = () => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <div>
      <form>
        <label htmlFor="">Add new Todo</label>
        <input type="text" onChange={handleChange} value={content} />
      </form>
    </div>
  );
};

export default AddForm;
