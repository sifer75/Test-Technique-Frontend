interface SearchBarProps {
  id: string;
}
function SearchBar({ id }: SearchBarProps) {
  return (
    <div id={`SearchBar__container__${id}`} className="relative">
      <input
        id={`SearchBar__input__${id}`}
        type="search"
        placeholder="Rechercher des logs ..."
        className="p-2 pl-10 border rounded-lg w-full shadow-sm"
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
