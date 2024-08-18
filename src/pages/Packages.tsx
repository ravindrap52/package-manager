import { ChangeEvent, useCallback, useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";
import { usePackageSearch } from "@/hooks/usePackage";

import Loading from "@/components/Loading";

export default function Packages() {
  const [searchTerm, setSearchTerm] = useState<string>("react");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data, error, isLoading } = usePackageSearch(debouncedSearchTerm);
  console.log("🚀 ~ Packages ~ data:", data)

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
      <div className="p-5 m-5 bg-gray-100">
        <h1 className="text-xl mb-2">Your orders</h1>
        {/* Table in desktop environment*/}
        <div className="overflow-auto rounded-lg shadow hidden md:block">
          
        </div>
      </div>
    </>
  );
}
