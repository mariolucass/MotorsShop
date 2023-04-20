import { z } from "zod"

export const loginSchema = z.object({
    name: z.string().nonempty("Usuário obrigatório"),
    password: z.string().nonempty("Senha obrigatória")
})