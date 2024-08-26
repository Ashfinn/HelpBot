'use client';

import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import zxcvbn from 'zxcvbn';
import { Box, Button, TextField, Typography, CircularProgress, InputAdornment, IconButton, LinearProgress } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const backgroundImageUrl = 'https://media.istockphoto.com/id/1390404138/vector/beautiful-watercolor-sky-and-cloud-background-illustration.jpg?s=612x612&w=0&k=20&c=YNzqdVU9ZPS-OVlddtJyIIb1JCWgZ0LpYHoG2Y_p4og=';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res) {
        sessionStorage.setItem('user', email);
        setEmail('');
        setPassword('');
        router.push('/sign-in');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const evaluatePasswordStrength = () => {
    return zxcvbn(password).score;
  };

  const passwordStrength = evaluatePasswordStrength();
  const strengthLabel = ['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][passwordStrength];

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
        <Typography variant="h4" color="textPrimary" mb={2} fontWeight="bold">Sign Up</Typography>
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
        {password && (
          <Box mt={2}>
            <LinearProgress variant="determinate" value={(passwordStrength + 1) * 20} />
            <Typography variant="body2" color="textSecondary" align="center">
              Password strength: {strengthLabel}
            </Typography>
          </Box>
        )}
        {error && (
          <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
            {error.message}
          </Typography>
        )}
        <Button
          onClick={handleSignUp}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Sign Up'}
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
