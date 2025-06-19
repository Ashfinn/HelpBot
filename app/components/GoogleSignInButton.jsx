// GoogleSignInButton.jsx
'use client';

import { useState } from 'react'; // Import useState
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc'; // Example: npm install react-icons

const GoogleSignInButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        sessionStorage.setItem('user', user.email);
        console.log('Google Sign-In successful:', user.email);
        router.push('/');
      }
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
      // Optionally show an error message to the user, e.g., using a DaisyUI alert
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className={`btn btn-primary px-8 py-3 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 ${isLoading ? 'btn-disabled' : ''}`} // DaisyUI btn, btn-primary, btn-disabled
      onClick={handleGoogleSignIn}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="loading loading-spinner"></span> // DaisyUI loading spinner
      ) : (
        <>
          <FcGoogle className="text-xl" />
          Sign in with Google
        </>
      )}
    </button>
  );
};

export default GoogleSignInButton;