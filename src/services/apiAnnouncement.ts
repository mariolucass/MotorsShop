import { FieldValues } from "react-hook-form";
import { apiServerSide, apiServerSideToken, localApi, localApiToken } from "./api";

export interface iAnnouncement {
  id: string;
  brand: string;
  model: string;
  manufacture_year: string;
  fuel: string;
  mileage: number;
  color: string;
  price_fipe: string;
  price: string;
  description: string;
}

export async function postAnnouncement(
  data: FieldValues
): Promise<iAnnouncement> {
  const { data: response } = await localApiToken.post<iAnnouncement>(
    "announcements",
    data
  );
  return response;
}

export async function getAnnouncement(): Promise<iAnnouncement[]> {
  const { data: response } = await localApi.get<iAnnouncement[]>(
    "announcements"
  );
  return response;
}
