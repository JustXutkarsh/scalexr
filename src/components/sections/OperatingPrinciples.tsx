import { useState, useRef, useEffect } from 'react';
import { Search, Globe, Bot, TrendingUp, FileSearch, DollarSign, Target, LayoutTemplate, Megaphone, FormInput, Zap, Settings, MessageSquare, Calendar, Users, MailCheck, Route, TestTube, MessageCircle, Gauge, ArrowRight, ChevronDown } from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: 'Strategy & Audit',
    summary: 'One blueprint before we build.',
    icon: Search,
    details: [
      { icon: FileSearch, text: 'Business audit + journey mapping' },
      { icon: DollarSign, text: 'Revenue leak identification' },
      { icon: Target, text: 'Define automation KPIs' },
      { icon: LayoutTemplate, text: 'System blueprint creation' },
    ],
  },
  {
    num: '02',
    title: 'Acquisition Layer',
    summary: 'Turn traffic into qualified leads.',
    icon: Globe,
    details: [
      { icon: Megaphone, text: 'SEO-friendly structure' },
      { icon: FormInput, text: 'High-converting layout + copy' },
      { icon: Zap, text: 'Lead capture + tracking' },
      { icon: Settings, text: 'Automation-ready infrastructure' },
    ],
  },
  {
    num: '03',
    title: 'Conversion Layer',
    summary: 'Automate responses and bookings.',
    icon: Bot,
    details: [
      { icon: MessageSquare, text: 'AI instant responses' },
      { icon: Calendar, text: 'Booking system integration' },
      { icon: Users, text: 'CRM setup' },
      { icon: MailCheck, text: 'Follow-ups + no-show flows' },
      { icon: Route, text: 'Lead routing + data organization' },
    ],
  },
  {
    num: '04',
    title: 'Optimization & Scaling',
    summary: 'Refine and compound performance.',
    icon: TrendingUp,
    details: [
      { icon: TestTube, text: 'End-to-end system testing' },
      { icon: TrendingUp, text: 'Conversion optimization' },
      { icon: MessageCircle, text: 'Real conversation simulations' },
      { icon: Gauge, text: 'Performance tuning' },
    ],
  },
];

