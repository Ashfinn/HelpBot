'use client';

import { Button } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';

const GoogleSignInButton = () => {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        sessionStorage.setItem('user', user.email); // Store user email
        console.log('Google Sign-In successful:', user.email);
        router.push('/'); // Redirect to home page
      }
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleGoogleSignIn}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleSignInButton;