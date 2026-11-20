'use client';
import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Feature from './components/Feature.jsx';
import Testimonial from './components/Testimonial.jsx';
import Pricing from './components/Pricing.jsx';
import Founders from './components/Founders.jsx';
import Hero from './components/Hero.jsx';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('user')) setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/krqixenaacagu6fl0wvcg2h5mf0jjfj2.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-ink text-soft">
      <Header isLoggedIn={isLoggedIn} />
      <Hero />
      <Feature />
      <Founders />
      <Pricing />
      <Testimonial />
      <Footer />
    </div>
  );
}
