import { FieldValues } from "react-hook-form";
import { iAnnouncement } from "../interfaces";
import { apiUsingNow, apiUsingNowWithToken } from "./api";

export async function postAnnouncement(
  data: FieldValues
): Promise<iAnnouncement> {
  const { data: response } = await apiUsingNow.post<iAnnouncement>(
    "announcements",
    data
  );
  return response;
}

export async function getAnnouncement(): Promise<iAnnouncement[]> {
  const { data: response } = await apiUsingNow.get<iAnnouncement[]>(
    "announcements"
  );
  return response;
}

export async function getAnnouncementWithQuery(
  brand: string
): Promise<iAnnouncement[]> {
  const { data: response } = await apiUsingNow.get<iAnnouncement[]>(
    "announcements",
    { params: { brand } }
  );
  return response;
}

export async function getAnnouncementById(id: string): Promise<iAnnouncement> {
  const { data: response } = await apiUsingNow.get<iAnnouncement>(
    `announcements/${id}`
  );

  return response;
}

export async function deleteAnnouncement(id: string) {
  await apiUsingNowWithToken.delete<iAnnouncement>(`announcements/${id}`);
}

export async function patchAnnouncement(id: string, data: any) {
  const { data: response } = await apiUsingNow.patch<iAnnouncement>(
    `announcements/${id}`,
    data
  );

  return response;
}

export async function getCountAnnouncements(): Promise<number> {
  const { data: response } = await apiUsingNow.get<number>(
    `announcements/count`
  );

  return response;
}
