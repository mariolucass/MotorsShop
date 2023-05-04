import { z } from "zod";

export const emailForResetSchema = z.object({
  email: z.string().email("Email inválido").nonempty("Email obrigatório"),
});

export const resetPasswordFieldsSchema = z
  .object({
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
