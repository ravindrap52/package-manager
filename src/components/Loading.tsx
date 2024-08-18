import { Table, TableBody, TableCell, TableRow, Skeleton } from "@mui/material";

import { TableRowsLoaderProps } from "@/lib/interface";

export default function Loading({ rowsNum }: TableRowsLoaderProps) {
  return (
    <>
      {[...Array(rowsNum)].map((_, index) => (
        <Table key={index}>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <Skeleton animation="wave" variant="text" />
              </TableCell>
              <TableCell>
                <Skeleton animation="wave" variant="text" />
              </TableCell>
              <TableCell>
                <Skeleton animation="wave" variant="text" />
              </TableCell>
              <TableCell>
                <Skeleton animation="wave" variant="text" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ))}
    </>
  );
}
