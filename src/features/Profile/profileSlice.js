import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchUserProfileService,
    fetchUserPostsService,
  } from "../../services";
  
  export const fetchUserProfile = createAsyncThunk(
    "userProfile/fetchUserProfile",
    async ({ username }, { rejectWithValue }) => {
      try {
        const { data } = await fetchUserProfileService(username);
        const { user } = data;
        return user;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const fetchUserPosts = createAsyncThunk(
    "userProfile/fetchUserPosts",
    async ({ username }, { rejectWithValue }) => {
      try {
        const { data } = await fetchUserPostsService(username);
        const { posts } = data;
        return posts;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  
  const profileSlice = createSlice({
    name: "profile",
    initialState: {
      userProfile: {},
      userPosts: [],
    },
    reducers: {},
    extraReducers: {
      [fetchUserProfile.fulfilled]: (state, action) => {
        state.userProfile = action.payload;
      },
      [fetchUserPosts.fulfilled]: (state, action) => {
        state.userPosts = action.payload;
      },
    },
  });
  
  export const getUserProfile = (state) => state.profile;
  export default profileSlice.reducer;


