import { AuthProvider } from "react-admin";
import { sign } from "../components/shared/handler";
import { AuthType } from "../redux/auth/types";
import {
  getAccessToken,
  removeTokenStorage,
} from "../components/shared/api/lib/interceptor/AuthHelper";

export const authProvider: AuthProvider = {
  login: async (data) => {
    const response = await sign(AuthType.LOGIN, data);
    return response.data;
  },
  logout: () => {
    removeTokenStorage();
    return Promise.resolve();
  },
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403 || status === 405) {
      removeTokenStorage();
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return getAccessToken() ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};
