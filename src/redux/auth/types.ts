import { IOrder } from "../order/types";

export enum Tokens {
  ACCESS = "accessToken",
  REFRESH = "refreshToken",
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export type IUser = {
  id: string;
  name: string;
  phone: string;
  role: string;
  orders: IOrder[];
} | null;

export interface IAuthResponse extends ITokens {
  user: IUser;
}

export interface WithPayload<T> {
  payload: T;
}

export interface IAuthInitialState {
  user: IUser;
  isLoading: boolean;
}

export enum AuthType {
  LOGIN = "login",
}

export interface ILogin {
  phone: string;
  password: string;
}
