import { DataProvider } from "react-admin";
import axiosInstance from "../core/axios";
import { API_URL } from "../components/shared/api/const/ApiUrl";

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { data } = await axiosInstance.get(`${API_URL}/${resource}`);
    console.log(data);

    return { data, total: data.length ?? 0 };
  },
};
