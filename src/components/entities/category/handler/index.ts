import { categoryApi } from "../api";
import axios from "../../../../core/axios";
import { ICategory } from "../../../../redux/category/types";

const getAll = async () => {
  const res = await axios.get<ICategory[]>(categoryApi.getAll);
  return res.data;
};

export const categoriesRequest = {
  getAll,
};
