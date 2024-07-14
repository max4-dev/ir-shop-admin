import { DataProvider, SORT_DESC } from "react-admin";

import axiosInstance from "../core/axios";
import { API_URL } from "../components/shared/api/const/ApiUrl";
import { defaultDataValues, formatDataOne } from "../helpers/formatDataOne";
import { sliceProducts } from "../helpers/sliceProduct";
import {
  filterProductsByCategories,
  filterProductsByTitle,
  sortProducts,
} from "../components/entities/product/model";

import { IData, LIST_ENUM } from "./types";

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { data } = await axiosInstance.get(`${API_URL}/${resource}`);

    let response = data;

    if (resource !== LIST_ENUM.PRODUCTS) {
      return { data: response, total: data.length ?? 0 };
    }

    response = filterProductsByTitle({ products: response, title: params.filter.title });

    response = filterProductsByCategories({
      products: response,
      category: params.filter.category,
    });

    response = sortProducts({ products: response, sort: params.sort });

    if (params.sort.order && params.sort.order === SORT_DESC) {
      response = response.reverse();
    }

    const pages = response.length;

    response = sliceProducts({
      products: response,
      page: params.pagination.page,
      perPage: params.pagination.perPage,
    });

    return { data: response, total: pages ?? 0 };
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
    const { data } = await axiosInstance.post(`${API_URL}/${resource}`, params.data);

    return { data };
  },
  update: async (resource, params) => {
    const formatDataRequest = formatDataOne(
      params.data as IData,
      "priceWithSale",
      ...defaultDataValues
    );
    console.log(params);

    const { data } = await axiosInstance.put(
      `${API_URL}/${resource}/${params.id}`,
      formatDataRequest
    );

    return { data };
  },
  updateMany: (resource, params) => {
    console.log(resource, params);
  },
  delete: async (resource, params) => {
    const { data } = await axiosInstance.delete(`${API_URL}/${resource}/${params.id}`);

    return { data, total: data.length ?? 0 };
  },
  deleteMany: async (resource, params) => {
    const { data } = await axiosInstance.delete(`${API_URL}/${resource}/delete-many/`, {
      data: { ids: params.ids },
    });

    return { data: data.products };
  },
};
