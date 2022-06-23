import { useEffect, useState } from "react";
import { AddPost } from "./components/AddPost";
import { PostCard } from "./components/PostCard";
import "./MiddleGrid.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../../features/Home/postSlice";
import { actions } from "../RightSidebar/actions";

export const MiddleGrid = () => {
  const { allPosts, sortBy } = useSelector((state) => state.post);
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [feedPost, setFeedPost] = useState([]);
  const { Trending, Newest, Oldest } = actions;

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
        user.following?.find((account) => account.username === post.username)
    );
    switch (sortBy) {
      case Newest:
        return setFeedPost(
          filterByFollowing.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )
        );
      case Oldest:
        return setFeedPost(
          filterByFollowing.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          )
        );
      case Trending:
        return setFeedPost(
          filterByFollowing.sort(
            (a, b) => b.likes.likeCount - a.likes.likeCount
          )
        );
      default:
        throw new Error("Action type not found.");
    }
    // eslint-disable-next-line
  }, [token, allPosts, sortBy]);

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
