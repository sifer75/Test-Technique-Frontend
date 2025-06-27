interface Option<T> {
  value: T;
  label: string;
}

interface SelectFilterProps<T> {
  id: string;
  label: string;
  options: Option<T>[];
  setSelectedValue: (value: T) => void;
}

/**
 * SelectFilter is a reusable dropdown component using a generic type T.
 * This allows it to work with different kinds of options (like log levels or services)
 * while keeping strong type safety and autocompletion.
 */

function SelectFilter<T extends string>({
  id,
  label,
  options,
  setSelectedValue,
}: SelectFilterProps<T>) {
  return (
    <div id={`SelectFilter__${label}__container__${id}`} className="p-2 w-56">
      <label id={`SelectFilter__${label}__title__${id}`}>{label}</label>
      <select
        id={`SelectFilter__${label}__container__${id}`}
        className="rounded border w-full p-1.5"
        onChange={(e) => setSelectedValue(e.target.value as T)}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectFilter;
