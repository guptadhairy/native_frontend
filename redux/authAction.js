
import { createAction } from "@reduxjs/toolkit";
export const loginRequest = createAction("loginRequest");
export const loginSuccess = createAction("loginSuccess");
export const loginFailure = createAction("loginFailure");
export const logoutRequest = createAction("logoutRequest");
export const logoutSuccess = createAction("logoutSuccess");
export const logoutFailure = createAction("logoutFailure");
export const loadUserRequest = createAction("loadUserRequest");
export const loadUserSuccess = createAction("loadUserSuccess");
export const loadUserFailure = createAction("loadUserFailure");
export const clearError = createAction("clearError");
export const clearMessage = createAction("clearMessage");
export const addTaskRequest = createAction("addTaskRequest");
export const addTaskSuccess = createAction("addTaskSuccess");
export const addTaskFailure = createAction("addTaskFailure");
export const updateTaskRequest = createAction("updateTaskRequest");
export const updateTaskSuccess = createAction("updateTaskSuccess");
export const updateTaskFailure = createAction("updateTaskFailure");
export const deleteTaskRequest = createAction("deleteTaskRequest");
export const deleteTaskSuccess = createAction("deleteTaskSuccess");
export const deleteTaskFailure = createAction("deleteTaskFailure");
export const updateProfileRequest = createAction("updateProfileRequest");
export const updateProfileSuccess = createAction("updateProfileSuccess");
export const updateProfileFailure = createAction("updateProfileFailure");
