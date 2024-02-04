// authActions.js
import { createAction } from "@reduxjs/toolkit";

export const loginRequest = createAction("loginRequest");
export const loginSuccess = createAction("loginSuccess");
export const loginFailure = createAction("loginFailure");
export const loadUserRequest = createAction("loadUserRequest");
export const loadUserSuccess = createAction("loadUserSuccess");
export const loadUserFailure = createAction("loadUserFailure");
export const clearError = createAction("clearError");
export const clearMessage = createAction("clearMessage");
export const addTaskRequest = createAction("addTaskRequest");
export const addTaskSuccess = createAction("addTaskSuccess");
export const addTaskFailure = createAction("addTaskFailure");
