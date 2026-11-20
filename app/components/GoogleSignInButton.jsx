'use client';

import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';

const GoogleSignInButton = ({ label = 'Continue with Google' }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        sessionStorage.setItem('user', result.user.email);
        router.push('/');
      }
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button type="button" onClick={handleGoogleSignIn} disabled={isLoading} className="btn-ghost-pill w-full disabled:opacity-60">
      {isLoading ? (
        <span className="loading loading-spinner loading-sm" />
      ) : (
        <>
          <FcGoogle className="text-lg" /> {label}
        </>
      )}
    </button>
  );
};

export default GoogleSignInButton;
