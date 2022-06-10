import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserPost,
  likeAndDislikePost,
  addAndRemoveBookmark,
} from "../../../features/Home/postSlice";
import { useToast } from "../../../hooks";
import { Link, useNavigate } from "react-router-dom";
import { SHOW_MODAL } from "./Modal/postModalSlice";
import { getTimeDiff } from "./getTimeDiff";

export const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const [editModal, setEditModal] = useState(false);
  const { showToast } = useToast();
  const { user } = useSelector((state) => state.auth);
  //   const { allUsers } = useSelector((state) => state.user);

  const {
    _id,
    likes: { likeCount, likedBy },
    content,
    // userId,
    // isEdited,
    username,
    firstName,
    lastName,
    createdAt,
    // comments,
    postMedia,
    profileImage,
    bookmark,
    original_filename,
  } = post;

  const isLiked = likedBy?.some((like) => like.username === user.username);
  const isBookmarked = bookmark?.some(
    (bookmarkPost) => bookmarkPost.username === user.username
  );

  const editHandler = () => {
    dispatch(SHOW_MODAL(true));
    // dispatch(SET_POST_TO_EDIT(post));
  };

  const likeDislikeHandler = () => {
    dispatch(
      likeAndDislikePost({ postId: _id, isLike: isLiked ? false : true })
    );
    !isLiked && showToast("Liked Post", "success");
  };

  const addRemoveBookmarkHandler = () => {
    if (!isBookmarked) {
      dispatch(
        addAndRemoveBookmark({
          postId: _id,
          isBookmark: isBookmarked ? false : true,
        })
      );
      showToast("Bookmarked Post", "success");
    } else {
      dispatch(
        addAndRemoveBookmark({
          postId: _id,
          isBookmark: isBookmarked ? false : true,
        })
      );
      showToast("Removed Bookmark", "success");
    }
  };

  const handleShareClick = () => {
    window.navigator.clipboard.writeText(
      `${window.location.origin}/post/${_id}`
    );
    showToast("Link copied", "success");
  };

  return (
    <div className="feed">
      <div className="head">
        <div className="user" onClick={() => navigate(`/profile/${username}`)}>
          <div className="profile-photo">
            <img
              loading="lazy"
              src={
                username === user.username ? user.profileImage : profileImage
              }
              alt={original_filename}
            />
          </div>

          <div className="ingo-user">
            <h3>
              {firstName} {lastName}
            </h3>
            <div className="user-flex">
              <span className="text-muted">
                <i>@{username}</i>
              </span>{" "}
              <small className="text-bold">
                {" "}
                {getTimeDiff(createdAt)}
              </small>
            </div>
          </div>
        </div>

        {user.username === username && (
          <span className="edit-post">
            {/* <i className="uil uil-ellipsis-h"></i> */}

            <i className="fa-solid fa-pen" onClick={editHandler}></i>
            <i
              className="fa-solid fa-trash"
              onClick={() => {
                dispatch(deleteUserPost(_id));
                showToast("Post Deleted Successfully!", "success");
              }}
            ></i>
          </span>
        )}
      </div>

      <Link to={`/post/${_id}`} className="active-feed">
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
      </Link>

      <div className="action-button">
        <div className="interaction-buttons">
          <div
            className="likes-count"
            data-tooltip="Like"
            onClick={() => likeDislikeHandler()}
          >
            {isLiked ? (
              <i className="fas fa-heart card-icons"></i>
            ) : (
              <i className="fas fa-heart cards-icon"></i>
            )}
            <span className="text-muted">{likeCount}</span>
          </div>

          <div data-tooltip="Comment">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="card-comment"
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
          <div onClick={handleShareClick} data-tooltip="Share">
            <i className="uil uil-share-alt card-share"></i>
          </div>

          <div
            onClick={() => addRemoveBookmarkHandler()}
            data-tooltip="Bookmark"
          >
            {isBookmarked ? (
              <i className="fa-solid fa-bookmark cards-bookmark"></i>
            ) : (
              <i className="fa-solid fa-bookmark card-bookmark"></i>
            )}
          </div>
        </div>
      </div>

      {/* <div className="comments text-muted">View all {comments}</div> */}
    </div>
  );
};
