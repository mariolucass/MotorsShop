import { FieldValues } from "react-hook-form";
import { apiUsingNow } from "./api";
import { iAnnouncementResponse } from "../interfaces";

export async function postAnnouncement(
  data: FieldValues
): Promise<iAnnouncementResponse> {
  const { data: response } = await apiUsingNow.post<iAnnouncementResponse>(
    "announcements",
    data
  );
  return response;
}

export async function getAnnouncement(): Promise<iAnnouncementResponse[]> {
  const { data: response } = await apiUsingNow.get<iAnnouncementResponse[]>(
    "announcements"
  );
  return response;
}

export async function getAnnouncementWithQuery(
  brand: string
): Promise<iAnnouncementResponse[]> {
  const { data: response } = await apiUsingNow.get<iAnnouncementResponse[]>(
    "announcements",
    { params: { brand } }
  );
  return response;
}
