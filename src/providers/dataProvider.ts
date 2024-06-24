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

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { data } = await axiosInstance.get(`${API_URL}/${resource}`);

    return { data, total: data.length ?? 0 };
  },
  getOne: async (resource, params) => {
    const { data } = await axiosInstance.get(`${API_URL}/${resource}/${params.id}`);

    return { data, total: data.length ?? 0 };
  },
  getMany: async (resource, params) => {
    const { data } = await axiosInstance.get(`${API_URL}/${resource}`);

    const items = params.ids
      .map((id) => {
        const foundItem = data.find((item: IData) => id === item.id);

        if (!foundItem) return null;

        return { ...foundItem };
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
    const { data } = await axiosInstance.delete(`${API_URL}/${resource}/${params.id}`);

    return { data, total: data.length ?? 0 };
  },
  deleteMany: (resource, params) => {
    console.log(resource, params);
  },
};
