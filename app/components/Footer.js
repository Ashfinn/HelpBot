import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 8,
        py: 3,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background
        color: '#ffffff', // White text
      }}
    >
      <Typography variant="body2">&copy; {new Date().getFullYear()} HelpBot. All rights reserved.</Typography>
      <Typography variant="body2">
        Founded by Obidur Rahman, Fiona, H, and Z. <br />
      </Typography>
    </Box>
  );
}
