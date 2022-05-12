import { IApiResponse } from "@/src/types/api/common";
import { IApiCustomer, IApiStoreItem } from "@/src/types/api/customer";
import useSWR, { SWRConfiguration } from "swr";
import {
  GET_CUSTOMER_DETAIL,
  GET_CUSTOMER_LIST,
  GET_CUSTOMER_PRODUCT_DETAIL,
} from "../endpoints/customer";

export function useCustomerList(options?: SWRConfiguration) {
  const { data, error, ...rest } = useSWR<IApiResponse<IApiCustomer[]>>(
    GET_CUSTOMER_LIST,
    options
  );
  return {
    data: data,
    loading: !error && !data,
    error: error,
    ...rest,
  };
}

export function useCustomerDetail(
  customerId?: string,
  options?: SWRConfiguration
) {
  const { data, error, ...rest } = useSWR<IApiResponse<IApiCustomer>>(
    customerId ? GET_CUSTOMER_DETAIL(customerId) : null,
    options
  );
  return {
    data: data,
    loading: !error && !data,
    error: error,
    ...rest,
  };
}

export function useCustomerProductDetail(
  customerId?: string,
  productId?: string,
  options?: SWRConfiguration
) {
  const { data, error, ...rest } = useSWR<IApiResponse<IApiStoreItem>>(
    customerId && productId
      ? GET_CUSTOMER_PRODUCT_DETAIL(customerId, productId)
      : null,
    options
  );
  return {
    data: data,
    loading: !error && !data,
    error: error,
    ...rest,
  };
}
