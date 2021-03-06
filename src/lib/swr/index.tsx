import axios from "../axios";

function fetcher<T>(url: string) {
  return axios.get<T>(url).then((res) => res.data);
}

export default fetcher;
