import axios from "axios";

import { axiosInterceptor } from "../components/shared/api";
import {
  getAccessToken,
  getIsRefreshSent,
  getRefreshToken,
  removeTokenStorage,
  saveTokenStorage,
} from "../components/shared/api/lib/interceptor/AuthHelper";

const axiosInstance = axios.create();

axiosInterceptor({
  axiosInstance,
  getAccessToken,
  getRefreshToken,
  saveTokenStorage,
  removeTokenStorage,
  getIsRefreshSent,
});

export default axiosInstance;
