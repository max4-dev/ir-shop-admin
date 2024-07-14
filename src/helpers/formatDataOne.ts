import { IData } from "../providers/types";

export const defaultDataValues = ["_id", "__v", "createdAt", "updatedAt", "slug"];

// export const formatDataOne = (obj: IData, ...params: string[]) => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const { _id, id, __v, createdAt, updatedAt, slug, priceWithSale, ...formattedObj } = obj;

//   return formattedObj;
// };

export const formatDataOne = (obj: IData | unknown, ...params: string[]) => {
  if (typeof obj !== "object" || obj === null) {
    return {};
  }

  const item = { ...(obj as IData) };
  Object.keys(obj).forEach((key) => {
    if (params.includes(key)) {
      delete item[key as keyof IData];
    }
  });

  return item;
};
