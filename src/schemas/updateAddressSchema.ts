import { z } from "zod";

export const updateAddressSchema = z.object({
  zip_code: z.string().nonempty("Cep obrigatório"),
  state: z.string().nonempty("Estado obrigatório"),
  city: z.string().nonempty("Cidade obrigatória"),
  street: z.string().nonempty("Rua obrigatória"),
  number: z.string().nonempty("Número obrigatório"),
  complement: z.string(),
});
