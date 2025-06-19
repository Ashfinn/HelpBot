'use client'
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
// Ensure all component imports use correct paths relative to app/page.jsx
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Feature from './components/Feature.jsx';
import Testimonial from './components/Testimonial.jsx';
import Pricing from './components/Pricing.jsx';
import Founders from './components/Founders.jsx';
import Hero from './components/Hero.jsx';
import Modal from './components/ChatModal.jsx';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const router = useRouter();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const checkLoginStatus = () => {
      const user = sessionStorage.getItem('user');
      if (user) {
        setIsLoggedIn(true);
        setUserEmail(user);
      }
    };
    checkLoginStatus();
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//code.tidio.co/krqixenaacagu6fl0wvcg2h5mf0jjfj2.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserEmail('');
    router.push('/sign-in');
  };

  const handleOpenModal = (message) => {
    setModalMessage(message);
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header isLoggedIn={isLoggedIn} />
      {isLoggedIn && (
        <div className="fixed top-20 right-4 z-50">
          <button 
            className="btn btn-outline btn-error btn-sm shadow-lg hover:shadow-xl transition-all duration-300" 
            onClick={handleLogout}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      )}
      
      <Hero onButtonClick={() => handleOpenModal('Welcome to HelpBot! How can we assist you today?')} />
      
      <Modal
        open={modalOpen}
        handleClose={handleCloseModal}
        message={modalMessage}
      />
      
      <Feature />
      <Founders className="container mx-auto my-10" />
      <Pricing />
      <Testimonial />
      <Footer />
    </div>
  );
}