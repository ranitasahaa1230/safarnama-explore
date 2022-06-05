import {createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: [],
  
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  
});

export default userSlice.reducer;