import { createSlice } from "@reduxjs/toolkit";

import { ICategoryInitialState } from "./types";
import { getGategories } from "./asyncActions";

const initialState: ICategoryInitialState = {
  categories: null,
  isLoading: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getGategories.rejected, (state) => {
        state.isLoading = false;
        state.categories = null;
      });
  },
});

export default categorySlice.reducer;
