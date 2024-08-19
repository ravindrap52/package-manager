import { Order } from "./types";

export interface Package {
  id: number;
  name: string;
  stars: number;
  repository_url: string;
}

export interface SearchResults {
  searchData: Package[];
  totalRecords: number;
}
export interface TableData {
  id: number;
  name: string;
  stars: number;
  repository_url: string;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof TableData;
  label: string;
  numeric: boolean;
}

export interface TableHeaderProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof TableData
  ) => void;
  order: Order;
  orderBy: string;
}

export interface TableRowsLoaderProps {
  rowsNum: number;
}

// Define the type for the context value
export interface DebounceContextType {
  debouncedValue: string;
  setDebouncedValue: (value: string) => void;
}

export interface ContextHeader {
  order: string;
  setOrder: (value: string) => void;
  orderBy: string;
  setOrderBy: (value: string) => void;
}

export interface ContextPagination {
  page: number;
  setPage: (value: number) => void;
  rowsPerPage: number;
  setRowsPerPage: (value: number) => void;
}