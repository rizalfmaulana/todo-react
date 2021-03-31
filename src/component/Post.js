// import axios from "axios";
// import { useEffect, useState } from "react";
import { connect } from "react-redux";
// import { useParams } from "react-router";

const Post = (props) => {
  //   const [detail, setDetail] = useState(null);
  //   const { id } = useParams();
  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts/" + id)
  //       .then((res) => {
  //         setDetail(res.data);
  //         console.log(res.data);
  //       });
  //   }, [id]);
  const handleDelete = () => {
    props.deletePost(props.post.id);
    props.history.push("/");
  };

  const posts = props.post ? (
    <div className="post">
      <h4>{props.post.title}</h4>
      <p>{props.post.body}</p>
      <div className="center">
        <button onClick={handleDelete} className="btn red">
          Delete Post
        </button>
      </div>
    </div>
  ) : (
    <div className="center">Loading...</div>
  );
  return <div className="container">{posts}</div>;
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch({ type: "DELETE_POST", id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
