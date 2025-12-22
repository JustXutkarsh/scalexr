import { useRef, useEffect, useState } from 'react';
import { Bot, Calendar, MessageSquare, Database, ArrowRight, Zap } from 'lucide-react';

const modules = [
  {
    icon: Bot,
    title: "AI Receptionist",
    description: "Answers every call & message instantly",
    position: "top-left"
  },
  {
    icon: Calendar,
    title: "Smart Booking",
    description: "Books appointments and sends reminders automatically",
    position: "top-right"
  },
  {
    icon: MessageSquare,
    title: "Lead Follow-ups",
    description: "Never lets a lead go cold",
    position: "bottom-left"
  },
  {
    icon: Database,
    title: "CRM Updates",
    description: "Your data stays organized without effort",
    position: "bottom-right"
  }
];

const Solution = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solution" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Solution</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Turn leads into bookings on <span className="text-primary">autopilot</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ScaleX captures every lead, books appointments automatically, and follows up without manual effort.
          </p>
        </div>

        {/* Friction removal line */}
        <div 
          className={`text-center mb-16 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-muted-foreground/70 text-sm">
            No new tools to learn. We integrate with what you already use.
          </p>
        </div>

        {/* System visual */}
        <div className="max-w-4xl mx-auto">
          {/* Desktop layout */}
          <div className="hidden lg:block relative">
            {/* Center hub */}
            <div 
              className={`relative z-20 w-64 h-64 mx-auto transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-primary/10 blur-xl" />
              <div className="relative w-full h-full rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground">ScaleX Automation Engine</h3>
                <p className="text-xs text-muted-foreground mt-1">Runs your customer journey automatically</p>
              </div>
            </div>

            {/* Connector lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ minHeight: '400px' }}
            >
              {/* Top-left connector */}
              <line 
                x1="25%" y1="25%" x2="42%" y2="42%"
                className={`stroke-primary/40 transition-all duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              {/* Top-right connector */}
              <line 
                x1="75%" y1="25%" x2="58%" y2="42%"
                className={`stroke-primary/40 transition-all duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '500ms' }}
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              {/* Bottom-left connector */}
              <line 
                x1="25%" y1="75%" x2="42%" y2="58%"
                className={`stroke-primary/40 transition-all duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              {/* Bottom-right connector */}
              <line 
                x1="75%" y1="75%" x2="58%" y2="58%"
                className={`stroke-primary/40 transition-all duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '700ms' }}
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Module cards positioned around center */}
            <div className="absolute inset-0 pointer-events-none" style={{ minHeight: '400px' }}>
              {modules.map((module, index) => {
                const positions: Record<string, string> = {
                  'top-left': 'top-0 left-0',
                  'top-right': 'top-0 right-0',
                  'bottom-left': 'bottom-0 left-0',
                  'bottom-right': 'bottom-0 right-0'
                };
                
                return (
                  <div
                    key={index}
                    className={`absolute ${positions[module.position]} pointer-events-auto w-52 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="p-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors group">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <module.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground">{module.title}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{module.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Spacer for absolute positioned elements */}
            <div className="h-80" />
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden">
            {/* Center hub - mobile */}
            <div 
              className={`relative w-48 h-48 mx-auto mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
              <div className="relative w-full h-full rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-sm text-foreground">ScaleX Automation Engine</h3>
                <p className="text-[10px] text-muted-foreground mt-1">Runs your customer journey automatically</p>
              </div>
            </div>

            {/* Module cards - mobile grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <module.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">{module.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{module.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Result indicator */}
        <div 
          className={`mt-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base">
            <span 
              className={`text-muted-foreground transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              Leads Captured
            </span>
            <ArrowRight 
              className={`w-4 h-4 text-primary transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '1000ms' }}
            />
            <span 
              className={`text-muted-foreground transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '1100ms' }}
            >
              Bookings Confirmed
            </span>
            <ArrowRight 
              className={`w-4 h-4 text-primary transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '1200ms' }}
            />
            <span 
              className={`text-primary font-semibold transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '1300ms' }}
            >
              Predictable Revenue
            </span>
          </div>
        </div>

        {/* CTA */}
        <div 
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <a 
            href="https://calendly.com/belalelshenawy11/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <span>Want to see this running for your business? Book a free automation audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solution;
