import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/reducers";

import { loginThunk } from "./thunk";

interface IAuthState {
  isAuthenticated: boolean;
  username?: string;
  accessToken?: string;
  error?: string;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  username: undefined,
  accessToken: undefined,
  error: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.username = undefined;
      state.accessToken = undefined;
      state.error = undefined;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isAuthenticated = false;
        state.username = undefined;
        state.accessToken = undefined;
        state.error = undefined;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        // Set the authentication state to true on successful loginThunk

        const { payload } = action;
        const { username, accessToken } = payload;

        state.isAuthenticated = true;
        state.username = username;
        state.accessToken = accessToken;
        state.error = undefined;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        // Set the authentication state to false and error message on failed login
        state.isAuthenticated = false;
        state.username = undefined;
        state.accessToken = undefined;
        state.error = action.error.message;
      });
  },
});

export const { logoutSuccess } = authSlice.actions;

export const selectAuthenticationSlice = (state: RootState) => state.auth;

export default authSlice.reducer;
