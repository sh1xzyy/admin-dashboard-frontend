import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addSupplierThunk,
  getSuppliersThunk,
  updateSupplierThunk,
} from "./operations";

const initialState = {
  suppliers: {
    suppliers: [],
    total: 0,
    totalPages: 0,
  },
  isLoading: false,
};

const suppliersSlice = createSlice({
  name: "suppliersSlice",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getSuppliersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.suppliers = action.payload.data;
      })
      .addCase(addSupplierThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateSupplierThunk.fulfilled, (state) => {
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(
          getSuppliersThunk.pending,
          addSupplierThunk.pending,
          updateSupplierThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getSuppliersThunk.rejected,
          addSupplierThunk.rejected,
          updateSupplierThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      ),
});

export default suppliersSlice.reducer;
