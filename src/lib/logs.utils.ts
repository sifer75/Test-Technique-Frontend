import { z } from "zod";
import { logServiceEnum, logLevelEnum } from "./logs.schema";

export type LogLevelOption = z.infer<typeof logLevelEnum>;
export type LogServiceOption = z.infer<typeof logServiceEnum>;
export interface LogsProps {
  id: string;
  timestamp: string;
  level: LogLevelOption;
  service: LogServiceOption;
  message: string;
}
