import { useRef, useEffect, useState } from 'react';
import { Search, Globe, Bot, Settings, FileSearch, DollarSign, Target, LayoutTemplate, Megaphone, FormInput, Zap, MessageSquare, Calendar, Users, MailCheck, Route, TestTube, TrendingUp, MessageCircle, Gauge, ArrowRight } from 'lucide-react';

const layers = [
  {
    label: 'LAYER 01',
    title: 'Strategy & Audit',
    icon: Search,
    summary: 'We map your customer journey and identify revenue leaks before building anything.',
    accent: 'hsl(var(--primary))',
    glowColor: 'hsl(var(--primary) / 0.15)',
    points: [
      { icon: FileSearch, text: 'Business audit + journey mapping' },
      { icon: DollarSign, text: 'Revenue leak identification' },
      { icon: Target, text: 'Define automation KPIs' },
      { icon: LayoutTemplate, text: 'System blueprint creation' },
    ],
  },
  {
    label: 'LAYER 02',
    title: 'Acquisition Layer',
    icon: Globe,
    summary: 'We strengthen your website to capture and convert traffic.',
    accent: 'hsl(160 60% 50%)',
    glowColor: 'hsl(160 60% 50% / 0.12)',
    points: [
      { icon: Megaphone, text: 'SEO-friendly structure' },
      { icon: FormInput, text: 'High-converting layout + copy' },
      { icon: Zap, text: 'Lead capture forms + tracking' },
      { icon: Settings, text: 'Automation-ready infrastructure' },
    ],
  },
  {
    label: 'LAYER 03',
    title: 'Conversion Layer',
    icon: Bot,
    summary: 'We install AI automation and booking systems.',
    accent: 'hsl(220 80% 60%)',
    glowColor: 'hsl(220 80% 60% / 0.12)',
    points: [
      { icon: MessageSquare, text: 'AI instant responses' },
      { icon: Calendar, text: 'Booking system integration' },
      { icon: Users, text: 'CRM setup' },
      { icon: MailCheck, text: 'Follow-ups + no-show flows' },
      { icon: Route, text: 'Lead routing + data organization' },
    ],
  },
  {
    label: 'LAYER 04',
    title: 'Optimization & Scaling',
    icon: TrendingUp,
    summary: 'We simulate real scenarios and refine performance.',
    accent: 'hsl(35 90% 55%)',
    glowColor: 'hsl(35 90% 55% / 0.12)',
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
  const [revealedLayers, setRevealedLayers] = useState<boolean[]>(new Array(layers.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
          layers.forEach((_, i) => {
            setTimeout(() => {
              setRevealedLayers(prev => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, 300 + i * 200);
          });
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 lg:py-40 bg-background overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 sm:mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary/60 font-semibold text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-4 block">
            SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] mb-5">
            The Autonix{' '}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Growth Architecture
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            A 4-Layer Automation System Rolled Out in 4 Weeks
          </p>
        </div>

        {/* Stacked Layers */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical connector line */}
          <div className={`absolute left-6 sm:left-8 top-0 bottom-0 w-px transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.4), hsl(220 80% 60% / 0.3), hsl(35 90% 55% / 0.2), transparent)' }}
          />

          {layers.map((layer, i) => {
            const Icon = layer.icon;
            const revealed = revealedLayers[i];
            return (
              <div
                key={layer.label}
                className="relative"
                style={{
                  marginTop: i === 0 ? 0 : '-12px',
                  zIndex: layers.length - i,
                }}
              >
                <div
                  className={`relative rounded-2xl border border-border/20 backdrop-blur-sm transition-all duration-700 ease-out ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--card) / 0.8), hsl(var(--card) / 0.4))`,
                    boxShadow: revealed
                      ? `0 -1px 0 0 ${layer.glowColor}, 0 8px 40px -12px ${layer.glowColor}, inset 0 1px 0 0 hsl(var(--border) / 0.1)`
                      : 'none',
                  }}
                >
                  {/* Top glow edge */}
                  <div
                    className="absolute inset-x-0 top-0 h-px rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, transparent 10%, ${layer.accent} / 0.4 50%, transparent 90%)` }}
                  />

                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                      {/* Left: Icon + label */}
                      <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 sm:w-48 shrink-0">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center border border-border/20"
                          style={{ background: `linear-gradient(135deg, ${layer.glowColor}, transparent)` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: layer.accent }} />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-1" style={{ color: `${layer.accent}` }}>
                            {layer.label}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                            {layer.title}
                          </h3>
                        </div>
                      </div>

                      {/* Right: Summary + points */}
                      <div className="flex-1 min-w-0">
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5">
                          {layer.summary}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                          {layer.points.map((point, j) => {
                            const PointIcon = point.icon;
                            return (
                              <div key={j} className="flex items-center gap-2.5 group/point">
                                <PointIcon className="w-3.5 h-3.5 shrink-0 text-muted-foreground/40 group-hover/point:text-primary/60 transition-colors" />
                                <span className="text-sm text-foreground/65 group-hover/point:text-foreground/90 transition-colors">
                                  {point.text}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-20 sm:mt-24 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground/50 text-xs uppercase tracking-[0.2em] mb-5">
            4 Layers. 4 Weeks. One Engineered System.
          </p>
          <a
            href="https://calendly.com/autonix-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:bg-primary/90 transition-all text-sm sm:text-base hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)]"
          >
            Install This System In Your Business
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OperatingPrinciples;
