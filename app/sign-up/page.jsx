'use client';

import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import AuthShell from '@/app/components/AuthShell';
import GoogleSignInButton from '@/app/components/GoogleSignInButton';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [mismatch, setMismatch] = useState(false);
  const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e?.preventDefault();
    if (password !== confirmPassword) {
      setMismatch(true);
      return;
    }
    setMismatch(false);
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res) {
        sessionStorage.setItem('user', email);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        router.push('/');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const eye = (
    <button
      type="button"
      onClick={() => setShowPassword((s) => !s)}
      className="absolute inset-y-0 right-0 flex items-center pr-4 text-white/40 hover:text-white"
      aria-label={showPassword ? 'Hide password' : 'Show password'}
    >
      {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
    </button>
  );

  return (
    <AuthShell
      title="Create your account"
      subtitle="Your AI support assistant, ready in minutes."
      footer={
        <>
          Already have an account?{' '}
          <Link href="/sign-in" className="font-semibold text-soft hover:underline">
            Log in
          </Link>
        </>
      }
    >
      <GoogleSignInButton label="Sign up with Google" />

      <div className="flex items-center gap-3 py-2 text-xs uppercase tracking-widest text-white/30">
        <span className="h-px flex-1 bg-white/10" /> or <span className="h-px flex-1 bg-white/10" />
      </div>

      <form onSubmit={handleSignUp} className="space-y-3">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="field" />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="field pr-12"
          />
          {eye}
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="field pr-12"
          />
          {eye}
        </div>

        {mismatch && <p className="text-center text-sm text-red-300">Passwords do not match.</p>}
        {error && <p className="text-center text-sm text-red-300">{error.message}</p>}

        <button type="submit" disabled={loading} className="btn-pill mt-2 w-full disabled:opacity-60">
          {loading ? 'Creating account…' : 'Get started'}
        </button>
      </form>
    </AuthShell>
  );
};

export default SignUp;
