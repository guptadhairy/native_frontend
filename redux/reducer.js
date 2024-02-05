import { createReducer } from "@reduxjs/toolkit";
import { loginRequest, loginSuccess, loginFailure, clearMessage, clearError, loadUserFailure, loadUserSuccess, loadUserRequest, addTaskRequest, addTaskSuccess, addTaskFailure, updateTaskRequest, updateTaskSuccess, updateTaskFailure, deleteTaskSuccess, deleteTaskRequest, deleteTaskFailure, updateProfileRequest, updateProfileSuccess, updateProfileFailure, logoutRequest, logoutSuccess, logoutFailure } from "./authAction";
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
      .addCase(logoutRequest, (state) => {
        state.loading = true;
      })
      .addCase(logoutSuccess, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(logoutFailure, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
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

export const messageReducer = createReducer({loading: false,
  message: null,
  error: null},(builder) => {
    builder
      .addCase(addTaskRequest, (state) => {
        state.loading = true;
      })
      .addCase(addTaskSuccess, (state,action) => {
        state.loading = false;
        state.message = action.payload;
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
      .addCase(updateTaskRequest, (state) => {
        state.loading = true;
      })
      .addCase(updateTaskSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.error = null;
      })
      .addCase(updateTaskFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.message = null;
      })
      .addCase(deleteTaskRequest, (state) => {
        state.loading = true;
      })
      .addCase(deleteTaskSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(deleteTaskFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileRequest, (state) => {
        state.loading = true;
      })
      .addCase(updateProfileSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(updateProfileFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
})