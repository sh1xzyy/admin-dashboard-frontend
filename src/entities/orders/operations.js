import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../shared/api/authInstance";

export const getOrdersThunk = createAsyncThunk(
  "/orders",
  async (params, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.accessToken;
      if (!accessToken)
        return thunkAPI.rejectWithValue("Access token not found");

      const response = await authInstance.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.data?.message);
    }
  }
);
