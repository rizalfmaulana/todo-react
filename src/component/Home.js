import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      setPost(res.data.slice(0, 10));
    });
  }, []);

  const postList = post.length ? (
    post.map((posts) => {
      return (
        <div className="post card" key={posts.id}>
          <div className="card-content">
            <span className="card-title">{posts.title}</span>
            <p>{posts.body}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center">No posting </div>
  );
  return (
    <div className="container">
      <h4 className="center">Home</h4>
      {postList}
    </div>
  );
};

export default Home;
