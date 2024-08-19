import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";

import { useDebounceContext } from "@/lib/debounceContext";
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
      <label htmlFor="searchForPackages" className="sr-only">Search for packages</label>
      <input
        type="text"
        placeholder="Search for packages..."
        data-testid="searchForPackages"
        className="w-full max-w-md p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleInputChange}
        name="searchForPackages"
        id="searchForPackages"
      />
      {!isSearchTermValid ? (
        <p className="text-red-500 py-4" data-testid="errorMessage">Package name must be alphanumeric and up to 214 characters long.</p>
      ) : null}
    </div>
  );
}
