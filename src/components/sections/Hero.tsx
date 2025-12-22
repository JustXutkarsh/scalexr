import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2 } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const flowSteps = [
    { label: 'Lead comes in', delay: 0 },
    { label: 'AI responds instantly', delay: 150 },
    { label: 'Appointment booked', delay: 300 },
    { label: 'Revenue captured', delay: 450 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
        
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-0">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-8 transition-all duration-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Built for service-based businesses</span>
          </div>

          {/* Main Headline */}
          <h1 
            className={`mb-6 transition-all duration-500 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground/90 mb-2">
              Stop losing leads.
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary">
              Turn every inquiry into a booking with AI.
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-500 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            ScaleX answers every call, books appointments automatically, and follows up until the customer shows up.
          </p>

          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 transition-all duration-500 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex flex-col items-center">
              <Button 
                size="lg" 
                className="group px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                <span className="flex items-center gap-2">
                  Book a Free Automation Audit
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <span className="text-xs text-muted-foreground mt-3">
                Takes 15 minutes • No sales pitch
              </span>
            </div>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-border hover:border-primary/50 hover:bg-primary/5 rounded-full"
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See How It Works
            </Button>
          </div>

          {/* Trust Line */}
          <p 
            className={`text-sm text-muted-foreground/70 mb-16 transition-all duration-500 delay-400 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
          >
            No new tools. We integrate with what you already use.
          </p>

          {/* Flow Diagram */}
          <div 
            className={`w-full max-w-3xl transition-all duration-700 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative flex items-center justify-between px-4 sm:px-8">
              {/* Connecting Line */}
              <div className="absolute top-6 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent" />
              <div 
                className={`absolute top-6 left-[10%] h-[2px] bg-primary transition-all duration-1000 ease-out ${
                  mounted ? 'right-[10%]' : 'right-[90%]'
                }`}
                style={{ transitionDelay: '600ms' }}
              />
              
              {/* Flow Steps */}
              {flowSteps.map((step, index) => (
                <div 
                  key={step.label}
                  className={`relative flex flex-col items-center transition-all duration-500 ${
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${600 + step.delay}ms` }}
                >
                  {/* Node */}
                  <div className={`w-3 h-3 rounded-full bg-primary mb-4 ${
                    index === 0 || index === flowSteps.length - 1 ? 'ring-4 ring-primary/20' : ''
                  }`} />
                  
                  {/* Label */}
                  <span className="text-xs sm:text-sm text-muted-foreground text-center max-w-[80px] sm:max-w-none leading-tight">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 delay-700 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
