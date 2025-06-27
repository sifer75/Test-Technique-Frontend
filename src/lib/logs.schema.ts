import { z } from "zod";

export const logSchema = z.object({
  level: z.enum(["", "fatal", "error", "warn", "info", "debug"]),
  service: z.enum(["", "auth", "payment", "notifications"]),
  message: z.string().min(1, "message required"),
});
