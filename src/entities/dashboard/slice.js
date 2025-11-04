import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getDashboardsDataThunk } from "./operations";

const initialState = {
  dashboard: {
    allProducts: 0,
    allSuppliers: 0,
    allCustomers: 0,
    recentCustomers: [],
    finances: [],
  },
  isLoading: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getDashboardsDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dashboard = action.payload.data;
      })

      .addMatcher(
        isAnyOf(getDashboardsDataThunk.pending, (state) => {
          state.isLoading = true;
        })
      )
      .addMatcher(
        isAnyOf(getDashboardsDataThunk.rejected, (state) => {
          state.isLoading = false;
        })
      ),
});

export default authSlice.reducer;
