import { ChangeEvent, useCallback, useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";

export default function Packages() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    []
  );

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-700 p-2">Content Area</h1>
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for packages..."
          data-testid="searchForPackages"
          className="w-full lg:w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </>
  );
}
