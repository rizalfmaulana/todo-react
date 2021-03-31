import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../Scooter_Outline.svg";

const Home = ({ posts }) => {
  //   const [post, setPost] = useState([]);
  //   useEffect(() => {
  //     axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //       console.log(res);
  //       setPost(res.data.slice(0, 10));
  //     });
  //   }, []);

  const postList = posts.length ? (
    posts.map((post) => {
      return (
        <div className="post card" key={post.id}>
          <img src={logo} alt="logo" />
          <div className="card-content">
            <Link to={`/blogs/${post.id}`}>
              <span className="card-title">{post.title}</span>
            </Link>
            <p>{post.body}</p>
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
