import Axios from "axios";

export const API = Axios.create({
  baseURL: 'http://192.168.0.104:3333',
  headers: {
    "Content-Type": "application/json",
  },
});
