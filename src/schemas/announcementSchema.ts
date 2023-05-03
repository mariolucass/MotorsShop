import { z } from "zod";
import { imageSchema } from "./imageSchema";

export const createAnnouncementSchema = z.object({
  mileage: z.string().nonempty(),
  color: z.string().nonempty(),
  price: z.string().nonempty(),
  description: z.string().nonempty(),
  imageCover: imageSchema,
  images: z.array(imageSchema),
});
