import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const createAnnouncementSchema = z.object({
  mileage: z.string().nonempty(),
  color: z.string().nonempty(),
  price: z.string().nonempty(),
  description: z.string().nonempty(),
  imagemCapa: z
    .instanceof(FileList)
    .transform((list) => list.item(0))
    .refine(async (file) => (await file!.size) <= MAX_FILE_SIZE)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file!.type)),
});
