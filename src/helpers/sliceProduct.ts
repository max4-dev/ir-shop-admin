import { IProduct } from "../components/entities/product/types";

export const sliceProducts = ({
  products,
  page,
  perPage,
}: {
  products: IProduct[];
  page: number;
  perPage: number;
}) => {
  return products.slice(page * perPage - perPage, page * perPage - 1);
};
