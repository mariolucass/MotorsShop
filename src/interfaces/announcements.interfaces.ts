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
