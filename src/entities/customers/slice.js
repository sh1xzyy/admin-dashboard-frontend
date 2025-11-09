import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getCustomersThunk } from "./operations";

const initialState = {
  customers: {
    customers: [],
    total: 0,
    totalPages: 0,
  },
  isLoading: false,
};

const customersSlice = createSlice({
  name: "customersSlice",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getCustomersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customers = action.payload.data;
      })
      .addMatcher(isAnyOf(getCustomersThunk.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getCustomersThunk.rejected), (state) => {
        state.isLoading = false;
      }),
});

export default customersSlice.reducer;
