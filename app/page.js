"use client";

import { useState } from 'react';
import ChatWidget from './components/ChatWidget';
import { Button, Container, Typography, Box } from '@mui/material';

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <Container 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        textAlign: 'center' 
      }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Our Chatbot
      </Typography>
      <Button variant="contained" onClick={toggleChat}>
        Open Chat
      </Button>
      {chatOpen && <ChatWidget onClose={toggleChat} />}
    </Container>
  );
}
