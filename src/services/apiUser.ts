import { FieldValues } from "react-hook-form";
import { apiServerSide, localApiToken } from "./api";
import { iAnnouncement } from "./apiAnnouncement";

export interface iUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  role: "BUYER" | "SELLER";
  created_at: Date;
  address: {
    id: string;
    zip_code: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement?: string;
  };
  announcement: Array<iAnnouncement>;
}

export interface ipostUser {
  token: string;
}

export async function postUser(data: FieldValues): Promise<ipostUser> {
  const { data: response } = await localApiToken.post<ipostUser>("login", data);
  return response;
}

export async function postUserCreate(data: FieldValues): Promise<iUser> {
  const { data: response } = await localApiToken.post<iUser>("users", data);
  return response;
}

export async function patchUser(data: FieldValues, id: string): Promise<iUser> {
  const { data: response } = await localApiToken.patch<iUser>(`users/${id}`, data);
  return response;
}

export async function deleteUser(id: string): Promise<void> {
  await localApiToken.delete<iUser>(`users/${id}`);
}

export async function getUserProfile(token: string): Promise<iUser> {
  localApiToken.defaults.headers.authorization = `Bearer ${token}`;
  const { data: response } = await localApiToken.get<iUser>("users/profile");
  return response;
}
