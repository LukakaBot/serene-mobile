import type { HttpResponse, HttpTask } from "luch-request"

export interface ServiceResponse<T = any> {
  code: number;
  message: string;
  data: T;
};