"use client";

import { useState } from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Box, Button, Grid, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ChatWidget from './components/ChatWidget';
import theme from '../theme';
import Testimonial from './components/Testimonial';
import Feature from './components/Feature';
import Pricing from './components/Pricing';

const Home = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
        <AppBar position="static" color="transparent" elevation={0} sx={{ backgroundColor: 'transparent' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              HelpBot
            </Typography>
            {isMobile ? (
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <Button color="inherit" sx={{ mx: 1, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}>Home</Button>
                <Button color="inherit" sx={{ mx: 1, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}>Features</Button>
                <Button color="inherit" sx={{ mx: 1, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}>Testimonials</Button>
                <Button color="inherit" sx={{ mx: 1, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}>Pricing</Button>
                <Button color="inherit" sx={{ mx: 1, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }}>Contact</Button>
              </>
            )}
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleMenuClose}>Features</MenuItem>
              <MenuItem onClick={handleMenuClose}>Testimonials</MenuItem>
              <MenuItem onClick={handleMenuClose}>Pricing</MenuItem>
              <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '60vh',
            }}
          >
            <Typography variant="h2" gutterBottom>
              Welcome to HelpBot
            </Typography>
            <Typography variant="h5" gutterBottom>
              Your personalized AI assistant
            </Typography>
            <Button variant="contained" color="primary" onClick={toggleChat} size="large">
              Open Chat
            </Button>
          </Box>
        </Container>
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Grid container spacing={3}>
            <Feature title="Instant Feedback" description="Get instant feedback to all your queries." />
            <Feature title="24/7 Availability" description="We are available around the clock." />
            <Feature title="Seamless Integration" description="Easily integrate with your existing systems." />
          </Grid>
        </Container>
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Typography variant="h4" gutterBottom>
            What Our Customers Say
          </Typography>
          <Grid container spacing={3}>
            <Testimonial name="John Doe" image="/john.jpg" feedback="HelpBot has transformed the way we handle customer service. The AI is incredibly accurate and efficient." />
            <Testimonial name="Jane Smith" image="/jane.jpg" feedback="The 24/7 availability of HelpBot has been a game-changer for our business. Highly recommended!" />
            <Testimonial name="Alice Johnson" image="/alice.jpg" feedback="Integration with HelpBot was seamless and easy. Our customers love the instant responses." />
          </Grid>
        </Container>
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Typography variant="h4" gutterBottom>
            Pricing Plans
          </Typography>
          <Pricing />
        </Container>
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h4" gutterBottom>
              About HelpBot
            </Typography>
            <Typography variant="body1" paragraph>
              HelpBot is an innovative AI-driven customer support platform designed to streamline and enhance your customer service experience. Our mission is to provide businesses with a powerful tool that ensures customer satisfaction through instant, accurate, and personalized responses. With seamless integration, 24/7 availability, and cutting-edge AI technology, HelpBot is the ultimate solution for modern customer support needs.
            </Typography>
          </Box>
        </Container>
      </Box>
      {chatOpen && <ChatWidget onClose={toggleChat} />}
    </ThemeProvider>
  );
};

export default Home;
