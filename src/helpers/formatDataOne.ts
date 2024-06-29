import { IData } from "../providers/types";

export const formatDataOne = (obj: IData) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _id, id, __v, createdAt, updatedAt, slug, priceWithSale, ...formattedObj } = obj;

  return formattedObj;
};
