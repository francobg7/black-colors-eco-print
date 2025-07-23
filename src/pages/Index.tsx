
import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ProductosSection from '@/components/ProductosSection';
import ClientesSection from '@/components/ClientesSection';
import SustentabilidadSection from '@/components/SustentabilidadSection';
import LeasingSection from '@/components/LeasingSection';
import QuienesSomosSection from '@/components/QuienesSomosSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setTimeout(() => setHeroLoaded(true), 200);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeroSection heroLoaded={heroLoaded} scrollY={scrollY} />
      <QuienesSomosSection />
      <ProductosSection />
      <LeasingSection />
      <SustentabilidadSection />
      <ClientesSection />
      <Footer />
    </>
  );
};

export default Index;
