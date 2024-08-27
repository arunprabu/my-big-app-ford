import { Box, Divider, Typography } from "@mui/material";

// Functional Component with Anonymous Function
const Footer = function () {
  const copyrightYear = 2024;

  // must return JSX
  return (
    <Box>
      <Divider />
      <Typography variant="body2" gutterBottom>
        Copyright {copyrightYear} | My Big App
      </Typography>
    </Box>
  );
};

export default Footer;
