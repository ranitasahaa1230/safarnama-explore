import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import postReducer from "../features/Home/postSlice";
import allUsersReducer from "../features/Profile/allUsersSlice";
import profileReducer from "../features/Profile/profileSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        allUsers: allUsersReducer,
        profile:profileReducer,
    }
})