import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Clock, Users, TrendingUp, Bot, MessageSquare, CalendarCheck, BarChart3 } from 'lucide-react';

// ── Scroll reveal hook ──────────────────────────────────────────────
const useReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

// ── Animated counter ────────────────────────────────────────────────
const useCounter = (end: number, visible: boolean, duration = 1400) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.round(end * p));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, end, duration]);
  return val;
};

const AnimatedStat = ({ value, suffix, prefix = '', label }: { value: number; suffix: string; prefix?: string; label: string }) => {
  const { ref, visible } = useReveal(0.2);
  const count = useCounter(value, visible);
  return (
    <div ref={ref} className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary tracking-tight">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm sm:text-base text-muted-foreground mt-2 font-medium">{label}</div>
    </div>
  );
};

// ── Data ─────────────────────────────────────────────────────────────
const transformationRows = [
  { before: '2–3 day response time', after: 'Instant AI replies', impact: '+37%', impactLabel: 'conversion', icon: Clock },
  { before: 'Manual follow-ups', after: 'Automated sequences', impact: '-60%', impactLabel: 'admin time', icon: Bot },
  { before: 'Missed leads', after: '24/7 lead capture', impact: '+29%', impactLabel: 'revenue', icon: TrendingUp },
  { before: 'Voicemail backlog', after: 'AI call handling', impact: '-92%', impactLabel: 'missed calls', icon: MessageSquare },
];

const caseStudies = [
  {
    industry: 'Healthcare',
    subline: 'Regional dental practice · 3 locations',
    timeline: '90 Days',
    bigNumber: '+127%',
    bigLabel: 'Bookings',
    bigValue: 127,
    metrics: [
      { label: 'Qualified Leads', value: '4.5×' },
      { label: 'Admin Time', value: '-55%' },
      { label: 'Revenue', value: '+$4,200/mo' },
    ],
    context: 'From 45 to 102 monthly appointments. Front desk now handles in-office patients only.',
    chartData: [20, 28, 35, 42, 55, 68, 78, 88, 95, 102],
  },
  {
    industry: 'Home Services',
    subline: 'Solo operator · UK-based',
    timeline: '60 Days',
    bigNumber: '-60%',
    bigLabel: 'Admin Hours',
    bigValue: 60,
    metrics: [
      { label: 'Lead Response', value: 'Instant' },
      { label: 'Quotes Converted', value: '+34%' },
      { label: 'Hours Saved/Week', value: '15' },
    ],
    context: 'Owner stopped tracking leads in spreadsheets. Evenings no longer spent on admin.',
    chartData: [25, 24, 22, 20, 18, 15, 13, 12, 11, 10],
  },
  {
    industry: 'Fitness Studio',
    subline: 'Boutique studio · Australia',
    timeline: '120 Days',
    bigNumber: '+40%',
    bigLabel: 'Member Retention',
    bigValue: 40,
    metrics: [
      { label: 'New Signups/mo', value: '82 (was 28)' },
      { label: 'No-show Rate', value: '7% (was 23%)' },
      { label: 'Revenue', value: '+$3,500/mo' },
    ],
    context: 'Fewer cancellations. Staff no longer chasing renewals manually.',
    chartData: [65, 68, 72, 75, 79, 83, 85, 88, 90, 91],
  },
];

const painPoints = [
  'Slow response times losing warm leads',
  'No automated follow-up sequences',
  'Poor mobile UX on booking flows',
  'No lead qualification system',
];

const afterPoints = [
  'AI handled inquiries instantly',
  'Follow-ups ran 24/7 without staff',
  'Booking friction removed completely',
  'Sales team focused only on closing',
];

