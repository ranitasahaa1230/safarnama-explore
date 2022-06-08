import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsersService, followUserService, unfollowUserService } from "../../services";
import { updateUser } from "../Auth/authSlice";

const initialState = {
  users: [],
  usersLoading: false,
};

export const followUser = createAsyncThunk(
  "allUsers/followUser",
  async ({ token, userId, dispatch }, { rejectWithValue }) => {
    try {
      const { data } = await followUserService(token, userId);
      dispatch(updateUser({ token: token, userData: data.user }));
      // dispatch(editLoggedInUserProfile(data.user));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "allUsers/unfollowUser",
  async ({ token, userId, dispatch }, { rejectWithValue }) => {
    try {
      const { data } = await unfollowUserService(token, userId);
      dispatch(updateUser({ token: token, userData: data.user }));
      // dispatch(editLoggedInUserProfile(data.user));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllUsers = createAsyncThunk(
  "allUsers/fetchAllUsers",
  async (rejectWithValue) => {
    try {
      const { data } = await fetchAllUsersService();
      const { users } = data;
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {},
  extraReducers: {
    //     [getAllUser.pending]: (state) => {
    //       state.userStatus = "pending";
    //     },
    //     [getAllUser.fulfilled]: (state, action) => {
    //       state.userStatus = "fulfilled";
    //       state.allUsers = action.payload.users;
    //       // state.currentUser = action.payload;
    //     },
    //     [getAllUser.rejected]: (state, action) => {
    //       state.userStatus = "rejected";
    //       state.allUsers = action.payload;
    //       // state.currentUser = action.payload;
    //     },
    //     [followUnFollowUser.pending]: (state) => {
    //       state.userStatus = "pending";
    //     },
    //     [followUnFollowUser.fulfilled]: (state, action) => {
    //       state.userStatus = "fulfilled";
    //       state.allUsers = [...state.allUsers].map((user) => {
    //         if (action.payload.followUser.username === user.username) {
    //           return action.payload.followUser;
    //         }
    //         return user;
    //       });
    //     },
    //     [followUnFollowUser.rejected]: (state, action) => {
    //       state.userStatus = "rejected";
    //       state.allUsers = action.payload;
    //     },
    //   },
    // });
    [followUser.fulfilled]: (state, action) => {
      const { followUser } = action.payload;
      state.users = [...state.users].map((user) =>
        user._id === followUser._id ? followUser : user
      );
    },
    [unfollowUser.fulfilled]: (state, action) => {
      const { followUser } = action.payload;
      state.users = [...state.users].map((user) =>
        user._id === followUser._id ? followUser : user
      );
    },
    [fetchAllUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.usersLoading = false;
    },
    [fetchAllUsers.pending]: (state) => {
      state.usersLoading = true;
    },
  },
});

export const getAllUsers = (state) => state.allUsers;

export default allUsersSlice.reducer;
