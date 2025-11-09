import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../shared/api/authInstance";

export const getSuppliersThunk = createAsyncThunk(
  "/suppliers/get",
  async (params, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.accessToken;
      if (!accessToken)
        return thunkAPI.rejectWithValue("Access token not found");

      const response = await authInstance.get("/suppliers", {
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

export const addSupplierThunk = createAsyncThunk(
  `/suppliers/add`,
  async (body, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.accessToken;
      if (!accessToken)
        return thunkAPI.rejectWithValue("Access token not found");

      const response = await authInstance.post("/suppliers", body, {
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

export const updateSupplierThunk = createAsyncThunk(
  `/suppliers/update`,
  async ({ id, body }, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.accessToken;
      if (!accessToken)
        return thunkAPI.rejectWithValue("Access token not found");

      const response = await authInstance.put(`/suppliers/${id}`, {
        body,
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
