import Cookies from "js-cookie";

import { AuthType, IAuthResponse, ILogin, IUser, Tokens } from "../../../redux/auth/types";

import { saveToStorage } from "../api/lib/interceptor/AuthHelper";

import axios from "../../../core/axios";
import { API_URL } from "../api/const/ApiUrl";

export const getNewTokens = async () => {
  const refreshToken = Cookies.get(Tokens.REFRESH);

  const response = await axios.post<string, { data: IAuthResponse }>(
    `${API_URL}/auth/login/access-token`,
    {
      refreshToken,
    }
  );

  if (response.data.accessToken) {
    saveToStorage(response.data);
  }

  return response;
};

export const sign = async (type: AuthType.LOGIN, data: ILogin) => {
  const response = await axios.post<IAuthResponse>(`${API_URL}/auth/${type}`, data);

  if (response.data.accessToken) {
    saveToStorage(response.data);
  }

  return response;
};

export const profileRequest = async () => {
  const response = await axios.get<IUser>(`${API_URL}/users/profile`);

  return response;
};
