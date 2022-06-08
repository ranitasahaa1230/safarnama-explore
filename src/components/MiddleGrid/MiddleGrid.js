import { useEffect, useState } from "react";
import { AddPost } from "./components/AddPost";
import { PostCard } from "./components/PostCard";
import "./MiddleGrid.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../features/Home/postSlice";

export const MiddleGrid = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { user, token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [feedPost, setFeedPost] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(getAllPost());
        if (response.error) {
          throw new Error("Can't fetch posts.");
        }
      } catch (error) {
        console.log(error);
      }
    })();

    const filterByFollowing = allPosts.filter(
      (post) =>
        user.username === post.username ||
        user.following.find((account) => account.username === post.username)
    );
    setFeedPost(filterByFollowing);
  }, [token, allPosts]);

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
