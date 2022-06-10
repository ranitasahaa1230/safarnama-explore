import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LeftSidebar, RightSidebar } from "../../components";
import { PostCard } from "../../components/MiddleGrid/components/PostCard";
import { getAllPost } from "../Home/postSlice";

export const Explore = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [explorePosts, setExplorePosts] = useState([]);

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
        // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    setExplorePosts(
      [...allPosts].sort((a, b) => b.likes.likeCount - a.likes.likeCount))
  }, [token, allPosts]);

  return (
    <main>
      <div className="container">
        <LeftSidebar />
        <div className="middle">
         <div className="feeds">
         {explorePosts.length > 0 && explorePosts.map((post) => <PostCard key={post._id} post={post}/>)}

         </div>
        </div>

        <RightSidebar/>
      </div>
    </main>
  );
};
