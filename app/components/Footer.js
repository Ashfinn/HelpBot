import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 8,
        py: 3,
        textAlign: 'center',
        //backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background
        color: 'rgba(0, 0, 0, 0.8)', // White text
      }}
    >
      <Typography variant="body2">&copy; {new Date().getFullYear()} HelpBot. All rights reserved.</Typography>
      <Typography variant="body2">
        Founded by <Link href="https://www.linkedin.com/in/obidur-rahman-shawal/">Obidur Rahman</Link> , <Link href="https://www.linkedin.com/in/mehreen-mallick-fiona/">Mehreen Mallick Fiona</Link> , <Link href="https://www.linkedin.com/in/hasanul-banna-himel/">Hasanul Banna Himel</Link> , and <Link href="https://www.linkedin.com/in/zaynul-abedin-miah/">Zaynul Abedin Miah</Link>. <br />
      </Typography>
    </Box>
  );
}