// ── Mini spark chart ─────────────────────────────────────────────────
const SparkChart = ({ data, color = 'hsl(var(--primary))' }: { data: number[]; color?: string }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 160;
  const h = 48;
  const points = data.map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`).join(' ');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="opacity-60">
      <defs>
        <linearGradient id={`spark-${data[0]}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${h} ${points} ${w},${h}`}
        fill={`url(#spark-${data[0]})`}
      />
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

// ── Extracted components to fix hooks-in-loop violation ──────────────

const TransformationRow = ({ row, index, total }: { row: typeof transformationRows[0]; index: number; total: number }) => {
  const rowReveal = useReveal(0.1);
  const Icon = row.icon;
  return (
    <div
      ref={rowReveal.ref}
      className={`grid grid-cols-1 sm:grid-cols-3 items-center gap-2 sm:gap-4 px-4 sm:px-6 py-5 sm:py-6 transition-all duration-500 ${index < total - 1 ? 'border-b border-border/50' : ''} ${rowReveal.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Before */}
      <div className="flex items-center gap-3">
        <Icon className="w-4 h-4 text-muted-foreground shrink-0" />
        <div>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 sm:hidden block mb-0.5">Before</span>
          <span className="text-sm text-muted-foreground line-through decoration-destructive/40">{row.before}</span>
        </div>
      </div>
      {/* After */}
      <div className="flex items-center gap-3 sm:pl-0 pl-7">
        <Zap className="w-4 h-4 text-primary shrink-0" />
        <div>
          <span className="text-[10px] uppercase tracking-wider text-primary/60 sm:hidden block mb-0.5">After Autonix</span>
          <span className="text-sm text-foreground font-medium">{row.after}</span>
        </div>
      </div>
      {/* Impact */}
      <div className="sm:text-right pl-7 sm:pl-0">
        <span className="text-[10px] uppercase tracking-wider text-primary/60 sm:hidden block mb-0.5">Impact</span>
        <span className="text-2xl sm:text-3xl font-bold text-primary">{row.impact}</span>
        <span className="text-xs text-muted-foreground ml-2">{row.impactLabel}</span>
      </div>
    </div>
  );
};

const CaseStudyCard = ({ study, index }: { study: typeof caseStudies[0]; index: number }) => {
  const cardReveal = useReveal(0.1);
  return (
    <div
      ref={cardReveal.ref}
      className={`group rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 sm:p-8 transition-all duration-600 hover:border-primary/30 ${cardReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
          {study.industry}
        </span>
        <span className="text-xs text-muted-foreground">{study.timeline}</span>
      </div>

      {/* Big Number */}
      <div className="mb-6">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-none">{study.bigNumber}</div>
        <div className="text-base text-foreground font-medium mt-1">{study.bigLabel}</div>
      </div>

      {/* Spark Chart */}
      <div className="mb-6">
        <SparkChart data={study.chartData} />
      </div>

      {/* Sub-metrics */}
      <div className="space-y-2 mb-6">
        {study.metrics.map((m, j) => (
          <div key={j} className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{m.label}</span>
            <span className="text-foreground font-semibold">{m.value}</span>
          </div>
        ))}
      </div>

      {/* Context */}
      <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
        {study.context}
      </p>

      {/* Subline */}
      <p className="text-[10px] text-muted-foreground mt-3">{study.subline}</p>
    </div>
  );
};

// ── Main Component ───────────────────────────────────────────────────
const WhyAutonix = () => {
  const headerReveal = useReveal();
  const gridReveal = useReveal();
  const patternReveal = useReveal();

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* ─── Section Header ─── */}
        <div
          ref={headerReveal.ref}
          className={`mb-16 sm:mb-20 transition-all duration-700 ${headerReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-primary mb-3">Measured Results</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] max-w-4xl">
            Before vs After Autonix
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-2xl">
            From manual chaos to automated growth. Here's what changes when we install the system.
          </p>
        </div>

        {/* ─── Dominant Stats Strip ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-20 sm:mb-28">
          <AnimatedStat value={45} suffix="%" prefix="+" label="Avg. Booking Increase" />
          <AnimatedStat value={60} suffix="%" prefix="-" label="Admin Time Eliminated" />
          <AnimatedStat value={29} suffix="%" prefix="+" label="Revenue Growth" />
        </div>

        {/* ─── Transformation Grid ─── */}
        <div
          ref={gridReveal.ref}
          className={`rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-1 mb-20 sm:mb-28 transition-all duration-700 ${gridReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ boxShadow: '0 0 60px -20px hsl(var(--primary) / 0.15)' }}
        >
          {/* Grid Header */}
          <div className="hidden sm:grid grid-cols-3 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground px-6 py-4 border-b border-border">
            <span>Before</span>
            <span>After Autonix</span>
            <span className="text-right">Impact</span>
          </div>

          {transformationRows.map((row, i) => (
            <TransformationRow key={i} row={row} index={i} total={transformationRows.length} />
          ))}
        </div>

        {/* ─── Case Study Snapshot Cards ─── */}
        <div className="mb-20 sm:mb-28">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-primary mb-8">Client Snapshots</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={i} study={study} index={i} />
            ))}
          </div>
        </div>

        {/* ─── Pattern Recognition Strip ─── */}
        <div
          ref={patternReveal.ref}
          className={`rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-12 mb-20 sm:mb-28 transition-all duration-700 ${patternReveal.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-primary mb-8">Pattern Recognition</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Before */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-5">
                What Every Client Was Doing Wrong
              </h3>
              <ul className="space-y-3">
                {painPoints.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-5">
                What Changed After Implementation
              </h3>
              <ul className="space-y-3">
                {afterPoints.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ─── CTA ─── */}
        <div className="text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
            Median outcomes shown · Results vary by engagement
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-4 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            Become the Next Case Study
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyAutonix;