import { z } from "zod";
import { createAnnouncementSchema } from "../schemas/announcementSchema";
import { iImage, iListImage } from "./images.interfaces";
import { iUser } from "./user.interfaces";

export type iCreateAnnouncement = z.infer<typeof createAnnouncementSchema>;

export interface IModelApi {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: 1 | 2 | 3;
  value: number;
}

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
  cover: iImage;
  user: iUser;
  listImage: Array<iListImage>;
}

export interface iAnnouncementRequest {
  brand: string;
  model: string;
  manufacture_year: string;
  fuel: string;
  mileage: number;
  color: string;
  price_fipe: string;
  price: string;
  description: string;
  imageCover: File;
  images: File[];
}

export interface iAnnouncementResponse {
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

export interface iModelApi {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: 1 | 2 | 3;
  value: number;
}

export interface IPropsProductCard {
  element: iAnnouncement;
  isProfile?: boolean;
  onClick: () => void;
}
