import React, { useEffect } from "react";
import { getTimelinePosts } from "../../actions/PostsAction";
import "./Posts.css";
import Post from "../Post/Post";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, [dispatch]);
  if (!posts) return "No Posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);
  return (
    <div className="Posts">
      {loading
        ? "loading ..."
        : posts.map((post, id) => {
            return <Post data={post} id={id} />;
          })}
    </div>
  );
};

export default Posts;
