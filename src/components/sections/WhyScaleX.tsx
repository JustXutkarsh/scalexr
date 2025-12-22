import { useRef, useEffect, useState } from 'react';
import { Cpu, Target, TrendingUp, Layers, Rocket } from 'lucide-react';

const reasons = [
  {
    icon: Cpu,
    title: "AI-First Approach",
    description: "We don't just add AI—we build around it. Every system is designed with intelligent automation at its core."
  },
  {
    icon: Target,
    title: "Built for Local Business",
    description: "No generic solutions. Every workflow is tailored to the unique needs of service-based local businesses."
  },
  {
    icon: TrendingUp,
    title: "Revenue-Focused",
    description: "Our only metric is your growth. We build systems that directly impact your bottom line."
  },
  {
    icon: Layers,
    title: "Scalable Systems",
    description: "Not one-time setups. We create infrastructure that grows with your business."
  },
  {
    icon: Rocket,
    title: "Future-Ready Tech",
    description: "Stay ahead with cutting-edge AI and automation that evolves as technology advances."
  }
];

const WhyScaleX = () => {
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
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why ScaleX</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Not just another <span className="text-primary">agency</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're growth partners who understand that your success is our success. Here's what sets us apart.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl glass transition-all duration-700 hover:glow-border ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all group-hover:scale-110 group-hover:bg-primary/20">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyScaleX;
