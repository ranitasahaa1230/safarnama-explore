import { useEffect, useState } from "react";
import {
  feed2,
  profile13,
  profile3,
  profile4,
  profile5,
} from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserPost,
  likeAndDislikePost,
} from "../../../features/Home/postSlice";
import { getDate } from "./utils";
import { useToast } from "../../../hooks";

export const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false);
  const { showToast } = useToast();
  const { user } = useSelector((state) => state.auth);
    const { allUsers } = useSelector((state) => state.user);
  const {
    _id,
    likes: { likeCount, likedBy, dislikedBy },
    content,
    userId,
    isEdited,
    username,
    firstName,
    lastName,
    updatedAt,
    comments,
    postMedia,
    profileImage,
  } = post;

  const userInfo = allUsers && allUsers?.find((user) => user.username === username);
  const isLiked = likedBy?.some((like) => like.username === user.username);


  const editHandler = () => {
    // dispatch(openPostModal(post));
  };

  const likeDislikeHandler = () => {
    dispatch(likeAndDislikePost({ postId: _id, isLike: isLiked ? false : true }));
    showToast("Liked Post", "success");
  };

  return (
    <div className="feed">
      <div className="head">
        <div className="user">
          {profileImage && (
            <div className="profile-photo">
              <img
                loading="lazy"
                src={profileImage.url}
                alt={profileImage.original_filename}
              />
            </div>
          )}
          <div className="ingo">
            <h3>
              {firstName} {lastName}
            </h3>
            <div className="user-date">
              <span className="text-muted">@{username}</span>
              <small className="text-bold"> {getDate(updatedAt)}</small>
            </div>
          </div>
        </div>
        <span className="edit-post">
          <i className="uil uil-ellipsis-h"></i>
          <i className="fa-solid fa-pen" onClick={() => editHandler()}></i>
          <i
            className="fa-solid fa-trash"
            onClick={() => {
              dispatch(deleteUserPost(_id));
              showToast("Post Deleted Successfully!", "success");
            }}
          ></i>
        </span>
      </div>

      {postMedia && (
        <div className="photo">
          <img
            src={postMedia.url}
            alt={postMedia.original_filename}
            className="photo-url"
          />
        </div>
      )}

      {content && (
        <div className="photo">
          <div className="content">{content}</div>
        </div>
      )}

      <div className="action-button">
        <div className="interaction-buttons">
          <div className="likes-count" onClick={() => likeDislikeHandler()}>
          {isLiked ? <i className="fas fa-heart card-icons"></i> : <i className="fas fa-heart cards-icon"></i>}
            <span className="text-muted">{likeCount}</span>
          </div>

          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="icon-btn"
              aria-hidden="true"
              focusable="false"
              height="1.1em"
              width="1.1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z"
              ></path>
            </svg>
            {/* <span className="text-muted">{comments}</span> */}

          </div>
          <div>
            <i className="uil uil-share-alt"></i>
          </div>

          <div>
            <i className="uil uil-bookmark-full"></i>
            {/* <i className="fa-solid fa-bookmark"></i> */}
          </div>
        </div>
      </div>

      <div className="liked-by">
        {/* <span>Liked by {likes.likedBy}</span> */}
      </div>

      {/* <div className="comments text-muted">View all 277 comments</div> */}
    </div>
  );
};
