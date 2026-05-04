import { z } from "zod";

export const orderSchema = z.object({
  userId: z.string(),
  bookId: z.string(),
  quantity: z.number().positive()
});
