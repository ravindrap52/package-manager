import { ChangeEvent, useCallback, useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";
import { usePackageSearch } from "@/hooks/usePackage";

import PackageTable from "@/components/table/PackagesTable";
import Loading from "@/components/Loading";

export default function Packages() {
  const [searchTerm, setSearchTerm] = useState<string>("react");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data, error, isLoading } = usePackageSearch(debouncedSearchTerm, 1, 5);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    []
  );

  return (
    <>
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
      <div className="p-2 my-5 bg-gray-100">
        <h1 className="text-xl">Packages for {searchTerm}</h1>
      </div>

      {/* Table in desktop environment*/}
      <div className="overflow-auto rounded-lg shadow hidden md:block">
        {isLoading && <Loading rowsNum={5} />}
        {data !== null && data !== undefined ? (
          
          <PackageTable packages={data.packages || data} />
          
        ) : null}
      </div>
    </>
  );
}
