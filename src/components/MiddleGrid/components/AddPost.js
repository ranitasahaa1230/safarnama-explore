import React, { useState } from "react";
import { addUserPost, editUserPost } from "../../../features/Home/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../../../hooks";
// import { postLimit } from "../data";
import { getPostModal, HIDE_MODAL } from "./Modal/postModalSlice";

export const AddPost = ({ modal }) => {
  // const [contents, setContent] = useState("");
  const dispatch = useDispatch();
  // const [postMedia, setPostMedia] = useState(null);
  // const [showEmojis, setShowEmojis] = useState(false);
  // const [isMediaUploading, setIsMediaUploading] = useState(false);
  const { showToast } = useToast();
  const { user,token } = useSelector((state) => state.auth);
  const onContentChanged = (e) => setContent(e.target.value);

  const { postToEdit } = useSelector(getPostModal);

  const isPostEditing = modal ? true : false;
  const [contents, setContent] = useState(
    isPostEditing ? postToEdit.content : ""
  );
  const [addPostImage, setAddPostImage] = useState(
    isPostEditing ? postToEdit.postImage : ""
  );

  const addPostHandler = (e) => {
    e.preventDefault();
    const { firstName, lastName } = user;
    const postData = {
      firstName,
      lastName,
      postMedia: addPostImage,
      content: contents.trim(),
    };

    // if (!isEditMode) {
    dispatch(addUserPost(postData));
    showToast("Post Added", "success");
    setContent("");
    setAddPostImage("");
    // } else {
    //   dispatch(editPost({ ...currentEditPost, ...postData }));
    // }

    // if (pathname !== "/" && !pathname.includes("profile")) {
    //   navigate("/");
    // }
  };

  const editPostHandler = async (e) => {
    e.preventDefault();
    const { firstName, lastName } = user;

    const postData = {
      firstName,
      lastName,
      content: contents,
      postImage: addPostImage,
    };

    try {
      const response = await dispatch(
        editUserPost({ token, postData, postId: postToEdit._id })
      );
      if (response.error) {
        throw new Error(response.payload);
      }
      showToast("Edited Post Successfully.", "success");
      dispatch(HIDE_MODAL());
      setContent("");
      setAddPostImage("");
    } catch (error) {
      if (error.message.includes("402"))
        showToast(
          "This username is not registered. Please login again.",
          "error"
        );
      else if (error.message.includes("500"))
        showToast("Can't edit post. Try again later.", "error");
    }
  };

  // const fileToURL = (event) => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     let imgUrl = reader.result;
  //     setAddPostImage(imgUrl);
  //   };
  //   reader.readAsDataURL(event.target.files[0]);
  // };

  return (
    <>
      <form className="create-post" id="add-post" 
      // onSubmit={handleFormSubmit}
      >
          <div className="profile-photo">
            <img
              loading="lazy"
              src={user.profileImage}
              alt={user.original_filename}
            />
          </div>
        
        <input
          type="text"
          placeholder="What's on your mind, Ranita?"
          id="create-post"
          value={contents}
          onChange={onContentChanged}
        />


        {/* <button
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
        </button> */}

        {contents.length === 0 ? (
            isPostEditing ? (
              <button
                className="btn btn-primary"
                disabled
              >
                Save Post
              </button>
            ) : (
              <button
                className="btn btn-primary"
                disabled
              >
                Post
              </button>
            )
          ) : isPostEditing ? (
            <button
              onClick={editPostHandler}
              className="btn btn-primary"
            >
              Save Post
            </button>
          ) : (
            <button
              onClick={addPostHandler}
              className="btn btn-primary"
            >
              Post
            </button>
          )}
      </form>
    </>
  );
};
