'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header({ isLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    console.log("User logged out");
  };

  const handleNavigation = (path) => {
    if (typeof window !== "undefined") {
      router.push(path);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" onClick={() => handleNavigation('/')}>
          HelpBot
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => handleNavigation('/contact')}>Contact</a>
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
                  <li><a onClick={() => handleNavigation('/profile')}>Profile</a></li>
                  <li><a onClick={handleLogout}>Logout</a></li>
                </ul>
              </details>
            </li>
          ) : (
            <li>
              <a onClick={() => handleNavigation('/login')}>Login</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
