import { Box, Grid, Avatar, Typography } from '@mui/material';

const founders = [
  { name: 'Obidur Rahman', role: 'CEO & Co-Founder', image: '/obidur.jpg' },
  { name: 'Fiona', role: 'COO & Co-Founder', image: '/fiona.jpg' },
  { name: 'H', role: 'CTO & Co-Founder', image: '/h.jpg' },
  { name: 'Z', role: 'CMO & Co-Founder', image: '/z.jpg' },
];

export default function Founders() {
  return (
    <Grid container spacing={3}>
      {founders.map((founder, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar src={founder.image} sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} />
            <Typography variant="h6">{founder.name}</Typography>
            <Typography variant="body2" color="textSecondary">{founder.role}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
