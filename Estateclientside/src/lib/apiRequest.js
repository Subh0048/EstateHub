import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://estatehub-i69n.onrender.com",
  // withCredentials: true,
});

export default apiRequest;
