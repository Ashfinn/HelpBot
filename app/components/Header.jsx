'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaUserCircle, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';

export default function Header({ isLoggedIn }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const router = useRouter();
  const profileMenuRef = useRef(null);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleProfileMenuToggle = () => {
    setProfileMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    console.log("User logged out");
    sessionStorage.removeItem('user');
    setProfileMenuOpen(false);
    setMobileMenuOpen(false);
    router.push('/sign-in');
  };

  const handleClickOutside = (event) => {
    if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
      setProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const navLinks = [
    { name: '', href: '/' },
    { name: '', href: '/about' },
    { name: '', href: '/contact' },
    { name: '', href: '/help' },
  ];
  return (
    <header className="bg-white/10 backdrop-blur-lg shadow-2xl sticky top-0 z-50 animate-glow-in">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-once"
        >
          HelpBot
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-base-content/90 text-lg font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300 group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 ease-out"></span>
            </Link>
          ))}
          {isLoggedIn ? (
            <div className="relative" ref={profileMenuRef}>
              <button
                onClick={handleProfileMenuToggle}
                className="flex items-center px-5 py-2 bg-gradient-to-r from-base-200/50 to-base-100/50 rounded-full text-base-content/90 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaUserCircle className="mr-2 text-2xl" />
                Profile
                <svg
                  className={`ml-2 h-5 w-5 transition-transform duration-300 ${profileMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              {profileMenuOpen && (
                <ul className="absolute right-0 mt-3 w-60 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-primary/10 p-3 animate-slide-in-down">
                  <li>
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-3 text-base-content/90 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-lg transition-all duration-200 group"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      <FaUserCircle className="mr-3 text-lg group-hover:text-primary" />
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-3 text-base-content/90 hover:bg-gradient-to-r hover:from-error/10 hover:to-error/5 rounded-lg transition-all duration-200 group"
                    >
                      <FaSignOutAlt className="mr-3 text-lg group-hover:text-error" />
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link
              href="/sign-in"
              className="relative btn bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-base-content/90 hover:text-primary transition-all duration-300"
          onClick={handleMobileMenuToggle}
        >
          {mobileMenuOpen ? (
            <FaTimes className="w-7 h-7 animate-spin-in" />
          ) : (
            <FaBars className="w-7 h-7 animate-spin-in" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-base-100/95 to-base-200/90 backdrop-blur-lg z-40 md:hidden animate-slide-in-right">
          <div className="container mx-auto px-6 py-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-10">
              <Link
                href="/"
                className="text-3xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              >
                HelpBot
              </Link>
              <button
                onClick={handleMobileMenuToggle}
                className="text-base-content/90 hover:text-primary transition-all duration-300"
              >
                <FaTimes className="w-8 h-8 animate-spin-in" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base-content/90 text-2xl font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-accent px-4 py-3 rounded-lg hover:bg-base-200/50 transition-all duration-300"
                  onClick={handleMobileMenuToggle}
                >
                  {link.name}
                </Link>
              ))}
              {isLoggedIn ? (
                <>
                  <Link
                    href="/profile"
                    className="text-base-content/90 text-2xl font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-accent px-4 py-3 rounded-lg hover:bg-base-200/50 transition-all duration-300"
                    onClick={handleMobileMenuToggle}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-base-content/90 text-2xl font-semibold hover:text-error px-4 py-3 rounded-lg hover:bg-error/10 transition-all duration-300 text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/sign-in"
                  className="btn bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={handleMobileMenuToggle}
                >
                  Sign In
                </Link>
              )}
            </nav>
            <div className="flex-grow" />
            <p className="text-center text-base-content/60 text-sm mt-8">
              © 2025 HelpBot. All rights reserved.
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes glow-in {
          from {
            opacity: 0;
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          }
          to {
            opacity: 1;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
        }
        .animate-glow-in {
          animation: glow-in 0.8s ease-out forwards;
        }
        @keyframes pulse-once {
          0% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.9;
          }
        }
        .animate-pulse-once {
          animation: pulse-once 1.5s ease-out forwards;
        }
        @keyframes slide-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in-down {
          animation: slide-in-down 0.3s ease-out forwards;
        }
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.4s ease-out forwards;
        }
        @keyframes spin-in {
          from {
            transform: rotate(90deg);
            opacity: 0;
          }
          to {
            transform: rotate(0deg);
            opacity: 1;
          }
        }
        .animate-spin-in {
          animation: spin-in 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
}