'use client';

import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        sessionStorage.setItem('user', email); // Store the email address
        setEmail('');
        setPassword('');
        router.push('/');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="white"
    >
      <Box
        bgcolor="grey.100"
        p={6} // Increase padding
        borderRadius={2}
        boxShadow={3}
        width={450} // Increase width
      >
        <Typography variant="h3" color="textPrimary" mb={3}>Sign In</Typography> {/* Increase font size and margin */}
        <TextField
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        {error && <Typography color="error">{error.message}</Typography>}
        <Button
          onClick={handleSignIn}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }} // Increase margin-top
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Sign In'}
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;