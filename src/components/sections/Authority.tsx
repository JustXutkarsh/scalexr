import { useRef, useEffect, useState } from 'react';
import { Shield, Zap, Clock, BarChart3, MessageSquare, Calendar } from 'lucide-react';

const stats = [
  { value: "24/7", label: "AI Availability" },
  { value: "< 3s", label: "Response Time" },
  { value: "100%", label: "Lead Capture" },
  { value: "∞", label: "Scalability" }
];

const techStack = [
  { icon: Zap, label: "AI Voice Agents" },
  { icon: MessageSquare, label: "Smart Chatbots" },
  { icon: Calendar, label: "Auto Scheduling" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Shield, label: "Secure Systems" },
  { icon: Clock, label: "Real-time Sync" }
];

const Authority = () => {
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
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Technology</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Built with <span className="text-primary">cutting-edge</span> AI
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We leverage the most advanced automation technology to deliver results that matter.
          </p>
        </div>

        {/* Stats row */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl glass"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 glow-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* System visualization */}
        <div 
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="p-8 rounded-2xl glass glow-border">
            {/* Mock dashboard/system visual */}
            <div className="relative">
              {/* Header bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="text-sm text-muted-foreground">Autonix Automation Dashboard</div>
                <div className="w-20" />
              </div>

              {/* Tech stack grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-4 rounded-xl bg-surface-elevated/50 transition-all duration-500 hover:bg-primary/10 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 600}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <tech.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-sm">{tech.label}</span>
                  </div>
                ))}
              </div>

              {/* Activity indicators */}
              <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-muted-foreground">All systems operational</span>
                </div>
                <div className="text-muted-foreground">Last sync: Just now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div 
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-muted-foreground">
            <Shield className="w-4 h-4 inline-block mr-2 text-primary" />
            Enterprise-grade security • GDPR compliant • 99.9% uptime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Authority;
