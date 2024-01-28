import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setIsAuthenticated: (state) => {
      console.log("setIsAuthenticated is called");
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
export const { setIsAuthenticated, logout } = authSlice.actions;
