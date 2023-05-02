import { FieldValues } from "react-hook-form";
import { apiUsingNow } from "./api";
import { iImage } from "../interfaces";

export async function postImageUser(
  data: FieldValues,
  id: string
): Promise<iImage> {
  const { data: response } = await apiUsingNow.post<iImage>(
    `images/user/${id}`,
    data
  );
  return response;
}

export async function postImageAnnouncement(
  data: FieldValues,
  id: string
): Promise<iImage> {
  const { data: response } = await apiUsingNow.post<iImage>(
    `images/announcement/${id}`,
    data
  );
  return response;
}

export async function postImageAnnouncementCover(
  data: FieldValues,
  id: string
): Promise<iImage> {
  const { data: response } = await apiUsingNow.post<iImage>(
    `images/announcement/${id}/cover`,
    data
  );
  return response;
}
