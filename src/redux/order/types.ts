import { IProduct } from "../../components/entities/product/types";
import { IData } from "../../providers/types";
import { IUser } from "../auth/types";

interface IAddress {
  value: string;
}

export interface IOrder extends IData {
  id: string;
  status: string;
  price: number;
  count: number;
  address: IAddress;
  products: IProduct[];
  user: IUser;
}

export interface IOrderInitialState {
  orders: IOrder[] | null;
  isLoading: boolean;
}
