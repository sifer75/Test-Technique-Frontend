import React, { useRef } from "react";

interface TimestampProps {
  id: string;
  year: string[];
  setYear: React.Dispatch<React.SetStateAction<string[]>>;
  month: string[];
  setMonth: React.Dispatch<React.SetStateAction<string[]>>;
  day: string[];
  setDay: React.Dispatch<React.SetStateAction<string[]>>;
}

function Timestamp({
  id,
  year,
  setYear,
  month,
  setMonth,
  day,
  setDay,
}: TimestampProps) {
  const yearRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const monthRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const dayRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const allRefs = [...yearRefs, ...monthRefs, ...dayRefs];

  // A single-character input field for entering parts of a date (year, month, day).

  function renderInputs(
    arr: string[],
    setArr: React.Dispatch<React.SetStateAction<string[]>>,
    refs: React.RefObject<HTMLInputElement | null>[],
    position: number,
    prefix: string,
  ) {
    const onChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      index: number,
    ) => {
      const val = e.target.value;
      const globalPosition = position + index;

      // Only numeric values are allowed. When a digit is typed, the focus automatically

      if (val === "" || /^[0-9]$/.test(val)) {
        const newArr = [...arr];
        newArr[index] = val;
        setArr(newArr);

        // moves to the next input in the overall sequence using a shared refs array.

        if (val && globalPosition < allRefs.length - 1) {
          allRefs[globalPosition + 1].current?.focus();
        }
      }
    };

    return arr.map((value, index) => (
      <input
        id={`Timestamp__${prefix}-${index}-${id}`}
        key={`${prefix}-${index}`}
        ref={refs[index]}
        type="text"
        placeholder={prefix === "year" ? "Y" : prefix === "month" ? "M" : "D"}
        value={value}
        onChange={(e) => onChange(e, index)}
        maxLength={1}
        className="w-[2ch] text-center border rounded p-0.5"
      />
    ));
  }

  return (
    <div id={`Timestamp__container__${id}`} className="p-2 min-w-0">
      <label id={`Timestamp__label__${id}`}>TimeStamp</label>
      <div id={`Timestamp__inputs__container__${id}`} className="flex gap-1">
        {renderInputs(year, setYear, yearRefs, 0, "year")}
        <span className="whitespace-nowrap">-</span>
        {renderInputs(month, setMonth, monthRefs, yearRefs.length, "month")}
        <span className="whitespace-nowrap">-</span>
        {renderInputs(
          day,
          setDay,
          dayRefs,
          yearRefs.length + monthRefs.length,
          "day",
        )}
      </div>
    </div>
  );
}

export default Timestamp;
