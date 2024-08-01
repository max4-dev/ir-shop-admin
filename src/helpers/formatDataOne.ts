import { IData } from "../providers/types";

export const defaultDataValues = ["_id", "__v", "createdAt", "updatedAt", "slug"];

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
