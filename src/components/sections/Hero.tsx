import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient spotlight */}
        <div className="absolute inset-0 gradient-spotlight" />
        
        {/* Animated orbs */}
        <div 
          className={`absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl transition-all duration-1000 ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <div 
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ animation: 'float 10s ease-in-out infinite reverse' }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-sm mb-8 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground/90">AI-Powered Business Automation</span>
        </div>

        {/* Main headline */}
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-foreground">Scale your business with</span>
          <br />
          <span className="text-primary glow-text">AI-powered automation</span>
        </h1>

        {/* Subheadline */}
        <p 
          className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Turn missed calls into booked appointments. Automate your customer journey 
          and watch your revenue grow on autopilot.
        </p>

        {/* CTAs */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button 
            size="lg" 
            className="group relative overflow-hidden glow px-8 py-6 text-lg font-semibold"
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Free Automation Audit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-6 text-lg font-semibold border-border/50 hover:border-primary/50 hover:bg-primary/5"
            onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See How It Works
          </Button>
        </div>

        {/* Abstract visualization */}
        <div 
          className={`mt-16 lg:mt-24 relative transition-all duration-1000 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Glowing card representation */}
            <div className="relative glass rounded-2xl p-8 glow-border overflow-hidden">
              {/* Animated flow lines */}
              <svg className="w-full h-48 sm:h-64" viewBox="0 0 800 200" fill="none">
                {/* Connection lines */}
                <path 
                  d="M100 100 Q200 50 300 100 T500 100 T700 100" 
                  stroke="url(#gradient1)" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="8 4"
                  className="animate-pulse"
                />
                <path 
                  d="M100 100 Q200 150 300 100 T500 100 T700 100" 
                  stroke="url(#gradient2)" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="8 4"
                  className="animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />
                
                {/* Nodes */}
                <circle cx="100" cy="100" r="20" fill="hsl(var(--primary))" className="animate-pulse-glow" />
                <circle cx="300" cy="100" r="16" fill="hsl(var(--primary) / 0.7)" className="animate-pulse-glow" style={{ animationDelay: '0.2s' }} />
                <circle cx="500" cy="100" r="16" fill="hsl(var(--primary) / 0.7)" className="animate-pulse-glow" style={{ animationDelay: '0.4s' }} />
                <circle cx="700" cy="100" r="20" fill="hsl(var(--primary))" className="animate-pulse-glow" style={{ animationDelay: '0.6s' }} />
                
                {/* Labels */}
                <text x="100" y="150" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">Lead</text>
                <text x="300" y="150" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">AI Response</text>
                <text x="500" y="150" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">Booking</text>
                <text x="700" y="150" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">Revenue</text>
                
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
