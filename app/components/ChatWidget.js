// chatWidget.js
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button, TextField, Box, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ChatWidget = ({ onClose }) => {
  // const [messages, setMessages] = useState([]);
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: "Hi! I'm the HelpBot. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const sendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: 'user', text: input }];
      setMessages(newMessages);
      setInput('');

      // Simulated AI response
      setTimeout(() => {
        setMessages([...newMessages, { sender: 'ai', text: 'Thank you for your message! How can I assist you further?' }]);
      }, 1000);
    }
  };

  return (
    <Dialog open onClose={onClose} fullScreen>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        Chat with HelpBot
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </DialogTitle>
      <DialogContent dividers sx={{ display: 'flex', flexDirection: 'column', height: '70vh' }}>
        <List sx={{ flexGrow: 1, overflow: 'auto' }}>
          {messages.map((message, index) => (
            <ListItem key={index} sx={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              <ListItemText
                primary={message.text}
                sx={{
                  textAlign: message.sender === 'user' ? 'right' : 'left',
                  backgroundColor: message.sender === 'user' ? 'primary.light' : 'secondary.light',
                  borderRadius: '8px',
                  padding: '8px',
                  maxWidth: '75%',
                }}
              />
            </ListItem>
          ))}
          <div ref={messagesEndRef} />
        </List>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          sx={{ marginRight: '8px' }}
        />
        <Button variant="contained" color="primary" onClick={sendMessage}>
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChatWidget;