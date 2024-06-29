import { createAsyncThunk } from "@reduxjs/toolkit";

import { categoriesRequest } from "../../components/entities/category/handler";

import { ICategory } from "./types";

export const getGategories = createAsyncThunk<ICategory[]>(
  "category/getGategories",
  async (_, thunkApi) => {
    try {
      const response = await categoriesRequest.getAll();

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
