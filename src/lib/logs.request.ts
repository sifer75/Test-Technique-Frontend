import axios from "axios";
import type { LogLevelOption, LogServiceOption, LogsProps } from "./logs.utils";

export const createLog = async (data: LogsProps) => {
  try {
    const response = await axios.post(`http://localhost:3333/logs`, data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to create log:", error);
    throw error;
  }
};

interface LogsParams {
  date: string;
  level: LogLevelOption;
  service: LogServiceOption;
  message: string;
}

export const getLogs = async ({
  date,
  level,
  service,
  message,
}: LogsParams) => {
  const params = new URLSearchParams();

  if (date) params.set("date", date);
  if (level) params.set("level", level);
  if (service) params.set("service", service);
  if (message) params.set("q", message);

  try {
    const response = await axios.get(
      `http://localhost:3333/logs/search?${params.toString()}`,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch logs:", error);
    throw error;
  }
};
