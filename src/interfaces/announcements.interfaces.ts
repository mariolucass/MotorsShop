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
  title: string;
  img: string;
  description: string;
  price: number;
  mileage: number;
  manufacturing_year: number;

  user: {
    img: string;
    name: string;
  };
}

export interface IPropsProductCard {
  element: IProduct;
  isProfile?: boolean;
}
