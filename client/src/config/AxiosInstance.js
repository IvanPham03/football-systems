import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000,
  headers: {},
  withCredentials: true
});
export default instance;
