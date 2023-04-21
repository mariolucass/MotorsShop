import axios from "axios";

const token = localStorage.getItem("tokenContactsApp");
const fipeURL = "https://kenzie-kars.herokuapp.com/cars";
const serverUrl = "https://back-end-full-stack-m6.vercel.app/";

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
