import { useParams } from "react-router";

const Post = () => {
  const id = useParams;

  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
};

export default Post;
