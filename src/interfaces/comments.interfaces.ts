import { z } from "zod";
import { createCommentSchema } from "../schemas";
import { iUser } from "./user.interfaces";

export type iCommentRequest = z.infer<typeof createCommentSchema>;

export interface iComment {
  id: string;
  comment: string;
  created_at: string;
  user: iUser;
}
