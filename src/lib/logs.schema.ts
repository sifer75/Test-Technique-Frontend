import { z } from "zod";

export const logSchema = z.object({
  level: z.string().min(1, "level required"),
  service: z.string().min(1, "service required"),
  message: z.string().min(1, "message required"),
});
