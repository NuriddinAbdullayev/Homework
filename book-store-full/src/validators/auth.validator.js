import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string().min(5)
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});
