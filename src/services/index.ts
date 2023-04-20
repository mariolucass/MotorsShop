import axios from "axios";

const token = localStorage.getItem("tokenContactsApp");
const fipeURL = "https://kenzie-kars.herokuapp.com/cars";
const serverUrl = "http://127.0.0.1:8000/";

export const apiFipe = axios.create({
  baseURL: fipeURL,
  timeout: 5000,
});

export const apiServerSide = axios.create({
  baseURL: serverUrl,
  timeout: 5000,
});

export const apiServerSideToken = axios.create({
  baseURL: serverUrl,
  timeout: 5000,
  headers: { Authorization: `Bearer ${token}` },
});
