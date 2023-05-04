import { FieldValues } from "react-hook-form";
import { apiUsingNow } from "./api";
import { iAnnouncement } from "../interfaces";

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
