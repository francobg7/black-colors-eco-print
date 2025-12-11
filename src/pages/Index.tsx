import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ProductosSection from '@/components/ProductosSection';
import ClientesSection from '@/components/ClientesSection';
import SustentabilidadSection from '@/components/SustentabilidadSection';
import LeasingSection from '@/components/LeasingSection';
import QuienesSomosSection from '@/components/QuienesSomosSection';
import FAQSection from '@/components/FAQSection';
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

  // FAQ items corregidos y consistentes con la información del proyecto
  const faqItems = [
    {
      question: '¿Dónde puedo alquilar impresoras en Asunción?',
      answer: 'Black Colors ofrece servicio de alquiler de impresoras Brother en Asunción con planes flexibles mensuales. Incluimos mantenimiento preventivo y correctivo, soporte técnico 24/7.'
    },
    {
      question: '¿Qué tipos de toners y cartuchos manejan?',
      answer: 'Manejamos toners importados compatibles para Brother, HP, Canon y otras marcas principales. Ofrecemos cartuchos XXL importados de alta calidad que brindan mayor rendimiento y economía. Todos nuestros productos tienen garantía de calidad.'
    },
    {
      question: '¿Black Colors tiene servicio técnico especializado?',
      answer: 'Sí, somos especialistas en equipos Brother con servicio técnico certificado. Utilizamos repuestos originales Brother y ofrecemos mantenimiento preventivo mensual, reparaciones correctivas inmediatas y soporte técnico avanzado con monitoreo remoto.'
    },
    {
      question: '¿Cómo funciona el leasing sustentable de equipos?',
      answer: 'Nuestro leasing sustentable incluye alquiler de impresoras Brother de última generación, suministro continuo de insumos, gestión responsable de desechos mediante tecnología RMO y mantenimiento completo. Sin inversión inicial, solo pagas por el uso.'
    },
    {
      question: '¿Qué equipos de impresión adicionales ofrecen?',
      answer: 'Además de impresoras, ofrecemos scanners, destructoras de papel, etiquetadoras, rotuladoras y UPS. Todos con servicio técnico especializado y garantía. Ideales para completar tu infraestructura de oficina with equipos confiables.'
    },
    {
      question: '¿BlackColors atiende en todo Paraguay?',
      answer: 'Sí, BlackColors brinda servicios en todo Paraguay desde nuestra sede en Asunción. Realizamos entregas nacionales y para alquileres y leasing ofrecemos instalación, soporte técnico in-situ y gestión completa de equipos.'
    }
  ];

  return (
    <>
      <SEO
        title="Insumos de impresión y Servicios de impresión sustentable"
        description="Black Colors - Venta de impresoras, toners, cartuchos y servicios de impresión sustentable. Leasing de equipos, servicio técnico y soluciones integrales para empresas."
        keywords="alquiler de impresoras, toners importados, cartuchos XXL, equipos de impresión, impresión sustentable, black colors, blackcolors, Brother Paraguay, servicio técnico impresoras, leasing impresoras Asunción"
        includeNavigation={true}
        navigationContext="home"
        localBusiness={{
          name: 'Black Colors',
          address: {
            streetAddress: 'Zona Centro',
            addressLocality: 'Asunción', 
            addressRegion: 'Central',
            addressCountry: 'Paraguay'
          },
          geo: {
            latitude: -25.2637,
            longitude: -57.5759
          },
          openingHours: [
            'Mo-Fr 08:00-18:00',
            'Sa 09:00-13:00'
          ],
          priceRange: '$$',
          paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer', 'Check', 'Debit Card'],
          currenciesAccepted: 'PYG,USD'
        }}
        faqItems={faqItems}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Black Colors - Soluciones de impresión sustentable",
          "description": "Empresa líder en venta de impresoras, toners, cartuchos y servicios de impresión sustentable en Paraguay.",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Black Colors",
            "image": "https://blackcolors.com.py/images/logos/black_colors-negro_color.png",
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
      <FAQSection 
        faqItems={faqItems}
        title="Preguntas Frecuentes"
        subtitle="Encuentra respuestas sobre impresión sustentable, alquiler de equipos y nuestros servicios especializados"
      />
      
      <Footer />
    </>
  );
};

export default Index;
