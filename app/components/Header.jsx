'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Import Link from next/link

export default function Header({ isLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  const handleLogout = async () => {
    // Implement logout functionality here
    console.log("User logged out");
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          HelpBot
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <details open={menuOpen} onClick={handleMenuToggle}>
                <summary className="btn btn-ghost">
                  Profile
                  <svg className="ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </summary>
                <ul className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link href="/profile">Profile</Link></li>
                  <li><a onClick={handleLogout}>Logout</a></li>
                </ul>
              </details>
            </li>
          ) : (
            <li>
              <Link href="/sign-in">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
