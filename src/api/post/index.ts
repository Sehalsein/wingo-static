import useSWR, { SWRConfiguration } from "swr";
import { IApiPost } from "../../../pages/api/posts";

export function usePostList(options?: SWRConfiguration) {
  const { data, error } = useSWR<IApiPost[]>("/posts", options);
  return {
    data: data,
    loading: !error && !data,
    error: error,
  };
}

export function usePostDetail(
  id: string | string[] | undefined,
  options?: SWRConfiguration
) {
  const { data, error } = useSWR<IApiPost>(
    id ? `/posts/${id.toString()}` : id,
    options
  );
  return {
    data: data,
    loading: !error && !data,
    error: error,
  };
}
