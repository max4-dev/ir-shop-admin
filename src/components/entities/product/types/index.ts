import { IData } from "../../../../providers/types";

enum ORDER_ENUM {
  ASC = "ASC",
  DESC = "DESC",
}

type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

export interface IProduct extends IData {
  title: string;
  salePercent: Range<0, 101>;
  slug: string;
  description?: string;
  images: string[];
  categories?: string[];
  price: number;
  inStock: boolean;
  rating: number;
  priceWithSale: number;
}

export interface ISort {
  field: string;
  order: ORDER_ENUM;
}

export enum SORT_ACTIONS {
  id = "id",
  title = "title",
  salePercent = "salePercent",
  slug = "slug",
  description = "description",
  images = "images",
  categories = "categories",
  price = "price",
  inStock = "inStock",
  rating = "rating",
  priceWithSale = "priceWithSale",
}
