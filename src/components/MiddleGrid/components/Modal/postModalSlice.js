// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     postModal: false,
//     postInfo: {},
// };

// const postModalSlice = createSlice({
//   name: "postModal",
//   initialState,
//   reducers: {
//     openPostModal: (state, action) => {
//       state.postModal = true;
//       state.postInfo = action?.payload;
//     },
//     closePostModal: (state) => {
//       state.postModal = false;
//       state.postInfo = {};
//     },
//   },
// });

// export const { openPostModal, closePostModal } = postModalSlice.actions;
// export const getPostModal = (state) => state.postModal;

// export default postModalSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  postToEdit: {},
};

const modalSlice = createSlice({
  name: "modalForPost",
  initialState,
  reducers: {
    SET_POST_TO_EDIT: (state, action) => {
      state.postToEdit = action.payload;
    },
    SHOW_MODAL: (state) => {
      state.showModal = true;
    },
    HIDE_MODAL: (state) => {
      state.showModal = false;
      state.postToEdit = {};
    },
  },
});

export const getPostModal = (state) => state.modalForPost;
export const { SET_POST_TO_EDIT, SHOW_MODAL, HIDE_MODAL } = modalSlice.actions;

export default modalSlice.reducer;
