import { createAsyncThunk } from "@reduxjs/toolkit";
import { authInstance } from "../../shared/api/authInstance";

export const getProductsThunk = createAsyncThunk(
  "/products/get",
  async (params, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.accessToken;
      if (!accessToken)
        return thunkAPI.rejectWithValue("Access token not found");

      const response = await authInstance.get("/products", {
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

export const addProductThunk = createAsyncThunk(
  `/products/add`,
  async (body, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.accessToken;
      if (!accessToken)
        return thunkAPI.rejectWithValue("Access token not found");

      const response = await authInstance.post("/products", body, {
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

export const updateProductThunk = createAsyncThunk(
  `/products/update`,
  async ({ id, body }, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.accessToken;
      if (!accessToken)
        return thunkAPI.rejectWithValue("Access token not found");

      const response = await authInstance.put(`/products/${id}`, {
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

export const deleteProductThunk = createAsyncThunk(
  `/products/:{productId}`,
  async (id, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState().auth.accessToken;
      if (!accessToken)
        return thunkAPI.rejectWithValue("Access token not found");

      const response = await authInstance.delete(`/products/${id}`, {
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
