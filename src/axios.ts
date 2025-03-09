import axios, { type AxiosInstance, type AxiosResponse, type AxiosError, type InternalAxiosRequestConfig } from 'axios';

interface ResponseData<T> {
  code?: number;
  message?: string;
  data: T;
}

const request: AxiosInstance = axios.create({
  // placeholder for the base URL
  baseURL: "",
  timeout: 10000,
});

request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  <T = any>(response: AxiosResponse<ResponseData<T> | any, any>) => {
    if (response.data.code && response.data.code !== 200) {
      // TODO: show toast
      return Promise.reject(response);
    }
    return response;
  },
  (error: AxiosError) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

export default request;
