import { z } from "zod";
import { imageSchema } from "./imageSchema";

export const createAnnouncementSchema = z.object({
  mileage: z.string().nonempty(),
  manufacture_year: z.string().nonempty(),
  fuel: z.string().nonempty(),
  color: z.string().nonempty(),
  price: z.string().nonempty(),
  price_fipe: z.string().nonempty(),
  description: z.string().nonempty(),
  imageCover: imageSchema,
  images: z.array(imageSchema),
});

export const createAnnouncementSchema2 = z.object({
  brand: z.string(),
  model: z.string(),
  manufacture_year: z.string(),
  fuel: z.string(),
  mileage: z.number(),
  color: z.string(),
  price_fipe: z.string(),
  price: z.string(),
  description: z.string(),

  imageCover: imageSchema,
  images: z.array(imageSchema),
});

export const editAnnouncementSchema = createAnnouncementSchema
  .partial()
  .strip();

export const returnAnnouncementSchema = z.object({});
