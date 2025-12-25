import { useState, useEffect } from 'react';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import IntegrationBar from '@/components/sections/IntegrationBar';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import WhyScaleX from '@/components/sections/WhyScaleX';
import OperatingPrinciples from '@/components/sections/OperatingPrinciples';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import IntroSequence from '@/components/IntroSequence';
import WhatsAppWidget from '@/components/WhatsAppWidget';

const Index = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check if intro was already seen this session
    const introSeen = sessionStorage.getItem('scaleX-intro-seen');

    if (prefersReducedMotion || introSeen) {
      setContentVisible(true);
    } else {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setContentVisible(true);
  };

  return (
    <>
      {showIntro && <IntroSequence onComplete={handleIntroComplete} />}
      
      <div 
        className={`min-h-screen bg-background text-foreground transition-opacity duration-500 ${
          contentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <Hero />
        <IntegrationBar />
        <Problem />
        <Solution />
        <WhyScaleX />
        <OperatingPrinciples />
        <CTA />
        <Footer />
        <WhatsAppWidget />
      </div>
    </>
  );
};

export default Index;
