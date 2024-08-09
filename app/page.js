'use client';
import { useState, useEffect, useRef } from 'react';
import { Box, Button, Stack, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Rating, Typography, Grid, AppBar, Toolbar, IconButton, Menu, MenuItem, Container, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, ThemeProvider } from '@mui/material/styles'; // Add ThemeProvider import
import { useRouter } from 'next/navigation';
import { firestore } from './firebase/config'; // Ensure this path is correct
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import ChatWidget from './components/ChatWidget';
import Testimonial from './components/Testimonial';
import Feature from './components/Feature';
import Pricing from './components/Pricing';
import theme from '../theme'; // Ensure this path is correct

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm the Headstarter support assistant. How can I help you today?",
    },
  ]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const router = useRouter();
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const checkLoginStatus = () => {
      const user = sessionStorage.getItem('user');
      if (user) {
        setIsLoggedIn(true);
        setUserEmail(user);
      }
    };
    checkLoginStatus();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserEmail('');
    router.push('/sign-in');
  };

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;
    setIsLoading(true);
    setMessage('');
    setMessages((messages) => [
      ...messages,
      { role: 'user', content: message },
      { role: 'assistant', content: '' },
    ]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([...messages, { role: 'user', content: message }]),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const text = decoder.decode(value, { stream: true });
        setMessages((messages) => {
          const lastMessage = messages[messages.length - 1];
          const otherMessages = messages.slice(0, messages.length - 1);
          return [...otherMessages, { ...lastMessage, content: lastMessage.content + text }];
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((messages) => [
        ...messages,
        { role: 'assistant', content: "I'm sorry, but I encountered an error. Please try again later." },
      ]);
    }
    setIsLoading(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => setChatOpen(!chatOpen);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

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
        <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
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
                {!isLoggedIn ? (
                  <>
                    <Button color="inherit" sx={{ mx: 1, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }} onClick={() => router.push('/sign-in')}>
                      Login
                    </Button>
                    <Button variant="outlined" color="inherit" sx={{ mx: 1, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }} onClick={() => router.push('/sign-up')}>
                      Sign Up
                    </Button>
                  </>
                ) : (
                  <Button color="inherit" sx={{ mx: 1, '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' } }} onClick={handleLogout}>
                    Logout
                  </Button>
                )}
              </>
            )}
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
              <MenuItem onClick={handleMenuClose}>Features</MenuItem>
              <MenuItem onClick={handleMenuClose}>Testimonials</MenuItem>
              <MenuItem onClick={handleMenuClose}>Pricing</MenuItem>
              <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
              {!isLoggedIn && (
                <>
                  <MenuItem onClick={() => router.push('/sign-in')}>Login</MenuItem>
                  <MenuItem onClick={() => router.push('/sign-up')}>Sign Up</MenuItem>
                </>
              )}
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
        {chatOpen && (
          <ChatWidget
            messages={messages}
            onSendMessage={sendMessage}
            onMessageChange={setMessage}
            message={message}
            onKeyPress={handleKeyPress}
            isLoading={isLoading}
            onClose={() => setChatOpen(false)}
          />
        )}
      </Box>
    </ThemeProvider>
  );
}