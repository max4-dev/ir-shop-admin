import { createSlice } from "@reduxjs/toolkit";

import { IAuthInitialState } from "./types";
import { login, logout } from "./asyncActions";
import { getStoreLocal } from "../../helpers/getStoreLocal";

const initialState: IAuthInitialState = {
  user: getStoreLocal("user"),
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
    //   .addCase(login.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(login.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.user = action.payload.user;
    //   })
    //   .addCase(login.rejected, (state) => {
    //     state.isLoading = false;
    //     state.user = null;
    //   });
    // builder.addCase(logout.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.user = null;
    // });
  },
});

export default authSlice.reducer;
