import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Este campo es obligatorio."),
  email: z
    .string()
    .min(1, "Este campo es obligatorio.")
    .email("Correo electrónico no válido."),
  message: z.string().min(1, "Este campo es obligatorio."),
  phone: z.union([
    z
      .string()
      .min(1, { message: "Este campo es obligatorio." })
      .regex(/^(\+\d{1,3})?\s?\d{10}$/, {
        message: "Número de teléfono no válido.",
      }),
    z.undefined(),
  ]),
});
