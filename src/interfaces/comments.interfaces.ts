import { z } from "zod";
import { createCommentSchema } from "../schemas";

export type IComment = z.infer<typeof createCommentSchema>;
