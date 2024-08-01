import { API_URL } from "../../../shared/api/const/ApiUrl";

export const orderApi = {
  getAll: `${API_URL}/order`,
  byId: (id: string) => `${API_URL}/order/${id}`,
};
