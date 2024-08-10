import { Box, Grid, Avatar, Typography } from '@mui/material';

const founders = [
  { name: 'Obidur Rahman', role: 'CEO & Co-Founder', image: '/obidur.jpg' },
  { name: 'Mehreen Mallick Fiona', role: 'COO & Co-Founder', image: '/mehreen.jpg' },
  { name: 'Hasanul Banna Himel', role: 'CTO & Co-Founder', image: '/himel.jpg' },
  { name: 'Zaynul Abedin Miah', role: 'CMO & Co-Founder', image: '/zaynul.jpg' },
];

export default function Founders() {
  return (
    <Grid container spacing={3}>
      {founders.map((founder, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar src={founder.image} sx={{ width: 200, height: 200, mx: 'auto', mb: 2 }} />
            <Typography variant="h6">{founder.name}</Typography>
            <Typography variant="body2" color="textSecondary">{founder.role}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
