import { React, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./Post.module.css";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const getShortValue = (text, postId) => {
    if (text.length > 20) {
      return (
        <>
          {text.slice(0, 20)}...
          <Link to={`/post/${postId}`} state={{from:location.pathname}}>More</Link>
        </>
      );
    }
    return text;
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className={classes.container}>
      {posts.length !== 0 &&
        posts?.map((post) => {
          const onMoreClick = () => navigate(`/post/${post.id}`);
          return (
            <div className={classes.posts} key={`post-${post.id}`}>
              <div className={classes.post}>
                <h1>{post.id}</h1>
                <h2>{post.title}</h2>
                <p>{getShortValue(post.body, post.id)}</p>
              </div>
              <button onClick={onMoreClick}>Details</button>
            </div>
          );
        })}
    </div>
  );
};

export default Post;