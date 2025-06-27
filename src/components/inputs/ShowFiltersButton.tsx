interface ShowFiltersButtonProps {
  id: string;
  showAdvancedFilters: boolean;
  setShowAdvancedFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShowFiltersButton({
  id,
  showAdvancedFilters,
  setShowAdvancedFilter,
}: ShowFiltersButtonProps) {
  return (
    <div id={`ShowFiltersButton__container__${id}`} className="relative">
      <button
        id={`ShowFiltersButton__button__${id}`}
        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 flex gap-4 transition"
        onClick={() => setShowAdvancedFilter(!showAdvancedFilters)}
      >
        <svg
          id={`ShowFiltersButton__svg__toggle__${id}`}
          className={`w-4 h-4 top-3 absolute transition ${
            showAdvancedFilters ? "rotate-0" : "rotate-180"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
        <span
          id={`ShowFiltersButton__text__${id}`}
          className="pl-5 font-medium"
        >
          Show filters
        </span>
      </button>
    </div>
  );
}

export default ShowFiltersButton;
