import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getUserInfoThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
} from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  accessToken: null,
  isLoading: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data.user;
        state.accessToken = action.payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.accessToken = action.payload.data.accessToken;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(getUserInfoThunk.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
      })
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          refreshThunk.pending,
          logoutThunk.pending,
          getUserInfoThunk.pending,
          (state) => {
            state.isLoading = true;
          }
        )
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          refreshThunk.rejected,
          logoutThunk.rejected,
          getUserInfoThunk.rejected,
          (state) => {
            state.isLoading = false;
          }
        )
      ),
});

export default authSlice.reducer;
