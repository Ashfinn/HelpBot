'use client'

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Feature from './components/Feature';
import Testimonial from './components/Testimonial';
import Pricing from './components/Pricing';
import Founders from './components/Founders';
import Hero from './components/Hero';
import About from './components/About';
import Modal from './components/ChatModal';

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
    <div className='' style={{ backgroundColor: '#ebebed' }}>
      <Header isLoggedIn={isLoggedIn} />
      {isLoggedIn && (
        <button className="btn btn-outline btn-secondary mt-4" onClick={handleLogout}>
          Logout
        </button>
      )}

      <Hero onButtonClick={() => handleOpenModal('This is an error message.')} />
      <Modal
        open={modalOpen}
        handleClose={handleCloseModal}
        message={modalMessage}
      />

      <About />

      <Feature />

      <Testimonial />

      <Founders className="container mx-auto my-10" />

      <Pricing />

      <Footer />
    </div>
  );
}
