import { z } from "zod";

export const todoSchema = z.object({
  title: z
    .string()
    .min(3, "Task must be at least 3 characters long")
    .max(100, "Task cannot be more than 100 characters long"),
});

export type TodoFormData = z.infer<typeof todoSchema>;