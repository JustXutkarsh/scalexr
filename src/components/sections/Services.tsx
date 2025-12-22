import { useRef, useEffect, useState } from 'react';
import { Bot, Globe, Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Bot,
    title: "AI Business Automation",
    description: "Let AI handle your customer interactions while you focus on what matters.",
    features: [
      "AI calling agent that never misses a lead",
      "Automated appointment booking & reminders",
      "AI receptionist for website & WhatsApp",
      "Smart lead management & follow-ups",
      "Review collection & CRM automation"
    ],
    highlight: "Most Popular"
  },
  {
    icon: Globe,
    title: "High-Converting Websites",
    description: "Beautiful, fast websites designed to turn visitors into customers.",
    features: [
      "Modern, mobile-first business websites",
      "Landing pages optimized for conversion",
      "Google Business Profile optimization",
      "Lead capture & chatbot integration",
      "SEO & performance optimization"
    ],
    highlight: null
  }
];

const Services = () => {
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
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Everything you need to <span className="text-primary">scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two powerful service packages designed to transform your local business into a lead-generating machine.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Highlight badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-8 z-20">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-primary rounded-full text-sm font-semibold text-primary-foreground glow-sm">
                    <Zap className="w-3.5 h-3.5" />
                    {service.highlight}
                  </div>
                </div>
              )}

              {/* Card */}
              <div className="h-full p-8 rounded-2xl glass glow-border hover:glow transition-all duration-300">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className={`flex items-start gap-3 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${index * 150 + featureIndex * 50 + 400}ms` }}
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  className="w-full group/btn"
                  variant={service.highlight ? "default" : "outline"}
                  onClick={() => window.open('https://calendly.com', '_blank')}
                >
                  <span>Get Started</span>
                  <Zap className="w-4 h-4 ml-2 transition-transform group-hover/btn:scale-110" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
