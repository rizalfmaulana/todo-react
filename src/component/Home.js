import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Scooter_Outline.svg";

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
          <img src={logo} alt="logo" />
          <div className="card-content">
            <Link to={`/blogs/${posts.id}`}>
              <span className="card-title">{posts.title}</span>
            </Link>
            <p>{posts.body}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center">Loading... </div>
  );
  return (
    <div className="container home">
      <h4 className="center">Home</h4>
      {postList}
    </div>
  );
};

export default Home;
