import { useRef, useEffect, useState, useCallback } from 'react';
import CircleHighlight from '../CircleHighlight';

const principles = [
  {
    id: 'ai-foundation',
    title: "AI is the foundation, not an add-on",
    content: "We don't add AI to existing workflows. We design systems where automation and intelligence are the default, so businesses run consistently without constant human intervention.",
    implication: "Reduces dependency on staff availability and manual follow-ups."
  },
  {
    id: 'local-operations',
    title: "Built for real local operations",
    content: "We work only with service-based businesses that rely on calls, messages, and bookings. Systems are designed around real customer behavior, not software demos.",
    implication: "Less complexity, higher adoption, faster ROI."
  },
  {
    id: 'revenue-metric',
    title: "Revenue is the only metric that matters",
    content: "We don't optimize for dashboards or vanity metrics. If a system doesn't increase captured leads, confirmed bookings, or response speed, we don't build it.",
    implication: "Every automation has a measurable business outcome."
  },
  {
    id: 'scale-systems',
    title: "Systems that scale without breaking",
    content: "Our automations are built to handle growth from day one. As volume increases, systems absorb it without bottlenecks or constant rework.",
    implication: "You don't outgrow what we build."
  }
];

const OperatingPrinciples = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activePrinciple, setActivePrinciple] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (sectionRect.top >= viewportHeight || sectionRect.bottom <= 0) return;

    // Progress based on how far the top of the section has scrolled past the top of the viewport
    const scrolled = -sectionRect.top;
    const totalScrollable = sectionRect.height - viewportHeight;

    if (totalScrollable <= 0) return;

    const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));
    const newActive = Math.min(principles.length - 1, Math.floor(progress * principles.length));
    setActivePrinciple(newActive);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handlePrincipleClick = (index: number) => {
    setActivePrinciple(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      // ~60vh per principle for a lighter, faster scroll
      style={{ height: `${principles.length * 60 + 40}vh` }}
    >
      {/* Sticky container that stays pinned for the entire section scroll */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section label */}
          <div
            className={`mb-3 sm:mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-primary/70 font-medium text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em]">
              OUR APPROACH
            </span>
          </div>

          {/* Headline */}
          <div
            className={`mb-10 sm:mb-14 lg:mb-20 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground max-w-xl leading-tight">
              How <CircleHighlight>Autonix</CircleHighlight> actually builds automation
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16">
            {/* Left column - Navigation */}
            <div
              className={`lg:w-[32%] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative">
                {/* Vertical line indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border/30" />

                {/* Active indicator */}
                <div
                  className="absolute left-0 w-px bg-primary transition-all duration-500 ease-out"
                  style={{
                    top: `${activePrinciple * 25}%`,
                    height: '25%'
                  }}
                />

                {/* Principle titles */}
                <div className="space-y-0">
                  {principles.map((principle, index) => (
                    <button
                      key={principle.id}
                      onClick={() => handlePrincipleClick(index)}
                      className={`w-full text-left py-2.5 sm:py-3 lg:py-6 pl-3 sm:pl-4 lg:pl-6 transition-all duration-300 ${
                        activePrinciple === index
                          ? 'text-foreground'
                          : 'text-muted-foreground/50 hover:text-muted-foreground/80'
                      }`}
                    >
                      <span className={`text-xs sm:text-sm lg:text-lg font-medium leading-snug transition-all duration-300`}>
                        {principle.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Content */}
            <div
              className={`lg:w-[68%] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="min-h-[140px] sm:min-h-[180px] lg:min-h-[280px] relative">
                {principles.map((principle, index) => (
                  <div
                    key={principle.id}
                    className={`transition-all duration-500 ${
                      activePrinciple === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 absolute top-0 left-0 right-0 pointer-events-none translate-y-4'
                    }`}
                  >
                    {activePrinciple === index && (
                      <div className="space-y-3 sm:space-y-5 lg:space-y-8">
                        <p className="text-sm sm:text-base lg:text-xl xl:text-2xl text-foreground/90 leading-relaxed font-light">
                          {principle.content}
                        </p>

                        <div className="pt-2 sm:pt-3 lg:pt-4">
                          <p className="text-xs sm:text-sm text-muted-foreground/70 leading-relaxed">
                            <span className="text-primary/60 mr-2">→</span>
                            {principle.implication}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing line */}
          <div
            className={`mt-12 sm:mt-16 lg:mt-24 pt-8 sm:pt-10 lg:pt-12 border-t border-border/20 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <p className="text-muted-foreground/60 text-sm sm:text-base lg:text-lg italic max-w-2xl">
              "This is why our systems feel boring to competitors — and powerful to clients."
            </p>
          </div>

          {/* Disclaimer */}
          <div
            className={`mt-4 sm:mt-6 lg:mt-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <p className="text-[10px] sm:text-xs text-muted-foreground/40">
              Results vary based on business type, existing processes, and implementation scope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingPrinciples;
