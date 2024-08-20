import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Using this web application, you can search for and fetch packages. By
        default, the search will use `"*"`, and users can search for specific
        packages using the search box.
      </Typography>
    </Box>
  );
}
