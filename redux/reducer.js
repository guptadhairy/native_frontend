import { createReducer } from "@reduxjs/toolkit";
import { loginRequest, loginSuccess, loginFailure, clearMessage, clearError, loadUserFailure, loadUserSuccess, loadUserRequest, addTaskRequest, addTaskSuccess, addTaskFailure } from "./authAction";
export const authReducer = createReducer(
  {
    loading: false,
    isAuthenticated: false,
    user: null,
    message: null,
    error: null,
  },
  (builder) => {
    builder
      .addCase(loginRequest, (state) => {
        state.loading = true;
      })
      .addCase(loginSuccess, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(loginFailure, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(loadUserRequest, (state) => {
        state.loading = true;
      })
      .addCase(loadUserSuccess, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(loadUserFailure, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(clearError, (state) => {
        state.error = null;
      })
      .addCase(clearMessage, (state) => {
        state.message = null;
      })
     
  }
);

export const messageReducer = createReducer({},(builder) => {
    builder
      .addCase(addTaskRequest, (state) => {
        state.loading = true;
      })
      .addCase(addTaskSuccess, (state,action) => {
        state.loading = false;
        state.messagea = action.payload;
      })
      .addCase(addTaskFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(clearError, (state) => {
        state.error = null;
      })
      .addCase(clearMessage, (state) => {
        state.message = null;
      })
})