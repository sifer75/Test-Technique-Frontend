import { useState } from "react";
import SearchBar from "./inputs/Searchbar";
import { getLogs } from "../lib/logs.request";
import ShowFiltersButton from "./inputs/ShowFiltersButton";
import Timestamp from "./inputs/filtersInputs/Timestamp";
import ManualLogEntryForm from "./ManualLogEntryForm";
import SelectFilter from "./inputs/filtersInputs/SelectFilter";
import { levels, services } from "./inputs/filtersInputs/SelectFilter.utils";
import type {
  LogLevelOption,
  LogServiceOption,
  LogsProps,
} from "../lib/logs.utils";
import { useQuery } from "@tanstack/react-query";
import MessageRow from "./MessageRow";
import { format } from "date-fns";

interface LogExplorerProps {
  id: string;
}

interface PaginatedLogs {
  total: number;
  page: number;
  size: number;
  results: LogsProps[];
}

function LogExplorer({ id }: LogExplorerProps) {
  const [showAdvancedFilters, setShowAdvancedFilter] = useState(false);
  const [year, setYear] = useState(["", "", "", ""]);
  const [month, setMonth] = useState(["", ""]);
  const [day, setDay] = useState(["", ""]);
  const [level, setLevel] = useState<LogLevelOption>("");
  const [service, setService] = useState<LogServiceOption>("");

  function formatedIsoDate(date: string): string {
    return format(new Date(date), "yyyy/MM/dd");
  }

  let date = "";

  const fullYear = year.join("");
  const fullMonth = month.join("");
  const fullDay = day.join("");

  if (fullYear.length === 4) {
    date = fullYear;
    if (fullMonth.length === 2) {
      date += `-${fullMonth}`;
      if (fullDay.length === 2) {
        date += `-${fullDay}`;
      }
    }
  }

  const filters = { date, level, service };
  console.log(date, "date");

  const {
    data: logsData,
    isLoading,
    isError,
    refetch,
  } = useQuery<PaginatedLogs, Error>({
    queryKey: ["logs", filters],
    queryFn: () => getLogs(filters),
  });

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
        <button onClick={() => refetch()}>search</button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg flex flex-col gap-2 max-h-64 overflow-y-auto">
        <h1 className="text-xl text-gray-800 font-light p-2">
          {logsData?.results.length ?? 0} Results
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
            {isLoading ? (
              <MessageRow
                id={`LogExplorer__messageRow__isLoading__${id}`}
                txt="Loading logs..."
              />
            ) : isError ? (
              <MessageRow
                id={`LogExplorer__messageRow__isError__${id}`}
                txt="Failed during fetching logs..."
              />
            ) : logsData?.results.length === 0 ? (
              <MessageRow
                id={`LogExplorer__messageRow__length__${id}`}
                txt="No logs found."
              />
            ) : (
              logsData?.results.map((log: LogsProps, index: number) => (
                <tr key={`${index}__${log.id}`}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatedIsoDate(log.timestamp)}
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default LogExplorer;
