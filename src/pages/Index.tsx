import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ProductosSection from '@/components/ProductosSection';
import ClientesSection from '@/components/ClientesSection';
import SustentabilidadSection from '@/components/SustentabilidadSection';
import LeasingSection from '@/components/LeasingSection';
import QuienesSomosSection from '@/components/QuienesSomosSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

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
      <SEO
        title="Insumos de impresión y Servicios de impresión sustentable"
        description="Black Colors Eco Print - Venta de impresoras, toners, cartuchos y servicios de impresión sustentable. Leasing de equipos, servicio técnico y soluciones integrales para empresas."
        keywords="impresoras, toners, cartuchos, leasing de impresoras, servicio técnico, impresión sustentable, alquiler de impresoras, soluciones de impresión, Black Colors"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Black Colors Eco Print - Soluciones de impresión sustentable",
          "description": "Empresa líder en venta de impresoras, toners, cartuchos y servicios de impresión sustentable en Paraguay.",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Black Colors Eco Print",
            "image": "https://blackcolors.com.py/images/logos/logo-mejorado-removebg-preview.png",
            "telephone": "+595-982-343-128",
            "email": "mkt@blackcolors.com.py",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Paraguay",
              "addressLocality": "Asunción"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "17:30"
            }
          }
        }}
      />
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
