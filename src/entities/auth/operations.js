import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../shared/api/authInstance";

export const loginThunk = createAsyncThunk(
  "/user/login",
  async (body, { rejectWithValue }) => {
    try {
      const response = await authInstance.post("/user/login", body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.data?.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "/user/refresh",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authInstance.post("/user/refresh", null, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.data?.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "/user/logout",
  async (_, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.accessToken;
      if (!accessToken)
        return thunkAPI.rejectWithValue("Access token not found");

      const response = await authInstance.get("/user/logout", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.data?.message);
    }
  }
);

export const getUserInfoThunk = createAsyncThunk(
  "/user/user-info",
  async (_, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.accessToken;
      if (!accessToken)
        return thunkAPI.rejectWithValue("Access token not found");

      const response = await authInstance.get("/user/user-info", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.data?.message);
    }
  }
);
