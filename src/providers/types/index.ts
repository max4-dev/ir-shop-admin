export interface IData {
  _id: string;
  id: string;
  __v: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  priceWithSale?: number;
}

export enum LIST_ENUM {
  PRODUCTS = "products",
}
