import { z } from "zod";

export const bookSchema = z.object({
  title: z.string(),
  author: z.string(),
  description: z.string(),
  price: z.number().positive(),
  stock: z.number().optional(),
  category: z.string()
});
