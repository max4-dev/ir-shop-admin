import { createSlice } from "@reduxjs/toolkit";

import { IOrderInitialState } from "./types";
import { getOrders } from "./asyncActions";

const initialState: IOrderInitialState = {
  orders: null,
  isLoading: false,
};

export const categorySlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(getOrders.rejected, (state) => {
        state.isLoading = false;
        state.orders = null;
      });
  },
});

export default categorySlice.reducer;
