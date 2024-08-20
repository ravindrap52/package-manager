import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { API_URL } from "@/consts";

import { SearchResults } from "@/lib/interface";

/**
 * Fetch packages based on the search term.
 * @param searchTerm - The term to search for packages.
 * @param page - page number, to fetch the records for that page.
 * @param perPage - Number of records to show per page.
 * @returns A promise that resolves to a list of packages or throws an error.
 */
export const fetchPackages = async (
  searchTerm: string, page: number, perPage: number
): Promise<SearchResults> => {
  try {
    // Encoding the search term correctly
    let encodedSearchTerm = encodeURIComponent(searchTerm);
    // if not search term then defaulting to *
    encodedSearchTerm = encodedSearchTerm ? encodedSearchTerm : "*"

    // getting api key env file. This is from .env.devlopment file
    const apiKey = import.meta.env.VITE_API_KEY;

    const url = `${API_URL}/?q=${encodedSearchTerm}&api_key=${apiKey}&page=${page}&per_page=${perPage}`;
    
    const response = await fetch(url);

    // taking total records from response header
    const records = response.headers.get("total") || -1;

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // packages data as json
    const data = await response.json() ;

    return {
      searchData: data,
      totalRecords: Number(records)
    };
  } catch (error) {
    throw new Error(`Error while fetching packages ${error}`);
  }
};

export const usePackageSearch = (searchTerm: string, page: number, perPage: number) => {
  return useQuery<SearchResults>({
    queryKey: ["packages", searchTerm, page, perPage],  // include perPage in the query key
    queryFn: () => fetchPackages(searchTerm, page, perPage),
    placeholderData: keepPreviousData,
  });
};