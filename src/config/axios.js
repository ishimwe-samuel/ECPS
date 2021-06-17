import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export default instance;
