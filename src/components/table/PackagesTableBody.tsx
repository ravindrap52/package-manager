import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { tableBodyProps } from '@/lib/types';

export default function PackagesTableBody({rowData}: tableBodyProps) {
  console.log("🚀 ~ PackagesTableBody ~ rowData:", rowData)
  return (
    <TableBody>
      {rowData.map((row) => {
        return (
          <TableRow
            hover
            tabIndex={-1}
            key={row.id}
            sx={{ cursor: "pointer" }}
          >
            <TableCell padding="none" scope="row">{row.name}</TableCell>
            <TableCell  align="right">{row.stars}</TableCell>
            <TableCell align="right">{row.repository_url}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
