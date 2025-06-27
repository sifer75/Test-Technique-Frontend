import { useState, useEffect } from "react";
import SearchBar from "./inputs/Searchbar";
import { getLogs } from "../lib/logs.request";
import ShowFiltersButton from "./inputs/ShowFiltersButton";
import Timestamp from "./inputs/filtersInputs/Timestamp";
import ManualLogEntryForm from "./ManualLogEntryForm";
import SelectFilter from "./inputs/filtersInputs/SelectFilter";
import {
  levels,
  services,
} from "./inputs/filtersInputs/SelectFilter.utils";
import type {
  LogLevelOption,
  LogServiceOption,
  LogsProps,
} from "../lib/logs.utils";

interface LogExplorerProps {
  id: string;
}

const fakeLogs: LogsProps[] = [
  {
    id: "1",
    timestamp: "2025-06-26T14:32:00Z",
    level: "fatal",
    service: "auth",
    message: "Critical failure during token generation.",
  },
  {
    id: "2",
    timestamp: "2025-06-26T14:33:10Z",
    level: "error",
    service: "auth",
    message: "GET /users failed with status 500.",
  },
  {
    id: "3",
    timestamp: "2025-06-26T14:34:05Z",
    level: "warn",
    service: "payment",
    message: "Payment retry triggered after timeout.",
  },
  {
    id: "4",
    timestamp: "2025-06-26T14:35:20Z",
    level: "info",
    service: "auth",
    message: "Admin logged in successfully.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
  {
    id: "5",
    timestamp: "2025-06-26T14:36:45Z",
    level: "debug",
    service: "notifications",
    message: "Email queued for delivery.",
  },
];

function LogExplorer({ id }: LogExplorerProps) {
  const [showAdvancedFilters, setShowAdvancedFilter] = useState(false);
  const [year, setYear] = useState(["", "", "", ""]);
  const [month, setMonth] = useState(["", ""]);
  const [day, setDay] = useState(["", ""]);
  const [level, setLevel] = useState<LogLevelOption>("");
  const [service, setService] = useState<LogServiceOption>("");
  const [results, setResults] = useState<number>(20);

  useEffect(() => {
    getLogs({
      id: "",
      timestamp: "",
      level: "",
      service: "",
      message: "",
    })
      .then((res) => console.log("Logs:", res))
      .catch((err) => console.error("Failed to fetch logs:", err));
  }, []);

  console.log(level, "level", service, "service");
  return (
    <section
      id={`LogExplorer__container__${id}`}
      className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm flex flex-col gap-10"
    >
      <ManualLogEntryForm id={`LogExplorer__manualLogEntryForm__${id}`} />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl text-gray-800 font-light">Logs System</h2>
        <SearchBar id={`LogExplorer__searchBar__${id}`} />

        <ShowFiltersButton
          id={`LogExplorer__showFiltersButton__${id}`}
          showAdvancedFilters={showAdvancedFilters}
          setShowAdvancedFilter={setShowAdvancedFilter}
        />
        <div
          id={`LogsFilters__container__${id}`}
          className={`${
            showAdvancedFilters ? "flex" : "hidden"
          } flex-col lg:flex-row gap-3`}
        >
          <Timestamp
            id={`LogExplorer__logsFilters__timestamp__${id}`}
            year={year}
            setYear={setYear}
            month={month}
            setMonth={setMonth}
            day={day}
            setDay={setDay}
          />
          <SelectFilter
            id={`LogsFilters__selectFilter__level__${id}`}
            label={"Level"}
            setSelectedValue={setLevel}
            options={levels}
          />
          <SelectFilter
            id={`LogsFilters__selectFilter__service__${id}`}
            label={"Service"}
            setSelectedValue={setService}
            options={services}
          />
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg flex flex-col gap-2 max-h-64 overflow-y-auto">
        <h1 className="text-xl text-gray-800 font-light p-2">
          {results} Results
        </h1>
        <table className="min-w-full bg-gray-300">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timestamp
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {fakeLogs.map((log, index) => (
              <tr key={`${index}__${log.id}`}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {log.timestamp}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}
                  >
                    {log.level}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {log.service}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {log.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default LogExplorer;
