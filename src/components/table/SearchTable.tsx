import {
  Box,
  Table,
  TableContainer,
  Paper,
  TableFooter,
  TablePagination,
  TableRow,
} from "@mui/material";

import { usePackageSearch } from "@/hooks/usePackage";

import { useDebounceContext } from "@/context/debounceContext";

import Loading from "@/components/Loading";
import ErrorPage from "@/components/ErrorPage";
import SearchTableHeader from "@/components/table/SearchTableHeader";

import SearchTableBody from "./SearchTableBody";
import { ChangeEvent, useState } from "react";
import { getTableRowData } from "@/lib/getTableRowData";

export default function SearchTable() {
  const { debouncedValue } = useDebounceContext();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { data, error, isLoading, isFetching } = usePackageSearch(
    debouncedValue,
    page + 1,
    rowsPerPage
  );

  // filtering the data from the dataset
  const rowData = getTableRowData(data?.searchData || []);

  // showing Loading page while fetching the results
  if (isLoading) {
    return <Loading rowsNum={5} />;
  }

  // showing Error page if erroe occurs while fetching
  if (error) {
    return <ErrorPage />;
  }

  // setting nee page
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  // displaying the selected rows
  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // total number of records for pagination
  const totalRecords = data?.totalRecords || -1;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%" }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="packagesTable"
            size="medium"
          >
            <SearchTableHeader />
            <SearchTableBody rowData={rowData || []} fetching={isFetching} />
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={5}
                  count={totalRecords}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  slotProps={{
                    select: {
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    },
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
