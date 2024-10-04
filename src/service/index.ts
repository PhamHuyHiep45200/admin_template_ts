import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: process.env.BASE_URL_API,
  headers: {
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  async function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    } else {
      delete config.headers.Authorization;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    if (err?.response?.status === 401) {
      window.location.assign('/sign-in')
    }
  }
);

const request = (url: string, options: AxiosRequestConfig) => {
  return instance.request({ ...options, url });
};
export default request;
