"use client";

import React, { useState } from 'react';
import { Button, TextField, Box, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ChatWidget = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      // Here you would call your AI backend to get a response
    }
  };

  return (
    <Dialog open onClose={onClose} fullScreen>
      <DialogTitle>
        Chatbot
        <Button onClick={onClose} color="secondary" sx={{ position: 'absolute', right: 16, top: 16 }}>
          <CloseIcon />
        </Button>
      </DialogTitle>
      <DialogContent dividers>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText 
                primary={msg.text} 
                align={msg.sender === 'user' ? 'right' : 'left'} 
                style={{ background: msg.sender === 'user' ? 'black' : '#f0f0f0', borderRadius: '10px', padding: '10px' }} 
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Box display="flex" width="100%">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                sendMessage();
                e.preventDefault();
              }
            }}
          />
          <Button onClick={sendMessage} variant="contained" color="primary">
            Send
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ChatWidget;
