import { Paper, Typography, Grid } from '@mui/material';

const Feature = ({ title, description }) => {
  return (
    <Grid item xs={12} md={4}>
      <Paper sx={{ p: 2, height: '100%', backgroundColor: 'primary.light', color: 'primary.contrastText' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Feature;
