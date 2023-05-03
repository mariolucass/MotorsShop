import { z } from "zod";
/* import { imageSchema } from "./imageSchema"; */

export const updateUserSchema = z.object({
  name: z.string().nonempty("Usuário obrigatório"),
  email: z.string().nonempty("Email obrigatório"),
  cpf: z.string().nonempty("CPF obrigatório"),
  phone: z.string().nonempty("Celular obrigatório"),
  birthdate: z.string().nonempty("Data de nascimento obrigatória"),
  description: z.string(),
  role: z.enum(["BUYER", "SELLER"]),
  /* password: z.string().nonempty("Senha obrigatória"),
  confirm_password: z.string().nonempty("Confirmação de senha obrigatória"), 
  image: imageSchema,*/
});
