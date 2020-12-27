import axios from "axios";

//http://localhost:5001/challenge-4e8a3/us-central1/api

const instance = axios.create({
  baseURL: "https://us-central1-challenge-4e8a3.cloudfunctions.net/api",
});

export default instance;
