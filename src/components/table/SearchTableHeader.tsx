import { useState } from "react";

import {
  Box,
  TableHead,
  TableCell,
  TableSortLabel,
  TableRow,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

import { tableHeaderCells } from "@/lib/tableHeaderCells";
import { TableData } from "@/lib/interface";
import { Order } from "@/lib/types";

export default function SearchTableHeader() {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof TableData>("stars");

  const handleRequestSort = (property: keyof TableData) => () => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <TableHead data-testid="tableHeader">
      <TableRow data-testid="tableHeaderRow">
        {tableHeaderCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={handleRequestSort(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
