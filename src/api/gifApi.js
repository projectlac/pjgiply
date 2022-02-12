import axiosClient from "./axiosClient";
const api_key = process.env.REACT_APP_API_KEY;
const gifApi = {
  treding() {

    return axiosClient.get(`/gifs/trending?api_key=${api_key}&limit=30`);
  },
  autocomple(input) {
    return axiosClient.get(`/gifs/search/tags?api_key=${api_key}&q=${input}&limit=30`);
  },
  search(input) {
    return axiosClient.get(`/gifs/search?api_key=${api_key}&q=${input}&limit=30`);
  },
  getImgById(input) {
    return axiosClient.get(`/gifs?api_key=${api_key}&ids=${input}`)
  }
};
export default gifApi;
