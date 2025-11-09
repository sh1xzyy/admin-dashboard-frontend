import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../shared/api/authInstance";

export const getCustomersThunk = createAsyncThunk(
  "/customers/get",
  async (params, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.accessToken;
      if (!accessToken)
        return thunkAPI.rejectWithValue("Access token not found");

      const response = await authInstance.get("/customers", {
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
