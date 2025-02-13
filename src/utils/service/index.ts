import type { HttpResponse } from 'luch-request';
import Request from 'luch-request';
import type { ServiceResponse } from './types';

const { VITE_SERVICE_URL, VITE_SERVICE_PORT, VITE_SERVICE_PREFIX } = import.meta.env;

const service = new Request({
  baseURL: `${VITE_SERVICE_URL}:${VITE_SERVICE_PORT}${VITE_SERVICE_PREFIX}`,
  timeout: 8 * 1000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: HttpResponse<ServiceResponse>): any => {
    const res = response.data;
    if (res.code !== 0) {
      return Promise.reject(res);
    }
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
