import axios from "axios";
import Cookies from "js-cookie";

const axiosApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_ADMIN_API_URL}`,
});

axiosApi.interceptors.request.use(
  (config) => {
    let localToken = Cookies.get("access_token") || "";
    let token = `Bearer ${localToken}`;
    if (localToken) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if(error.response && error.response.status === 404){
      return Promise.reject(error);
    }
    if (error.response && error.response.status === 401) {
        const errorResponse = error.response.data.message;
        throw new Error(errorResponse);
    }

    return Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  try {
    const response = await axiosApi.post("/api/v1/auth/refresh-token", {});

    const newToken = response.data.token;

    return newToken;
  } catch (error) {
    throw error;
  }
};

export default axiosApi;