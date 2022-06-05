import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const SinglePost = ({ post }) => {
    const { allUsers } = useSelector((state) => state.user);
    // const { user } = useSelector((state) => state.auth);
    const {
        _id,
        content,
        username,
        likes: { likeCount, likedBy, dislikedBy },
        bookmark,
        comments,
        createdAt,
      } = post;

    //   const userInfo = allUsers && allUsers?.find((user) => user.username === username);
    //   const isLiked = likedBy?.some((like) => like.username === user.username);
    //   const isBookmarked = bookmark?.some((bookmarkPost) => bookmarkPost.username === user.username);

  return (
    <>
    {/* {userInfo ?  */}
    <div className="feed">
      <div className="head">
        <div className="user">
          <div className="profile-photo">
          <img
        //   src={user.userHandler === userInfo?.userHandler ? user.profilePic : userInfo?.profilePic}
        //   alt={userInfo?.userHandler}
          />
          </div>
          <div className="ingo">
            <h3>Lana Rose</h3>
            <small>California, 15 MINUTES AGO</small>
          </div>
        </div>
        <span className="edit">
          <i className="uil uil-ellipsis-h"></i>
        </span>
      </div>
      <div className="photo">
        <div>{content}</div>
      </div>

      <div className="action-button">
        <div className="interaction-buttons">
          <span>
            <i className="fa-solid fa-heart"></i>{" "}
          </span>
          <span>
            <i className="uil uil-comment-dots"></i>
          </span>
          <span>
            <i className="uil uil-share-alt"></i>
          </span>
        </div>
        <div className="bookmark">
          <span>
            <i className="uil uil-bookmark-full"></i>
          </span>
        </div>
      </div>

      <div className="liked-by">
        {/* <span>
          <img src={profile4} alt="profile-pic" />
        </span>
        <span>
          <img src={profile3} alt="profile-pic" />
        </span>
        <span>
          <img src={profile5} alt="profile-pic" />
        </span> */}
        <p>
          Liked by <b>Ernest Bras</b> and <b>2,323 others</b>
        </p>
      </div>

      <div className="caption">
        <p>
          <b>Lana Rose</b>lorem ipsum dot sit mkllll mm.
          <span className="harsh-tag">#lifestyle</span>
        </p>
      </div>

      <div className="comments text-muted">View all 277 comments</div>
    </div> 
    </>
  );
};
