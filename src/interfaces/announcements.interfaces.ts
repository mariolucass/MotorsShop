import { z } from "zod";
import { createAnnouncementSchema } from "../schemas/announcementSchema";

export type iCreateAnnouncement = z.infer<typeof createAnnouncementSchema>;

export interface IModelApi {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: 1 | 2 | 3;
  value: number;
}

export interface IImageRequest {
  image: string;
}

export interface IAnnouncementRequest {
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
  listImage: Array<IImageRequest>;

  user: {
    img: string;
    name: string;
  };
}

export interface IPropsProductCard {
  element: IAnnouncementRequest;
  isProfile?: boolean;
  onClick: () => void;
}