const OperatingPrinciples = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 bg-background overflow-hidden">
      {/* Ambient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[450px] h-[450px] bg-primary/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-[15%] right-[15%] w-[350px] h-[350px] bg-blue-500/[0.025] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary/60 font-semibold text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-4 block">
            SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] mb-5">
            The Autonix{' '}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Growth Pillars
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            A 4-Layer Automation Architecture
          </p>
        </div>

        {/* === Desktop Pillars === */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          {/* Flow line */}
          <div className={`relative h-px mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
            {/* Animated pulse on the line */}
            <div
              className="absolute top-[-2px] h-[5px] w-24 rounded-full bg-primary/30 blur-sm"
              style={{
                animation: isVisible ? 'flowPulse 3s ease-in-out infinite' : 'none',
              }}
            />
          </div>

          <div className="grid grid-cols-4 gap-4 xl:gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              const isHovered = hoveredPillar === i;
              const isDimmed = hoveredPillar !== null && hoveredPillar !== i;

              return (
                <div
                  key={pillar.num}
                  className={`relative transition-all duration-500 ease-out cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                  style={{
                    transitionDelay: isVisible ? `${300 + i * 120}ms` : '0ms',
                    perspective: '800px',
                  }}
                  onMouseEnter={() => setHoveredPillar(i)}
                  onMouseLeave={() => setHoveredPillar(null)}
                >
                  <div
                    className={`relative rounded-2xl border transition-all duration-500 ease-out overflow-hidden ${
                      isHovered
                        ? 'border-primary/40 scale-[1.02]'
                        : isDimmed
                          ? 'border-border/10 opacity-50 scale-[0.98]'
                          : 'border-border/20'
                    }`}
                    style={{
                      minHeight: isHovered ? '420px' : '320px',
                      background: isHovered
                        ? 'linear-gradient(180deg, hsl(var(--card) / 0.95) 0%, hsl(var(--primary) / 0.06) 100%)'
                        : 'linear-gradient(180deg, hsl(var(--card) / 0.6) 0%, hsl(var(--card) / 0.3) 100%)',
                      boxShadow: isHovered
                        ? '0 0 60px -15px hsl(var(--primary) / 0.2), inset 0 1px 0 0 hsl(var(--primary) / 0.15)'
                        : 'inset 0 1px 0 0 hsl(var(--border) / 0.08)',
                    }}
                  >
                    {/* Top glow bar */}
                    <div
                      className={`h-[2px] transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-30'}`}
                      style={{
                        background: `linear-gradient(90deg, transparent, hsl(var(--primary) / ${isHovered ? '0.8' : '0.3'}), transparent)`,
                      }}
                    />

                    <div className="p-6 xl:p-7 flex flex-col h-full">
                      {/* Number */}
                      <span className={`text-[10px] font-bold uppercase tracking-[0.25em] mb-6 transition-colors duration-500 ${isHovered ? 'text-primary' : 'text-muted-foreground/30'}`}>
                        {pillar.num}
                      </span>

                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 border ${
                          isHovered ? 'border-primary/30 bg-primary/10' : 'border-border/15 bg-card/50'
                        }`}
                      >
                        <Icon className={`w-5 h-5 transition-colors duration-500 ${isHovered ? 'text-primary' : 'text-muted-foreground/40'}`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg xl:text-xl font-bold text-foreground mb-2 leading-snug">
                        {pillar.title}
                      </h3>

                      {/* Summary */}
                      <p className={`text-sm leading-relaxed transition-colors duration-500 ${isHovered ? 'text-muted-foreground' : 'text-muted-foreground/50'}`}>
                        {pillar.summary}
                      </p>

                      {/* Expanded details */}
                      <div
                        className={`mt-auto pt-5 transition-all duration-500 overflow-hidden ${
                          isHovered ? 'opacity-100 max-h-[300px]' : 'opacity-0 max-h-0'
                        }`}
                      >
                        <div className="w-8 h-px bg-primary/20 mb-4" />
                        <ul className="space-y-2.5">
                          {pillar.details.map((d, j) => {
                            const DIcon = d.icon;
                            return (
                              <li
                                key={j}
                                className="flex items-center gap-2.5"
                                style={{
                                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                                  transitionDelay: isHovered ? `${j * 60}ms` : '0ms',
                                  opacity: isHovered ? 1 : 0,
                                  transform: isHovered ? 'translateX(0)' : 'translateX(-8px)',
                                }}
                              >
                                <DIcon className="w-3.5 h-3.5 text-primary/40 shrink-0" />
                                <span className="text-sm text-foreground/60">{d.text}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* === Mobile Accordion === */}
        <div className="lg:hidden max-w-lg mx-auto space-y-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isOpen = expandedMobile === i;

            return (
              <div
                key={pillar.num}
                className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <button
                  onClick={() => setExpandedMobile(isOpen ? null : i)}
                  className={`w-full text-left rounded-xl border p-5 transition-all duration-400 tap-target ${
                    isOpen
                      ? 'border-primary/30 bg-card/80'
                      : 'border-border/15 bg-card/30'
                  }`}
                  style={{
                    boxShadow: isOpen ? '0 0 30px -10px hsl(var(--primary) / 0.15)' : 'none',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-400 border ${
                      isOpen ? 'border-primary/30 bg-primary/10' : 'border-border/15 bg-card/50'
                    }`}>
                      <Icon className={`w-4 h-4 transition-colors duration-400 ${isOpen ? 'text-primary' : 'text-muted-foreground/40'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${isOpen ? 'text-primary' : 'text-muted-foreground/30'}`}>
                          {pillar.num}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-foreground leading-snug">{pillar.title}</h3>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground/30 shrink-0 transition-transform duration-400 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Summary always visible */}
                  <p className="text-sm text-muted-foreground/50 mt-2 ml-14">{pillar.summary}</p>

                  {/* Expanded */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
                  >
                    <div className="ml-14 pt-3 border-t border-border/10 space-y-2.5">
                      {pillar.details.map((d, j) => {
                        const DIcon = d.icon;
                        return (
                          <div key={j} className="flex items-center gap-2.5">
                            <DIcon className="w-3.5 h-3.5 text-primary/40 shrink-0" />
                            <span className="text-sm text-foreground/60">{d.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 sm:mt-20 lg:mt-24 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground/40 text-xs uppercase tracking-[0.2em] mb-6">
            4 Pillars. 4 Weeks. One Engineered System.
          </p>
          <a
            href="https://calendly.com/autonix_agency/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all text-sm sm:text-base hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] w-full sm:w-auto"
          >
            Book Strategy Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Flow pulse animation */}
      <style>{`
        @keyframes flowPulse {
          0%, 100% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: calc(100% - 6rem); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default OperatingPrinciples;
