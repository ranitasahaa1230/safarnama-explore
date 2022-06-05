import { useSelector} from "react-redux";
import { LeftSidebar } from "../../components";
import { SinglePost } from "../Home/SinglePost";

export const Explore = () => {
  const { allPosts } = useSelector((state) => state.post);
  
  return (
    <main>
      <div className="container">
        <LeftSidebar />
        <div className="feeds">
          {allPosts.length !== 0
            ? allPosts.map((post) => (
              <SinglePost key={post._id} post={post} />
            ))
            : ""}
        </div>
      </div>
    </main>
  );
};
