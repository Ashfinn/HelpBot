import { Paper, Typography, Grid, Avatar } from '@mui/material';

const Testimonial = ({ name, image, feedback }) => {
  return (
    <Grid item xs={12} md={4}>
      <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar src={image} sx={{ width: 56, height: 56, mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1">
          {feedback}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Testimonial;
