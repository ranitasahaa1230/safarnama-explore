import { useDispatch, useSelector } from "react-redux";
import { AddPost } from "../AddPost";
// import { CancelIcon } from "assets";
import "./Modal.css";
import { getPostModal, SET_POST_TO_EDIT, HIDE_MODAL} from "./postModalSlice";

export const Modal = () => {
    const { showModal } = useSelector(getPostModal);
  const dispatch = useDispatch();

  const cancelEditHandler = () => {
    dispatch(HIDE_MODAL(false));
    dispatch(SET_POST_TO_EDIT({}));
  };
  return (

    showModal ? (
        <div className="edit-post-modal-wrapper">
          <div className="edit-post-container">
            <h4>Edit Post</h4>
            <button
              className="btn-no-decor position-absolute"
              onClick={cancelEditHandler}
            >
              x
            </button>
            <div className="edit-post-text-container">
              <AddPost modal={true} />
            </div>
          </div>
        </div>
      ) : null
  )
}
