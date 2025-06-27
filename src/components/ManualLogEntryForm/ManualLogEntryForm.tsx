import SelectFilter from "../ArrayOfLogs/filtersInputs/SelectFilter";
import {
  levels,
  services,
} from "../ArrayOfLogs/filtersInputs/SelectFilter.utils";
import { createLog } from "../../lib/logs.request";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { logSchema } from "../../lib/logs.schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface ManualLogEntryFormProps {
  id: string;
}

type LogFormData = z.infer<typeof logSchema>;

function ManualLogEntryForm({ id }: ManualLogEntryFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<LogFormData>({
    resolver: zodResolver(logSchema),
  });

  const mutation = useMutation({
    mutationFn: createLog,
    onSuccess: () => {
      alert("log created succesfully");
      reset();
    },
    onError: (error) => {
      alert(error.message || "Failed during log creation");
    },
  });

  const onSubmit = (data: LogFormData) => {
    mutation.mutate({
      id: "",
      timestamp: new Date().toISOString(),
      level: data.level,
      service: data.service,
      message: data.message,
    });
  };
  return (
    <form
      id={`ManualLogEntryForm__form__${id}`}
      className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2
        id={`ManualLogEntryForm__title__${id}`}
        className="text-2xl text-gray-800 font-light"
      >
        Create Log
      </h2>

      <textarea
        id={`ManualLogEntryForm__textarea__${id}`}
        {...register("message")}
        className="w-full border rounded-lg p-2"
        placeholder="Write message log ..."
        rows={4}
      />
      {errors.message && (
        <p
          id={`ManualLogEntryForm__error__message__${id}`}
          className="text-red-500"
        >
          {errors.message.message}
        </p>
      )}
      <div
        id={`ManualLogEntryForm__selects__container__${id}`}
        className="flex"
      >
        <div
          id={`ManualLogEntryForm__error__wrapper__level__${id}`}
          className="flex flex-col"
        >
          <SelectFilter
            id={`ManualLogEntryForm__selectFilter__level__${id}`}
            label={"Level"}
            setSelectedValue={(val) => setValue("level", val)}
            options={levels}
          />
          {errors.level && (
            <p
              id={`ManualLogEntryForm__error__level__${id}`}
              className="pl-2 text-red-500"
            >
              {errors.level.message}
            </p>
          )}
        </div>
        <div
          id={`ManualLogEntryForm__error__wrapper__service__${id}`}
          className="flex flex-col"
        >
          <SelectFilter
            id={`ManualLogEntryForm__selectFilter__service__${id}`}
            label={"Service"}
            setSelectedValue={(val) => setValue("service", val)}
            options={services}
          />
          {errors.service && (
            <p
              id={`ManualLogEntryForm__error__service__${id}`}
              className="pl-2 text-red-500"
            >
              {errors.service.message}
            </p>
          )}
        </div>
      </div>
      <button
        id={`ManualLogEntryForm__button__submit__${id}`}
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-40"
      >
        Add
      </button>
    </form>
  );
}

export default ManualLogEntryForm;
