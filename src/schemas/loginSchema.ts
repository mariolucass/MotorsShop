import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email inválido").nonempty("Email obrigatório"),
  password: z.string().nonempty("Senha obrigatória"),
});
