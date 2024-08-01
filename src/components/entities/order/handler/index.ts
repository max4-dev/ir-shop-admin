import { orderApi } from "../api";
import axios from "../../../../core/axios";
import { IOrder } from "../../../../redux/order/types";

const getAll = async () => {
  const res = await axios.get<IOrder[]>(orderApi.getAll);
  return res.data;
};

export const ordersRequest = {
  getAll,
};
