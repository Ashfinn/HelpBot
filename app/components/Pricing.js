import { Paper, Typography, Grid, Button } from '@mui/material';

const Pricing = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Basic Plan
            </Typography>
            <Typography variant="h5" gutterBottom>
              $19/month
            </Typography>
            <Typography variant="body1">
              Essential features for small businesses.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Choose Plan
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Pro Plan
            </Typography>
            <Typography variant="h5" gutterBottom>
              $49/month
            </Typography>
            <Typography variant="body1">
              Advanced features for growing businesses.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Choose Plan
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Enterprise Plan
            </Typography>
            <Typography variant="h5" gutterBottom>
              $99/month
            </Typography>
            <Typography variant="body1">
              All features for large enterprises.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Choose Plan
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Pricing;
