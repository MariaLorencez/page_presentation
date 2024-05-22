import { contactSchema } from "@schemas/ContactSchema";
import { z } from "zod";

export type IContactForm = z.infer<typeof contactSchema>;
