'use client';

import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import 'daisyui/dist/full.css'; // Ensure DaisyUI styles are included

const backgroundImageUrl = 'https://media.istockphoto.com/id/1390404138/vector/beautiful-watercolor-sky-and-cloud-background-illustration.jpg?s=612x612&w=0&k=20&c=YNzqdVU9ZPS-OVlddtJyIIb1JCWgZ0LpYHoG2Y_p4og=';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res) {
        sessionStorage.setItem('user', email);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        router.push('/');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full mb-4"
        />
        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full"
          />
          <button
            type="button"
            onClick={handleClickShowPassword}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeSlashIcon className="w-6 h-6 text-gray-500" />
            ) : (
              <EyeIcon className="w-6 h-6 text-gray-500" />
            )}
          </button>
        </div>
        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input input-bordered w-full"
          />
          <button
            type="button"
            onClick={handleClickShowPassword}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeSlashIcon className="w-6 h-6 text-gray-500" />
            ) : (
              <EyeIcon className="w-6 h-6 text-gray-500" />
            )}
          </button>
        </div>
        {error && (
          <p className="text-red-500 text-center mb-4">
            {error.message}
          </p>
        )}
        <button
          onClick={handleSignUp}
          className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          Sign Up
        </button>
        <p className="text-center mt-4">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-blue-500">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;