import { useEffect, useState } from "react";
import { AddPost } from "./components/AddPost";
import { PostCard } from "./components/PostCard";
import "./MiddleGrid.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../features/Home/postSlice";

export const MiddleGrid = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [feedPost, setFeedPost] = useState([]);

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  useEffect(() => {
    if (allPosts) {
      setFeedPost(allPosts);
    }
  }, [user, allPosts]);


  return (
    <div className="middle">
      <AddPost />
      <div className="feeds">
        {feedPost.length > 0 ? (
          feedPost.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
