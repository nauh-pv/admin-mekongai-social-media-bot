import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import store from "@/shared/redux/store";
import {
  clearAccessToken,
  setAccessToken,
  setUser,
} from "@/shared/redux/authSlice";
import { jwtDecode } from "jwt-decode";

interface decodedUser {
  username: string;
  user_id: number;
  user_email: string;
  partner_id: number;
  role: string;
}

interface UserState {
  username: string;
  userId: number;
  userEmail: string;
  partnerId: number;
  role: string;
}
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://social-media-bot.mekongai.com/",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue: Array<any> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const { accessToken } = store.getState().auth;

    // Thêm Access Token vào headers của request nếu có
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log("Vào lỗi resquest");
    if (error.response?.status === 401 && !originalRequest._retry) {
      console.log("Vào lỗi 401");

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
            }
            return axiosInstance(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axiosInstance.post("/refresh_token", {
          withCredentials: true,
        });
        console.log("response when get refresh token", response);
        const newAccessToken = response.data.access_token;
        console.log("newAccessToken when get refresh token", newAccessToken);

        const decodedUser: decodedUser = jwtDecode<decodedUser>(newAccessToken);

        const userData: UserState = {
          username: decodedUser.username,
          userId: decodedUser.user_id,
          userEmail: decodedUser.user_email,
          partnerId: decodedUser.partner_id,
          role: decodedUser.role,
        };

        store.dispatch(setUser(userData));

        store.dispatch(setAccessToken(newAccessToken));

        processQueue(null, newAccessToken);

        if (originalRequest.headers) {
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        }

        return axiosInstance(originalRequest);
      } catch (err) {
        console.log("Lỗi khi làm mới token:", err);

        store.dispatch(clearAccessToken());
        localStorage.removeItem("accessToken");
        sessionStorage.removeItem("accessToken");
        processQueue(err, null);
        window.location.href = "/";
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
