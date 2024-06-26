import { API_URL } from "../../../shared/api/const/ApiUrl";

export const categoryApi = {
  getAll: `${API_URL}/category`,
  byId: (id: string) => `${API_URL}/category/${id}`,
  bySlug: (slug: string) => `${API_URL}/category/by-slug/${slug}`,
};
