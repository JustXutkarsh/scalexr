import { useRef, useEffect, useState } from 'react';
import { Bot, Calendar, MessageSquare, Database, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Bot,
    title: "AI Receptionist",
    description: "Answers calls & chats 24/7",
    color: "primary"
  },
  {
    icon: Calendar,
    title: "Smart Booking",
    description: "Automated scheduling & reminders",
    color: "primary"
  },
  {
    icon: MessageSquare,
    title: "Lead Follow-ups",
    description: "WhatsApp & email automation",
    color: "primary"
  },
  {
    icon: Database,
    title: "CRM Updates",
    description: "Everything syncs automatically",
    color: "primary"
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solution" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Solution</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Your business on <span className="text-primary">autopilot</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ScaleX automates your entire customer journey—from first contact to repeat business.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop flow */}
          <div className="hidden lg:block relative">
            <div className="flex justify-between items-start">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                >
                  {/* Card */}
                  <div className="w-48 p-6 rounded-2xl glass glow-border hover:glow transition-all duration-300 group">
                    <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:bg-primary/20">
                      <solution.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{solution.title}</h3>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>

                  {/* Arrow */}
                  {index < solutions.length - 1 && (
                    <div 
                      className={`absolute top-1/2 -right-8 -translate-y-1/2 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${index * 150 + 400}ms` }}
                    >
                      <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Connection line */}
            <div 
              className={`absolute top-[88px] left-[120px] right-[120px] h-0.5 transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
              style={{ 
                background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), hsl(var(--primary)), hsl(var(--primary) / 0.5), transparent)',
                transitionDelay: '600ms',
                transformOrigin: 'left'
              }}
            />
          </div>

          {/* Mobile flow */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl glass glow-border transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{solution.title}</h3>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result indicator */}
        <div 
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full glass glow">
            <span className="text-muted-foreground">Result:</span>
            <span className="text-xl font-bold text-primary">More leads. More bookings. More revenue.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
