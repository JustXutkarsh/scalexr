import { useRef, useEffect, useState } from 'react';
import { Search, Globe, Bot, Settings, ArrowRight, FileSearch, DollarSign, Target, LayoutTemplate, Megaphone, FormInput, Zap, MessageSquare, Calendar, Users, MailCheck, Route, Database, TestTube, TrendingUp, MessageCircle, Gauge } from 'lucide-react';

const phases = [
  {
    week: 'Week 1',
    title: 'Audit & System Strategy',
    summary: 'We map your customer journey and identify revenue leaks before building anything.',
    icon: Search,
    color: 'from-primary/20 to-primary/5',
    points: [
      { icon: FileSearch, text: 'Business audit + journey mapping' },
      { icon: DollarSign, text: 'Revenue leak identification' },
      { icon: Target, text: 'Define automation KPIs' },
      { icon: LayoutTemplate, text: 'System blueprint creation' },
    ],
  },
  {
    week: 'Week 2',
    title: 'Acquisition Layer',
    summary: 'We strengthen your website to capture and convert traffic.',
    icon: Globe,
    color: 'from-emerald-500/20 to-emerald-500/5',
    points: [
      { icon: Megaphone, text: 'SEO-friendly structure' },
      { icon: FormInput, text: 'High-converting layout + copy' },
      { icon: Zap, text: 'Lead capture forms + tracking' },
      { icon: Settings, text: 'Automation-ready infrastructure' },
    ],
  },
  {
    week: 'Week 3',
    title: 'Conversion Layer',
    summary: 'We install AI automation and booking systems.',
    icon: Bot,
    color: 'from-blue-500/20 to-blue-500/5',
    points: [
      { icon: MessageSquare, text: 'AI instant responses' },
      { icon: Calendar, text: 'Booking system integration' },
      { icon: Users, text: 'CRM setup' },
      { icon: MailCheck, text: 'Follow-ups + no-show flows' },
      { icon: Route, text: 'Lead routing + data organization' },
    ],
  },
  {
    week: 'Week 4',
    title: 'Optimization & Testing',
    summary: 'We simulate real scenarios and refine performance.',
    icon: Settings,
    color: 'from-amber-500/20 to-amber-500/5',
    points: [
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
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
          // Stagger card reveals
          phases.forEach((_, i) => {
            setTimeout(() => {
              setVisibleCards(prev => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, 200 + i * 150);
          });
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 lg:py-36 bg-background overflow-hidden">
      {/* Background ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/2 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 sm:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary/70 font-medium text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 block">
            THE FRAMEWORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-5">
            How Autonix Builds Your{' '}
            <span className="text-primary">Growth System</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            A 4-Week Structured Implementation Framework
          </p>
        </div>

        {/* Timeline connector — desktop only */}
        <div className="hidden lg:block relative max-w-5xl mx-auto mb-4">
          <div className={`absolute top-1/2 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          <div className="flex justify-between px-[2%]">
            {phases.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full border-2 border-primary bg-background relative z-10 transition-all duration-500 ${visibleCards[i] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Phase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.week}
                className={`group relative rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm p-6 sm:p-7 transition-all duration-700 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)] ${visibleCards[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                {/* Week badge */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center border border-border/20`}>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-primary/60 font-semibold">
                    {phase.week}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 leading-snug">
                  {phase.title}
                </h3>

                {/* Summary */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {phase.summary}
                </p>

                {/* Divider */}
                <div className="w-8 h-px bg-border/40 mb-5" />

                {/* Points */}
                <ul className="space-y-3">
                  {phase.points.map((point, j) => {
                    const PointIcon = point.icon;
                    return (
                      <li key={j} className="flex items-start gap-2.5">
                        <PointIcon className="w-4 h-4 text-primary/50 mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground/70 leading-snug">{point.text}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Connector arrow — mobile between cards */}
                {i < phases.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-5 -mb-2">
                    <ArrowRight className="w-4 h-4 text-primary/30 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Flow labels */}
        <div className={`hidden lg:flex justify-center gap-16 mt-10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center gap-2 text-xs text-muted-foreground/50 uppercase tracking-wider">
            <div className="w-6 h-px bg-primary/30" />
            Acquisition Layer
            <div className="w-6 h-px bg-primary/30" />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground/50 uppercase tracking-wider">
            <div className="w-6 h-px bg-primary/30" />
            Conversion Layer
            <div className="w-6 h-px bg-primary/30" />
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 sm:mt-20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-foreground/60 text-sm mb-6">Ready to install this in your business?</p>
          <a
            href="https://calendly.com/autonix-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm sm:text-base"
          >
            Book Strategy Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OperatingPrinciples;
