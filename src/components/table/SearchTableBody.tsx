import { Typography, TableBody, TableCell, TableRow } from "@mui/material";

import { TableBodyProps } from "@/lib/types";

export default function SearchTableBody({ rowData, fetching }: TableBodyProps) {
  if (fetching) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={5} align="center">
            <Typography variant="body2" color="textSecondary">
              Loading data, please wait...
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }
  if (rowData.length === 0) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={5} align="center">
            <Typography variant="body2" color="textSecondary">
              No data available
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }
  return (
    <TableBody>
      {fetching ? <p>Loading the results</p> : null}
      {rowData.map((row, index) => {
        return (
          <TableRow hover tabIndex={-1} key={index} sx={{ cursor: "pointer" }}>
            <TableCell scope="row">{row.name}</TableCell>
            <TableCell align="right">{row.stars}</TableCell>
            <TableCell padding="normal">{row.repository_url}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
