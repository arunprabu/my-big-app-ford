import { Box, Divider, Typography } from "@mui/material";

// Functional Component with Anonymous Function
const Footer = function () {
  // must return JSX
  return (
    <Box>
      <Divider />
      <Typography variant="body2" gutterBottom>
        Copyright 2024 | My Big App
      </Typography>
    </Box>
  );
};

export default Footer;
