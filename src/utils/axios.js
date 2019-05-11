import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const token = localStorage.getItem("token");
const { LOCAL_BASE_API } = process.env;
export default axios.create({
  baseURL: LOCAL_BASE_API,
  headers: {
    Authorization: `Bearer ${token}`
  }
});
