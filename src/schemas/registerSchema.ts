import { z } from "zod";
import { imageSchema } from "./imageSchema";

const addressSchema = z.object({
  zip_code: z.string().nonempty("CEP obrigatório"),
  state: z.string().nonempty("Estado obrigatório"),
  city: z.string().nonempty("Cidade obrigatória"),
  street: z.string().nonempty("Rua obrigatória"),
  number: z.string().nonempty("Numero de casa obrigatório"),
  complement: z.string().optional(),
});

export const registerSchema = z
  .object({
    name: z.string().nonempty("Usuário obrigatório"),
    email: z.string().nonempty("Email obrigatório"),
    cpf: z.string().nonempty("CPF obrigatório"),
    phone: z.string().nonempty("Celular obrigatório"),
    birthdate: z.string().nonempty("Data de nascimento obrigatória"),
    description: z.string(),
    role: z.enum(["BUYER", "SELLER"]),
    password: z.string().nonempty("Senha obrigatória"),
    confirm_password: z.string().nonempty("Confirmação de senha obrigatória"),
    address: addressSchema,
    image: imageSchema,
  })
  .refine((fields) => fields.password === fields.confirm_password, {
    path: ["confirm_password"],
    message: "As senhas precisam ser iguais",
  });
