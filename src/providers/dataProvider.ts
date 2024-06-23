import { DataProvider } from "react-admin";
import axiosInstance from "../core/axios";
import { API_URL } from "../components/shared/api/const/ApiUrl";

interface IData {
  _id: string;
  id: string;
  __v: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

const formatDataArray = (data: IData[]) => {
  return data.map((item: IData) => {
    const { _id, __v, createdAt, updatedAt, slug, ...formattedItem } = item;

    return formattedItem;
  });
};

const formatDataOne = (obj: IData) => {
  const { _id, __v, createdAt, updatedAt, slug, ...formattedObj } = obj;

  return formattedObj;
};

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { data } = await axiosInstance.get(`${API_URL}/${resource}`);

    const formattedData = formatDataArray(data);
    console.log(formattedData);

    return { data: formattedData, total: data.length ?? 0 };
  },
  getOne: async (resource, params) => {
    const { data } = await axiosInstance.get(`${API_URL}/${resource}/${params.id}`);

    const [formattedData] = formatDataArray([data]);

    return { data: formattedData, total: data.length ?? 0 };
  },
  getMany: async (resource, params) => {
    const { data } = await axiosInstance.get(`${API_URL}/${resource}`);

    const items = params.ids
      .map((id) => {
        const foundItem = data.find((item: IData) => id === item.id);

        if (!foundItem) return null;

        const formattedItem = formatDataOne(foundItem);
        return { ...formattedItem };
      })
      .filter((item) => item !== null);

    return { data: items, total: data.length ?? 0 };
  },
  getManyReference: (resource, params) => {
    console.log(resource, params);
  },
  create: async (resource, params) => {
    console.log(resource, params);
    // const { data } = await axiosInstance.delete(`${API_URL}/${resource}}`);
  },
  update: async (resource, params) => {
    const { data } = await axiosInstance.put(`${API_URL}/${resource}/${params.id}`, params.data);

    return { data, total: data.length ?? 0 };
  },
  updateMany: (resource, params) => {
    console.log(resource, params);
  },
  delete: async (resource, params) => {
    console.log(resource, params);
    const { data } = await axiosInstance.delete(`${API_URL}/${resource}/${params.id}`);

    return { data, total: data.length ?? 0 };
  },
  deleteMany: (resource, params) => {
    console.log(resource, params);
  },
};
