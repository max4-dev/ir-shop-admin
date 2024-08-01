import { createAsyncThunk } from "@reduxjs/toolkit";

import { ordersRequest } from "../../components/entities/order/handler";

import { IOrder } from "./types";

export const getOrders = createAsyncThunk<IOrder[]>("order/getOrders", async (_, thunkApi) => {
  try {
    const response = await ordersRequest.getAll();

    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
