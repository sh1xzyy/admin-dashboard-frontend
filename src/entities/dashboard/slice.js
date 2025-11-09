import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getDashboardsThunk } from "./operations";

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

const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getDashboardsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dashboard = action.payload.data;
      })

      .addMatcher(
        isAnyOf(getDashboardsThunk.pending, (state) => {
          state.isLoading = true;
        })
      )
      .addMatcher(
        isAnyOf(getDashboardsThunk.rejected, (state) => {
          state.isLoading = false;
        })
      ),
});

export default dashboardSlice.reducer;
