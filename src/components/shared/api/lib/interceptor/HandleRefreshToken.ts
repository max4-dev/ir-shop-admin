import axios from "axios";

import { ITokens } from "../../../../../redux/auth/types";
import { API_URL } from "../../const/ApiUrl";

export const handleRefreshToken = async (
  oldRefreshToken: string | null
): Promise<[string, string]> => {
  if (!oldRefreshToken) {
    throw new Error("refreshToken does not exist");
  }

  try {
    const {
      data: { accessToken, refreshToken },
    }: { data: ITokens } = await axios.post(`${API_URL}/auth/login/access-token`, {
      refreshToken: oldRefreshToken,
    });

    return [accessToken, refreshToken];
  } catch (error) {
    throw new Error(
      `Произошла ошибка при обновлении accessToken и refreshToken - ${error}, токены не обновлены`
    );
  }
};
