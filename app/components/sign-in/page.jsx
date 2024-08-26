'use client';

import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { Box, Button, TextField, Typography, CircularProgress, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const backgroundImageUrl = 'https://media.istockphoto.com/id/1390404138/vector/beautiful-watercolor-sky-and-cloud-background-illustration.jpg?s=612x612&w=0&k=20&c=YNzqdVU9ZPS-OVlddtJyIIb1JCWgZ0LpYHoG2Y_p4og=';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        sessionStorage.setItem('user', email);
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
      sx={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        bgcolor="grey.100"
        p={4}
        borderRadius={2}
        boxShadow={3}
        width={{ xs: '100%', sm: 300, md: 350 }}
      >
        <Typography variant="h4" color="textPrimary" mb={3} fontWeight="bold">Sign In</Typography>
        <TextField
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type={showPassword ? 'text' : 'password'}
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {error && (
          <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
            {error.message}
          </Typography>
        )}
        <Button
          onClick={handleSignIn}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Sign In'}
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
