import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import postReducer from "../features/Home/postSlice";
import allUsersReducer from "../features/Profile/allUsersSlice";
import profileReducer from "../features/Profile/profileSlice";
import modalForPostReducer from "../components/MiddleGrid/components/Modal/postModalSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
        // postModal: postModalReducer,
        modalForPost: modalForPostReducer,
        allUsers: allUsersReducer,
        profile:profileReducer,
    }
})