import { z } from "zod";
import { createAnnouncementSchema } from "../schemas/announcementSchema";

export type iCreateAnnouncement = z.infer<typeof createAnnouncementSchema>;

export interface iModelApi {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: 1 | 2 | 3;
  value: number;
}

export interface iImage {
  id: string;
  name: string;
  size: number;
  url: string;
  key: string;
}

export interface iUpload extends iImage {
  image?: Blob;
  readableSize: string;
  preview: string;
  progress: number;
  uploaded: boolean;
  error: boolean;
}

export interface iProduct {
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
  listImage: iImage[];

  user: {
    img: string;
    name: string;
  };
}

export interface iPropsProductCard {
  element: iProduct;
  isProfile?: boolean;
  onClick: () => void;
}
