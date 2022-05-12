import { API_PREFIX } from "@/src/constants/api";

export const GET_CUSTOMER_LIST = `${API_PREFIX}/v1/customer`;
export const GET_CUSTOMER_DETAIL = (id: string) =>
  `${API_PREFIX}/v1/customer/${id}`;

export const GET_CUSTOMER_PRODUCT_DETAIL = (id: string, productId: string) =>
  `${API_PREFIX}/v1/customer/${id}/product/${productId}`;
