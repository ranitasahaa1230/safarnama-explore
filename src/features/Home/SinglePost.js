import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LeftSidebar, RightSidebar } from "../../components";
import { useToast } from "../../hooks";
import { fetchSinglePostService } from "../../services";
import { PostCard } from "../../components/MiddleGrid/components/PostCard";

export const SinglePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { allPosts} = useSelector((state) => state.post);
  const { showToast } = useToast();

  const [singlePost, setSinglePost] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { post },
        } = await fetchSinglePostService(postId);
        setSinglePost(post);
      } catch (error) {
        showToast("Can't fetch the post, try again later.","error");
      }
    })();
  }, [allPosts, postId]);

  return (
    <main>
      <div className="container">
        <LeftSidebar />
        <div className="middle">
          <div className="feeds">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
          {!singlePost ? null : (
            <>
              <PostCard post={singlePost} />
            </>
          )}
          </div>
        </div>

        <RightSidebar />
      </div>
    </main>
  );
};
