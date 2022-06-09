import React, { useState } from "react";
import { addUserPost } from "../../../features/Home/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../../../hooks";
import { postLimit } from "../data";

export const AddPost = () => {
  const [contents, setContent] = useState("");
  const dispatch = useDispatch();
  const [postMedia, setPostMedia] = useState(null);
  // const [showEmojis, setShowEmojis] = useState(false);
  const [isMediaUploading, setIsMediaUploading] = useState(false);
  const { showToast } = useToast();
  const { user } = useSelector((state) => state.auth);
  const onContentChanged = (e) => setContent(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName} = user;
    const postData = {
      firstName,
      lastName,
      postMedia,
      content: contents.trim(),
    };

    // if (!isEditMode) {
    dispatch(addUserPost(postData));
    showToast("Post Added", "success");
    setContent("");
    setPostMedia("");
    setIsMediaUploading("");
    // } else {
    //   dispatch(editPost({ ...currentEditPost, ...postData }));
    // }

    // if (pathname !== "/" && !pathname.includes("profile")) {
    //   navigate("/");
    // }
  };

  return (
    <>
      <form className="create-post" id="add-post" onSubmit={handleFormSubmit}>
        {user?.profileImage ? (
          <div className="profile-photo">
            <img
              loading="lazy"
              src={user?.profileImage || ""}
              alt={user.original_filename || ""}
            />
          </div>
        ) : (
          <div className="profile-photo">
            <h3> {user?.firstName[0].toUpperCase()}</h3>
          </div>
        )}
        <input
          type="text"
          placeholder="What's on your mind, Ranita?"
          id="create-post"
          value={contents}
          onChange={onContentChanged}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={
            !postMedia &&
            (isMediaUploading ||
              contents.trim().length === 0 ||
              contents.trim().length > postLimit)
          }
        >
          Post
        </button>
      </form>
    </>
  );
};
