import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { deleteProductThunk, getProductsThunk } from "./operations";

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
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);

        state.products.products.filter((item) => item._id !== action.payload);
      })
      .addMatcher(
        isAnyOf(
          getProductsThunk.pending,
          deleteProductThunk.pending,
          (state) => {
            state.isLoading = true;
          }
        )
      )
      .addMatcher(
        isAnyOf(
          getProductsThunk.rejected,
          deleteProductThunk.rejected,
          (state) => {
            state.isLoading = false;
          }
        )
      ),
});

export default productsSlice.reducer;
