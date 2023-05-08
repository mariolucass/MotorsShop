import axios from "axios";

const token = localStorage.getItem("@MotorsShop:token");

const fipeURL = "https://kenzie-kars.herokuapp.com/cars";
const serverUrl = "https://back-end-g30-t13-m6.vercel.app/";
const localServer = "http://127.0.0.1:4002/";

export const apiFipe = axios.create({
  baseURL: fipeURL,
  timeout: 5000,
});

export const localApi = axios.create({
  baseURL: localServer,
  timeout: 5000,
});

export const localApiToken = axios.create({
  baseURL: localServer,
  timeout: 5000,
  headers: { Authorization: `Bearer ${token}` },
});

export const apiServerSide = axios.create({
  baseURL: serverUrl,
  timeout: 10000,
});

export const apiServerSideToken = axios.create({
  baseURL: serverUrl,
  timeout: 10000,
  headers: { Authorization: `Bearer ${token}` },
});

export const apiUsingNow = apiServerSide;
export const apiUsingNowWithToken = apiServerSideToken;
