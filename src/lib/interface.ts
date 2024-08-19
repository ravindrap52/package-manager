import { Order } from "./types";

export interface Package {
  id: number;
  name: string;
  stars: number;
  repository_url: string;
}
// table data
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
