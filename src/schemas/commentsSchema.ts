import { z } from "zod";

export const createCommentSchema = z.object({
  comment: z
    .string({
      required_error:
        "É necessário escrever uma mensagem para fazer o comentário",
    })
    .min(1, "É necessário escrever uma mensagem para fazer o comentário"),
});
