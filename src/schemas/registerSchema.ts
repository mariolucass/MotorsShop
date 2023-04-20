import { z } from "zod"

export const registerSchema = z.object({
    name: z.string().nonempty("Usuário obrigatório"),
    email: z.string().nonempty("Email obrigatório"),
    cpf: z.string().nonempty("CPF obrigatório"),
    celular: z.string().nonempty("Celular obrigatório"),
    birthday: z.string().nonempty("Data de nascimento obrigatória"),
    description: z.string(),
    cep: z.string().nonempty("CEP obrigatório"),
    state: z.string().nonempty("Estado obrigatório"),
    city: z.string().nonempty("Cidade obrigatória"),
    street: z.string().nonempty("Rua obrigatória"),
    number: z.string().nonempty("Numero de casa obrigatório"),
    complement: z.string().nonempty("Complemento obrigatório"),
    type_account: z.string(),
    password: z.string().nonempty("Senha obrigatória"),
    confirm_password: z.string().nonempty("Confirmação de senha obrigatória"),
})