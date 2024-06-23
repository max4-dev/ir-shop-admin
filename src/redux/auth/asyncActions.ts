// import { createAsyncThunk } from "@reduxjs/toolkit";

// import { getNewTokens, sign } from "../../components/shared/handler";

// import { ISignup } from "../../components/features/auth/SignupForm/SignupForm.props";
// import { ILogin } from "../../components/features/auth/LoginForm/LoginForm.props";
// import { removeTokenStorage } from "../../components/shared/api/lib/interceptor/AuthHelper";

// import { AuthType, IAuthResponse, ILogin } from "./types";
// import { sign } from "../../components/shared/handler";

// export const login = createAsyncThunk<IAuthResponse, ILogin>(
//   "auth/login",
//   async (data, thunkApi) => {
//     try {
//       const response = await sign(AuthType.LOGIN, data);

//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error);
//     }
//   }
// );

// export const logout = createAsyncThunk("auth/logout", async () => {
//   removeTokenStorage();
// });
