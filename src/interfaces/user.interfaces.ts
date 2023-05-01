import { z } from "zod";
import { registerSchema } from "../schemas/registerSchema";
import { loginSchema } from "../schemas/loginSchema";
import {
  emailForResetSchema,
  resetPasswordFieldsSchema,
} from "../schemas/resetSchema";

export type iLoginUseForm = z.infer<typeof loginSchema>;
export interface iLogin {
  email: string;
  password: string;
}

export type iRegisterUseForm = z.infer<typeof registerSchema>;
export interface iRegister {
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

export type iEmailForReset = z.infer<typeof emailForResetSchema>;
export type iResetPassword = z.infer<typeof resetPasswordFieldsSchema>;
