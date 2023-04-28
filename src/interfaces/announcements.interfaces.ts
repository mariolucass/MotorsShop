import { z } from "zod";
import { createAnnouncementSchema } from "../schemas/announcementSchema";

export type ICreateAnnouncement = z.infer<typeof createAnnouncementSchema>;

export interface IModelApi {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: 1 | 2 | 3;
  value: number;
}

export interface IProduct {
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
  listImage: Array<string>;

  user: {
    img: string;
    name: string;
  };
}

export interface IPropsProductCard {
  element: IProduct;
  isProfile?: boolean;
  onClick: () => void;
}
