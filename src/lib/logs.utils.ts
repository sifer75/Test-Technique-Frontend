import type {
  LogLevelOption,
  LogServiceOption,
} from "../components/ArrayOfLogs/filtersInputs/types";

export interface LogsProps {
  timestamp: string;
  level: LogLevelOption;
  service: LogServiceOption;
  message: string;
}
