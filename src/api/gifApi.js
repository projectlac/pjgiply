
import { api_key } from "../constant";
import axiosClient from "./axiosClient";

const gifApi = {
  treding() {

    return axiosClient.get(`/trending?api_key=${api_key}&limit=30`);
  },
  autocomple(input) {
    return axiosClient.get(`/search/tags?api_key=${api_key}&q=${input}&limit=30`);
  },
  search(input) {
    return axiosClient.get(`/search?api_key=${api_key}&q=${input}&limit=30`);
  }
};
export default gifApi;
