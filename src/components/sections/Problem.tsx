import { useRef, useEffect, useState } from 'react';
import { PhoneOff, Calendar, Clock, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: PhoneOff,
    title: "Missed calls = missed revenue",
    description: "Every unanswered call is a customer going to your competitor."
  },
  {
    icon: Calendar,
    title: "Manual booking chaos",
    description: "Hours wasted on back-and-forth scheduling when AI could handle it."
  },
  {
    icon: Clock,
    title: "Slow response times",
    description: "Customers expect instant replies. Delays cost you conversions."
  },
  {
    icon: TrendingDown,
    title: "Websites that don't convert",
    description: "A pretty site means nothing if it doesn't generate leads."
  }
];

const Problem = () => {
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
      { threshold: 0.2 }
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
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Your business is <span className="text-primary">leaking money</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Most local businesses lose thousands every month to inefficiency. 
            Here's what's holding you back:
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl glass transition-all duration-700 hover:glow-border ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-4 right-4 w-2 h-8 bg-destructive/20 rounded-full" />
                <div className="absolute top-4 right-4 w-8 h-2 bg-destructive/20 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
