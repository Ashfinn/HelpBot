'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiUser, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import Mascot from './Mascot';

const navLinks = [
  { name: 'Features', href: '/#features' },
  { name: 'Team', href: '/#team' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Reviews', href: '/#reviews' },
];

export default function Header({ isLoggedIn }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const profileMenuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onClick = (e) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target)) setProfileMenuOpen(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    document.addEventListener('mousedown', onClick);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousedown', onClick);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setProfileMenuOpen(false);
    setMobileMenuOpen(false);
    router.push('/sign-in');
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/[0.06] bg-ink/70 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-full shadow-[0_0_24px_rgba(103,186,244,.35)] ring-1 ring-white/20">
            <Mascot />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">HelpBot</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5 backdrop-blur md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm text-white/60 transition hover:bg-white/[0.06] hover:text-white"
            >
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          {isLoggedIn ? (
            <div className="relative" ref={profileMenuRef}>
              <button
                onClick={() => setProfileMenuOpen((p) => !p)}
                className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/30"
              >
                <FiUser /> Account
              </button>
              {profileMenuOpen && (
                <div className="glass absolute right-0 mt-3 w-52 p-2 shadow-2xl">
                  <Link
                    href="/profile"
                    onClick={() => setProfileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/80 hover:bg-white/[0.06]"
                  >
                    <FiUser /> Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/80 hover:bg-white/[0.06] hover:text-red-300"
                  >
                    <FiLogOut /> Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/sign-in" className="btn-pill !px-5 !py-2 !text-sm">
              Sign in
            </Link>
          )}
        </div>

        <button className="text-white/80 md:hidden" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="grain fixed inset-0 z-50 flex flex-col bg-ink px-6 py-5 md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-bold">HelpBot</span>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <FiX className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/[0.06] py-4 font-display text-3xl font-bold tracking-tight"
              >
                {l.name}
              </Link>
            ))}
          </nav>
          <div className="relative z-10 mt-auto">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="btn-ghost-pill w-full">
                <FiLogOut /> Log out
              </button>
            ) : (
              <Link href="/sign-in" onClick={() => setMobileMenuOpen(false)} className="btn-pill w-full">
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
