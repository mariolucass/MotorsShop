import { z } from "zod";
import { registerSchema } from "../schemas/registerSchema";
import { loginSchema } from "../schemas/loginSchema";
import {
  emailForResetSchema,
  resetPasswordFieldsSchema,
} from "../schemas/resetSchema";

export type ILoginUseForm = z.infer<typeof loginSchema>;
export interface ILogin {
  email: string;
  password: string;
}

export type IRegisterUseForm = z.infer<typeof registerSchema>;
export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  role: "BUYER" | "SELLER";
  address: {
    zip_code: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement?: string;
  };
}

export type IEmailForReset = z.infer<typeof emailForResetSchema>;
export type IResetPassword = z.infer<typeof resetPasswordFieldsSchema>;
