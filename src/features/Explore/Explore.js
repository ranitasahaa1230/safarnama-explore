import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LeftSidebar, RightSidebar } from "../../components";
import { PostCard } from "../../components/MiddleGrid/components/PostCard";
import { getAllPost } from "../Home/postSlice";

export const Explore = () => {
  const { allPosts } = useSelector((state) => state.post);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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

  return (
    <main>
      <div className="container">
        <LeftSidebar />
        <div className="middle">
         <div className="feeds">
         {allPosts.length > 0 && allPosts.map((post) => <PostCard key={post._id} post={post}/>)}

         </div>
        </div>

        <RightSidebar/>
      </div>
    </main>
  );
};
