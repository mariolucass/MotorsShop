import { iUser } from "../interfaces";
import { FieldValues } from "react-hook-form";
import { apiUsingNow, apiUsingNowWithToken } from "./api";

export interface ipostUser {
  token: string;
}

export async function postUser(data: FieldValues): Promise<ipostUser> {
  const { data: response } = await apiUsingNow.post<ipostUser>("login", data);
  return response;
}

export async function postUserCreate(data: FieldValues): Promise<iUser> {
  const { data: response } = await apiUsingNow.post<iUser>("users", data);
  return response;
}

export async function patchUser(data: FieldValues, id: string): Promise<iUser> {
  const { data: response } = await apiUsingNowWithToken.patch<iUser>(
    `users/${id}`,
    data
  );
  return response;
}

export async function deleteUser(id: string): Promise<void> {
  await apiUsingNowWithToken.delete<iUser>(`users/${id}`);
}

export async function getUserProfile(token: string): Promise<iUser> {
  apiUsingNow.defaults.headers.authorization = `Bearer ${token}`;

  const { data: response } = await apiUsingNow.get<iUser>("users/profile");
  return response;
}

export async function getUserById(id: string): Promise<iUser> {
  const { data: response } = await apiUsingNow.get(`users/${id}`);
  return response;
}
