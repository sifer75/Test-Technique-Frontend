import axios from "axios";
import type { LogsProps } from "./logs.utils";

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

export const getLogs = async (data: LogsProps) => {
  try {
    const response = await axios.get(`http://localhost:3333/logs/search`, {
      headers: { "Content-Type": "application/json" },
      params: data,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch logs:", error);
    throw error;
  }
};
