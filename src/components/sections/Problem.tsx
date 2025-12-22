import { useRef, useEffect, useState } from 'react';

const assumptions = [
  "We answer most customer calls.",
  "Bookings are under control.",
  "We reply quickly enough.",
  "Our website looks professional."
];

const realities = [
  { text: "Missed calls = ", highlight: "lost revenue", suffix: ". Customers don't wait." },
  { text: "", highlight: "Manual booking", suffix: " kills momentum." },
  { text: "", highlight: "Slow replies", suffix: " lose conversions." },
  { text: "Websites that don't convert ", highlight: "waste traffic", suffix: "." }
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          
          {/* Left column - Assumptions */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-lg font-medium text-muted-foreground/60 mb-8 uppercase tracking-wider">
              What most businesses assume
            </h3>
            <ul className="space-y-6">
              {assumptions.map((item, index) => (
                <li
                  key={index}
                  className={`text-lg lg:text-xl text-muted-foreground/50 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Reality */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="text-lg font-medium text-foreground mb-8 uppercase tracking-wider">
              What's actually happening
            </h3>
            <ul className="space-y-6">
              {realities.map((item, index) => (
                <li
                  key={index}
                  className={`text-lg lg:text-xl text-foreground/90 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  {item.text}
                  <span className="text-primary font-semibold">{item.highlight}</span>
                  {item.suffix}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Transition text */}
        <div 
          className={`text-center mt-20 lg:mt-24 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
            The problem isn't effort.
            <br />
            <span className="text-foreground font-medium">It's the lack of automation.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
