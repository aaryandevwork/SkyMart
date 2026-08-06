import { createSlice } from "@reduxjs/toolkit";

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;

const initialState = {
  user: loggedInUser,
  isAuthenticated: !!loggedInUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("loggedInUser");
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
