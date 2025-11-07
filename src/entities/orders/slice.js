import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getOrdersThunk } from "./operations";

const initialState = {
  orders: {
    requiredCustomersData: [],
    total: 0,
    totalPages: 0,
  },
  isLoading: false,
};

const ordersSlice = createSlice({
  name: "ordersSlice",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getOrdersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload.data;
      })

      .addMatcher(
        isAnyOf(getOrdersThunk.pending, (state) => {
          state.isLoading = true;
        })
      )
      .addMatcher(
        isAnyOf(getOrdersThunk.rejected, (state) => {
          state.isLoading = false;
        })
      ),
});

export default ordersSlice.reducer;
