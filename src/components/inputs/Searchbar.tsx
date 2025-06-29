import { useEffect, useState } from "react";

interface SearchBarProps {
  id: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  debounceDelay: number;
}
function SearchBar({ id, setMessage, debounceDelay }: SearchBarProps) {
  const [localValue, setLocalValue] = useState("");
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setMessage(localValue);
    }, debounceDelay);

    return () => clearTimeout(handler);
  }, [localValue, setMessage, debounceDelay]);

  return (
    <div id={`SearchBar__container__${id}`} className="relative">
      <input
        id={`SearchBar__input__${id}`}
        type="search"
        placeholder="Rechercher des logs ..."
        className="p-2 pl-10 border rounded-lg w-full shadow-sm"
        onChange={(e) => setLocalValue(e.target.value)}
      />
      <svg
        id={`SearchBar__svg__loop__${id}`}
        className="absolute left-3 top-3 h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}

export default SearchBar;
