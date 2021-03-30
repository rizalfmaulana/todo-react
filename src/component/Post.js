import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Post = () => {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        setDetail(res.data);
        console.log(res.data);
      });
  }, [id]);

  const post = detail ? (
    <div className="post">
      <h4>{detail.title}</h4>
      <p>{detail.body}</p>
    </div>
  ) : (
    <div className="center">Loading...</div>
  );
  return <div className="container">{post}</div>;
};

export default Post;
