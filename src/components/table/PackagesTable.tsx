import { useState, MouseEvent, useMemo, ChangeEvent } from "react";

import {
  Box,
  Table,
  TableContainer,
  Paper,
  TablePagination,
} from "@mui/material";

import { Order, Packages } from "@/lib/types";
import { tableData } from "@/lib/interface";
import { getTableRowData } from "@/lib/getTableRowData";
import { getComparator, stableSort } from "@/lib/sorting";

import PackagesTableHeader from "@/components/table/PackagesTableHeader";
import PackagesTableBody from "@/components/table/PackagesTableBody";

export default function PackagesTable({ packages }: Packages) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof tableData>("stars");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // sorting
  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof tableData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  // get table row data
  const rowData = getTableRowData(packages);

  const visibleRows = useMemo(
    () =>
      stableSort(rowData, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rowData]
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%" }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="packagesTable"
            size="medium"
          >
            <PackagesTableHeader
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <PackagesTableBody rowData={visibleRows} />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          count={rowData.length}
          component="div"
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
