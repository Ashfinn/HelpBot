'use client';

import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import AuthShell from '@/app/components/AuthShell';
import GoogleSignInButton from '@/app/components/GoogleSignInButton';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async (e) => {
    e?.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        sessionStorage.setItem('user', email);
        setEmail('');
        setPassword('');
        router.push('/');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to continue to HelpBot."
      footer={
        <>
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="font-semibold text-soft hover:underline">
            Sign up
          </Link>
        </>
      }
    >
      <GoogleSignInButton />

      <div className="flex items-center gap-3 py-2 text-xs uppercase tracking-widest text-white/30">
        <span className="h-px flex-1 bg-white/10" /> or <span className="h-px flex-1 bg-white/10" />
      </div>

      <form onSubmit={handleSignIn} className="space-y-3">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="field" />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="field pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-white/40 hover:text-white"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          </button>
        </div>

        {error && <p className="text-center text-sm text-red-300">{error.message}</p>}

        <button type="submit" disabled={loading} className="btn-pill mt-2 w-full disabled:opacity-60">
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </AuthShell>
  );
};

export default SignIn;
