import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";

import { useDebounceContext } from "@/context/debounceContext";

import { validateSearchTerm } from "@/lib/ValidateSearchTerm";

export default function SearchInput() {
  const { setDebouncedValue } = useDebounceContext();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearchTermValid, setIsSearchTermValid] = useState<boolean>(true);
  const debouncedValue = useDebounce(searchTerm, 500);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (validateSearchTerm(event.target.value)) {
        setSearchTerm(event.target.value);
        setIsSearchTermValid(true);
      } else {
        setIsSearchTermValid(false);
      }
    },
    []
  );
  // updating the debounce value
  useEffect(() => {
    setDebouncedValue(debouncedValue);
  }, [debouncedValue, setDebouncedValue]);

  return (
    <div className="mb-4">
      <div className="relative">
        <label htmlFor="searchForPackages" className="sr-only">
          Search for packages
        </label>
        <input
          type="text"
          placeholder="Search for packages..."
          data-testid="searchForPackages"
          className="w-full p-2 pl-10 border border-teal-300 rounded-lg focus:outline-none focus:border-teal-500 bg-gray-100 text-gray-800"
          onChange={handleInputChange}
          name="searchForPackages"
          id="searchForPackages"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-teal-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.42-1.42l5.38 5.38a1 1 0 01-1.42 1.42l-5.38-5.38zM8 14A6 6 0 108 2a6 6 0 000 12z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      {!isSearchTermValid ? (
        <p className="text-red-500 py-2" data-testid="errorMessage">
          Package name must be alphanumeric and up to 214 characters long.
        </p>
      ) : null}
    </div>
  );
}
