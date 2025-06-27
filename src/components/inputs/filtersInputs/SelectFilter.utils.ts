import type { LogLevelOption, LogServiceOption } from "../../../lib/logs.utils";

export const levels: { value: LogLevelOption; label: string }[] = [
  { value: "", label: "Tous" },
  { value: "fatal", label: "Fatal" },
  { value: "error", label: "Error" },
  { value: "warn", label: "Warn" },
  { value: "info", label: "Info" },
  { value: "debug", label: "Debug" },
];

export const services: { value: LogServiceOption; label: string }[] = [
  { value: "", label: "Tous" },
  { value: "auth", label: "Auth" },
  { value: "payment", label: "Payment" },
  { value: "notifications", label: "Notifications" },
];
