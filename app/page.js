"use client";

import { useState } from 'react';
import ChatWidget from './components/ChatWidget';
import { ThemeProvider, CssBaseline, Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import theme from '../theme';

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(/background.jpg)', // Add your background image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          color: 'text.primary',
          p: 3,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom>
            Welcome to Our Chatbot
          </Typography>
          <Typography variant="h5" gutterBottom>
            Your personalized AI assistant
          </Typography>
          <Button variant="contained" color="primary" onClick={toggleChat} size="large">
            Open Chat
          </Button>
        </Container>
        <Container maxWidth="md" sx={{ mt: 5 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Instant Feedback
                </Typography>
                <Typography variant="body1">
                  Get instant Feedback to all your queries.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  24 hours active
                </Typography>
                <Typography variant="body1">
                  We are active all days all night.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Skibidi
                </Typography>
                <Typography variant="body1">
                  Skibidi Skibidi Ohio Ohio.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {chatOpen && <ChatWidget onClose={toggleChat} />}
    </ThemeProvider>
  );
}
