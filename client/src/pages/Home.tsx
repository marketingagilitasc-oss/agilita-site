/**
 * Home — Página principal do site Agilita Regularização
 * Design: Warm Corporate / Boutique Imobiliária Brasileira
 * Seções: Navbar → Hero → Stats → Services → About → CTA → Contact → Footer
 * + WhatsApp Button flutuante + Edit Panel
 */

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { CoverageMapSection } from '@/components/CoverageMapSection';
import { MapSection } from '@/components/MapSection';
import { CtaBanner } from '@/components/CtaBanner';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { EditPanel } from '@/components/EditPanel';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <CoverageMapSection />
      <MapSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <EditPanel />
    </div>
  );
}
