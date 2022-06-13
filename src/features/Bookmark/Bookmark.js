import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LeftSidebar, Loader, RightSidebar } from "../../components/";
import { PostCard } from "../../components/MiddleGrid/components/PostCard";
import "./Bookmark.css";

export const Bookmark = () => {
  const { allPosts, loading } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const [bookmark, setBookmark] = useState(allPosts);

  useEffect(() => {
    setBookmark(
      allPosts.filter(
        (post) =>
          post.bookmark.some(
            (bookmarkPost) => bookmarkPost.username === user.username
          ) === true
      )
    );
    // eslint-disable-next-line
  }, [allPosts]);

  return (
    <main>
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <LeftSidebar />
            <div className="middle">
              <h3 className="bookmarks">Your Bookmarks</h3>

              {bookmark.length > 0 ? (
                bookmark.map((post) => (
                  <div className="feeds">
                    <PostCard key={post._id} post={post} />
                  </div>
                ))
              ) : (
                <div className="no-bookmarks">
                  {" "}
                  You have no bookmarks. Bookmark posts from home feed.
                  <Link to="/feed">
                    <button className="btn btn-primary">
                      Go Back to Home Feed
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <RightSidebar />
          </>
        )}
      </div>
    </main>
  );
};
