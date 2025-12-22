import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Services from '@/components/sections/Services';
import WhyScaleX from '@/components/sections/WhyScaleX';
import Authority from '@/components/sections/Authority';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <WhyScaleX />
      <Authority />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
