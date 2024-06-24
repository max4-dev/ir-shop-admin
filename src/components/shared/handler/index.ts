import Cookies from "js-cookie";

import { AuthType, IAuthResponse, ILogin, IUser, Tokens } from "../../../redux/auth/types";
import { API_URL } from "../api/const/ApiUrl";
import { saveToStorage } from "../api/lib/interceptor/AuthHelper";
import axios from "../../../core/axios";

import { Roles } from "./types";

export const getNewTokens = async () => {
  const refreshToken = Cookies.get(Tokens.REFRESH);

  const response = await axios.post<string, { data: IAuthResponse }>(
    `${API_URL}/auth/login/access-token`,
    {
      refreshToken,
    }
  );

  if (response.data.user && response.data.user.role !== Roles.ADMIN) {
    throw new Error("Доступ закрыт");
  }

  if (response.data.accessToken) {
    saveToStorage(response.data);
  }

  return response;
};

export const sign = async (type: AuthType.LOGIN, data: ILogin) => {
  const response = await axios.post<IAuthResponse>(`${API_URL}/auth/${type}`, data);

  if (response.data.user && response.data.user.role !== Roles.ADMIN) {
    throw new Error("Доступ закрыт");
  }

  if (response.data.accessToken) {
    saveToStorage(response.data);
  }

  return response;
};

export const profileRequest = async () => {
  const response = await axios.get<IUser>(`${API_URL}/users/profile`);

  return response;
};

export const checkIsAdmin = async () => {
  const response = await axios.get<string>(`${API_URL}/users/role`);

  return response.data === Roles.ADMIN;
};
