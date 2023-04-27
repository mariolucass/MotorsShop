import { z } from "zod";

export const createAnnouncementSchema = z.object({
  mileage: z.string().nonempty(),
  color: z.string().nonempty(),
  price: z.string().nonempty(),
  description: z.string().nonempty(),
});
