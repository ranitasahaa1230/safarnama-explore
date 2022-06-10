import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPostService,
  getUserPostService,
  addPostService,
  deletePostService,
  editPostService,
  likePostService,
  dislikePostService,
  addBookmarkService,
  removeBookmarkService,
} from "../../services";

const initialState = {
  allPosts: [],
  userPosts: [],
  // bookmarks: [],
  sortBy: "Default",
};

export const getAllPost = createAsyncThunk(
  "post/getAllPost",
  async (_, thunkAPI) => {
    try {
      const response = await getAllPostService();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserPost = createAsyncThunk(
  "post/getUserPosts",
  async (username, thunkAPI) => {
    try {
      const response = await getUserPostService(username);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addUserPost = createAsyncThunk(
  "post/addUserPost",
  async (postData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await addPostService(postData, token);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editUserPost = createAsyncThunk(
  "posts/editUserPost",
  async ({ token, postData, postId }, { rejectWithValue }) => {
    try {
      const { data } = await editPostService(token, postData, postId);
      const { posts } = data;
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUserPost = createAsyncThunk(
  "post/deleteUserPost",
  async (postId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await deletePostService(postId, token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const likeAndDislikePost = createAsyncThunk(
  "post/likeAndDislikePost",
  async ({ postId, isLike }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = isLike
        ? await likePostService(postId, token)
        : await dislikePostService(postId, token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addAndRemoveBookmark = createAsyncThunk(
  "post/addAndRemoveBookmark",
  async ({ postId, isBookmark }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = isBookmark
        ? await addBookmarkService(postId, token)
        : await removeBookmarkService(postId, token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },  extraReducers: {
    [getAllPost.pending]: (state) => {
      state.postStatus = "loading";
    },
    [getAllPost.fulfilled]: (state, { payload }) => {
      state.postStatus = "fulfilled";
      state.allPosts = payload.posts.reverse();
    },
    [getAllPost.rejected]: (state, { payload }) => {
      state.postStatus = "rejected";
      state.allPosts = payload;
    },
    [getUserPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [getUserPost.fulfilled]: (state, { payload }) => {
      state.postStatus = "fulfilled";
      state.userPosts = payload.posts.reverse();
    },
    [getUserPost.rejected]: (state, { payload }) => {
      state.postStatus = "rejected";
      state.allPosts = payload;
    },
    [addUserPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [addUserPost.fulfilled]: (state, { payload }) => {
      state.postStatus = "fulfilled";
      state.allPosts = payload.reverse();
    },
    [addUserPost.rejected]: (state, { payload }) => {
      state.postStatus = "rejected";
      state.allPosts = payload;
    },
    [editUserPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [editUserPost.fulfilled]: (state, {payload}) => {
      state.postStatus = "fulfilled";
      state.allPosts = payload.posts.reverse();
    },
    [editUserPost.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [deleteUserPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [deleteUserPost.fulfilled]: (state, { payload }) => {
      state.postStatus = "fulfilled";
      state.allPosts = payload.posts.reverse();
    },
    [deleteUserPost.rejected]: (state, { payload }) => {
      state.postStatus = "rejected";
      state.allPosts = payload;
    },
    [likeAndDislikePost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [likeAndDislikePost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts.reverse();
    },
    [likeAndDislikePost.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [addAndRemoveBookmark.pending]: (state) => {
      state.postStatus = "pending";
    },
    [addAndRemoveBookmark.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts.reverse();
    },
    [addAndRemoveBookmark.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
  },
});

export const { setSortBy } = postSlice.actions;

export default postSlice.reducer;
