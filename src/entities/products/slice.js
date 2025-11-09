import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addProductThunk,
  deleteProductThunk,
  getProductsThunk,
  updateProductThunk,
} from "./operations";

const initialState = {
  products: {
    products: [],
    total: 0,
    totalPages: 0,
  },
  isLoading: false,
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.data;
      })
      .addCase(addProductThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateProductThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.products = state.products.products.filter(
          (item) => item._id !== action.payload.data
        );
        state.products.total -= 1;
      })
      .addMatcher(
        isAnyOf(
          getProductsThunk.pending,
          deleteProductThunk.pending,
          addProductThunk.pending,
          updateProductThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getProductsThunk.rejected,
          deleteProductThunk.rejected,
          addProductThunk.rejected,
          updateProductThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      ),
});

export default productsSlice.reducer;
