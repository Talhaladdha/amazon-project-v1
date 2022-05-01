import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/project-v1-c1a3c/us-central1/api", //The API URL (Cloud Function using NodeJs)
});

export default instance;