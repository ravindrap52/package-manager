import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { API_KEY, API_URL } from "@/consts";

import { Packages } from "@/lib/types";

/**
 * Fetch packages based on the search term.
 * @param searchTerm - The term to search for movies.
 * @returns A promise that resolves to a list of packages or throws an error.
 */
export const fetchPackages = async (
  searchTerm: string, page: number, perPage: number
): Promise<Packages | null> => {
  try {
    // Encoding the search term correctly
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const url = `${API_URL}/?q=${encodedSearchTerm}?&api_key=${API_KEY}&page=${page}&per_page=${perPage}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json() ;

    return data as Packages;
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return null;
  }
};

export const usePackageSearch = (searchTerm: string, page: number, perPage: number) => {
  return useQuery({
    queryKey: ["packages", page],
    queryFn: () => fetchPackages(searchTerm, page, perPage),
    enabled: !!searchTerm,
    placeholderData: keepPreviousData
  });
};