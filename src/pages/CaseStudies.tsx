import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, ArrowRight, Phone, Calendar, Zap, Users,
  CheckCircle, BarChart3, Target, Layers, Rocket, Star,
  Clock, Shield, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

/* ── Animated Counter Hook ── */
function useCounter(target: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started, startOnView]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const inc = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += inc;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.round(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return { count, ref };
}

/* ── Scroll Reveal Hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Section Wrapper ── */
function Section({ children, alt = false, className = '' }: { children: React.ReactNode; alt?: boolean; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      className={`py-16 sm:py-20 lg:py-28 px-4 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${alt ? 'bg-card/40' : ''} ${className}`}
    >
      {children}
    </section>
  );
}

/* ── Extracted HeroMetricCard to fix hooks-in-loop ── */
function HeroMetricCard({ metric }: { metric: { value: number; suffix: string; label: string; prefix: string } }) {
  const { count, ref } = useCounter(metric.value, 1800);
  return (
    <div
      ref={ref}
      className="flex items-center justify-between p-4 sm:p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm"
    >
      <span className="text-muted-foreground text-xs sm:text-sm font-medium tracking-wide uppercase">{metric.label}</span>
      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tabular-nums">
        {metric.prefix}{count}{metric.suffix}
      </span>
    </div>
  );
}

/* ── Data ── */
const heroMetrics = [
  { value: 45, suffix: '%', label: 'Avg. Booking Increase', prefix: '+' },
  { value: 30, suffix: '%', label: 'Revenue Growth', prefix: '+' },
  { value: 60, suffix: '%', label: 'Admin Time Saved', prefix: '-' },
];

const caseStudies = [
  {
    id: 'dental-practice',
    client: 'Multi-Location Dental Practice',
    location: 'Phoenix Metropolitan Area',
    industry: 'Healthcare',
    timeline: '90 Days',
    services: ['AI Receptionist', 'Booking Automation', 'CRM Integration'],
    positioning: 'From 35% missed calls to 3% — recapturing $4,200/month in lost revenue.',
    heroStats: [
      { value: '91%', label: 'Missed Call Reduction' },
      { value: '68%', label: 'No-Show Reduction' },
      { value: '$4,200', label: 'Monthly Revenue Recovered' },
    ],
    problem: [
      'Over 200 weekly calls across 3 locations with 35% going to voicemail during business hours.',
      'A 28% no-show rate created constant schedule gaps and unpredictable revenue. Double-bookings between locations frustrated patients and staff.',
      'Zero after-hours booking capability meant every competitor with online scheduling was capturing their potential patients.',
    ],
    phases: [
      {
        title: 'Conversion Infrastructure',
        icon: Target,
        items: [
          'Deployed AI receptionist handling new patient inquiries 24/7',
          'Unified booking system with real-time availability across all 3 locations',
          'Self-service rescheduling portal reducing front desk workload',
          'CRM integration pushing patient data to practice management software',
        ],
      },
      {
        title: 'Automation System',
        icon: Layers,
        items: [
          'Automated SMS reminders at 48h, 24h, and 2h before appointments',
          'Intelligent call routing based on inquiry type and location',
          'After-hours booking flow with immediate confirmation',
          'Automated follow-up for missed appointments',
        ],
      },
      {
        title: 'Optimization & Scaling',
        icon: Rocket,
        items: [
          'Conversation flow tuning based on 90 days of call data',
          'Schedule fill-rate optimization to reduce gaps',
          'Multi-location analytics dashboard for the practice owner',
          'Expanded to handle insurance verification queries',
        ],
      },
    ],
    results: [
      { label: 'Missed Calls', before: '35%', after: '3%', numericAfter: 3, suffix: '%', description: '91% reduction in lost patient inquiries' },
      { label: 'No-Show Rate', before: '28%', after: '9%', numericAfter: 9, suffix: '%', description: '68% fewer empty appointment slots' },
      { label: 'After-Hours Bookings', before: '0', after: '45/mo', numericAfter: 45, suffix: '/mo', description: 'Entirely new revenue stream' },
      { label: 'Revenue Recovered', before: '$0', after: '$4,200', numericAfter: 4200, suffix: '', prefix: '$', description: 'From reduced no-shows alone' },
    ],
    testimonial: {
      quote: 'The AI handles calls better than we expected. Patients genuinely think they are talking to a person. Our front desk finally has time to focus on patients in the office.',
      author: 'Dr. Michael Chen',
      role: 'Practice Owner',
    },
  },
  {
    id: 'home-services',
    client: 'HVAC & Plumbing Company',
    location: 'Dallas-Fort Worth, Texas',
    industry: 'Home Services',
    timeline: '120 Days',
    services: ['AI Receptionist', 'Emergency Dispatch', 'Lead Nurturing'],
    positioning: 'Capturing 98% of emergency calls — adding $12,000/month in new revenue.',
    heroStats: [
      { value: '98%', label: 'Emergency Call Capture' },
      { value: '<30s', label: 'Avg Response Time' },
      { value: '$12K', label: 'Monthly Revenue Added' },
    ],
    problem: [
      'Emergency calls are the highest-margin work in home services, but 40-50% of after-hours calls went unanswered.',
      'The owner was personally fielding 30+ calls per day, unable to focus on operations or scaling the business.',
      'Competitors with 24/7 answering services were systematically capturing every lead this company missed.',
    ],
    phases: [
      {
        title: 'Conversion Infrastructure',
        icon: Target,
        items: [
          'AI receptionist with emergency triage and severity assessment',
          'Integration with dispatch software for real-time technician availability',
          'WhatsApp channel for customers who prefer texting',
          'Branded call experience matching company identity',
        ],
      },
      {
        title: 'Automation System',
        icon: Layers,
        items: [
          'Automated dispatch triggers based on emergency severity',
          'Lead nurturing sequence for non-emergency estimate requests',
          'Post-service review request automation',
          'Automated job status updates to customers',
        ],
      },
      {
        title: 'Optimization & Scaling',
        icon: Rocket,
        items: [
          'Emergency script refinement based on call outcome data',
          'Seasonal campaign automation for HVAC maintenance',
          'Technician performance tracking through automated feedback',
          'Expanded coverage to weekend overflow calls',
        ],
      },
    ],
    results: [
      { label: 'Emergency Capture', before: '55%', after: '98%', numericAfter: 98, suffix: '%', description: '63% increase in captured emergency jobs' },
      { label: 'Response Time', before: '8 min', after: '<30s', numericAfter: 30, suffix: 's', description: '94% faster first response' },
      { label: 'Owner Call Volume', before: '30+/day', after: '5-7/day', numericAfter: 80, suffix: '%↓', description: '80% reduction in owner interruptions' },
      { label: 'Revenue Added', before: '$0', after: '$12K', numericAfter: 12, suffix: 'K', prefix: '$', description: 'From captured after-hours leads' },
    ],
    testimonial: {
      quote: 'I was skeptical about AI handling emergency calls, but it performs better than our previous answering service. It asks the right questions and dispatches faster than any human could at 3 AM.',
      author: 'Robert Martinez',
      role: 'Owner',
    },
  },
  {
    id: 'fitness-studio',
    client: 'Boutique Fitness Studio',
    location: 'Austin, Texas',
    industry: 'Fitness & Wellness',
    timeline: '6 Months',
    services: ['SEO Website', 'Booking Automation', 'Lead Nurturing'],
    positioning: 'From invisible on Google to Position 2 — 640% organic traffic growth.',
    heroStats: [
      { value: '640%', label: 'Organic Traffic Growth' },
      { value: '86%', label: 'Conversion Improvement' },
      { value: '160%', label: 'New Member Increase' },
    ],
    problem: [
      'A template website with zero local SEO meant the studio was invisible to potential members searching for fitness options in Austin.',
      'Manual class booking via phone calls created friction that deterred busy professionals — their core target audience.',
      'Trial-to-membership conversion sat at just 22% due to zero automated follow-up after the first visit.',
    ],
    phases: [
      {
        title: 'Conversion Infrastructure',
        icon: Target,
        items: [
          'SEO-optimized website with class-specific landing pages',
          'Online class booking with automatic waitlist management',
          'Google Business Profile optimization for local search',
          'Schema markup for local fitness keywords',
        ],
      },
      {
        title: 'Automation System',
        icon: Layers,
        items: [
          'Trial member email sequence (5 emails over 14 days)',
          'SMS reminders for booked classes reducing drop-offs',
          'Automated review requests from members after their 10th class',
          'Referral automation triggered at member milestones',
        ],
      },
      {
        title: 'Optimization & Scaling',
        icon: Rocket,
        items: [
          'Content strategy targeting long-tail fitness keywords',
          'A/B testing landing pages for trial sign-up conversion',
          'Seasonal campaign automation for New Year and summer pushes',
          'Class capacity optimization using booking data analytics',
        ],
      },
    ],
    results: [
      { label: 'Organic Traffic', before: '120/mo', after: '890/mo', numericAfter: 890, suffix: '/mo', description: '640% increase in organic visitors' },
      { label: 'Trial Conversion', before: '22%', after: '41%', numericAfter: 41, suffix: '%', description: '86% improvement in membership conversion' },
      { label: 'Google Ranking', before: 'Invisible', after: 'Position 2', numericAfter: 2, suffix: '', prefix: '#', description: 'First page visibility in Map Pack' },
      { label: 'New Members', before: '8-10/mo', after: '22-28/mo', numericAfter: 25, suffix: '/mo', description: '160% increase in monthly signups' },
    ],
    testimonial: {
      quote: 'The online booking alone was worth the investment. But seeing us show up when people search for fitness studios in Austin — that is changing our business.',
      author: 'Jennifer Walsh',
      role: 'Studio Owner',
    },
  },
];

const timelineSteps = [
  { weeks: 'Week 1–2', title: 'Research & Audit', description: 'Deep-dive into your business, competitors, and missed revenue opportunities.' },
  { weeks: 'Week 3–5', title: 'Build & Deploy', description: 'Systems architecture, AI training, website build, and integration setup.' },
  { weeks: 'Week 6–8', title: 'Automate & Connect', description: 'Workflow automation, CRM connections, and lead nurturing sequences live.' },
  { weeks: 'Week 9–12', title: 'Optimize & Scale', description: 'Data-driven tuning, expansion, and performance reporting.' },
];

const patterns = [
  'The fastest ROI comes from capturing leads that currently go to competitors — missed calls, slow responses, and zero after-hours coverage.',
  'Staff time shifts from repetitive tasks to high-value work. No client has ever fired employees because of automation.',
  'SEO compounds over time. Clients who start organic alongside automation see predictable, ad-free lead flow within 6 months.',
  'Every automated interaction generates data. Systems get measurably smarter each quarter through conversation analysis.',
  'Businesses with both automation AND SEO websites outperform those with only one by 2.3x on average revenue growth.',
];

/* ══════════════════════ COMPONENT ══════════════════════ */

const CaseStudies = () => {
  useEffect(() => {
    document.title = 'Case Studies | Proven Results from AI Automation - Autonix Agency';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Real case studies showing how local businesses increased revenue with AI automation and SEO websites. Detailed before/after metrics from dental clinics, home services, and fitness studios.');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden py-16 sm:py-28 lg:py-36 px-4">
          {/* Background glow */}
          <div className="absolute inset-0 gradient-spotlight opacity-60 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium tracking-wide">Documented Results</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                  Systems That <br className="hidden sm:block" />
                  <span className="text-primary">Produce Proof</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mb-8 sm:mb-10">
                  Not promises. Not projections. Real businesses. Real numbers. Every metric below is from a deployed automation system.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gradient-cta text-base px-8 h-12 w-full sm:w-auto">
                    <Link to="/contact">Start Your Case Study <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </div>

              {/* Right: Hero Metrics */}
              <div className="grid gap-3 sm:gap-4">
                {heroMetrics.map((m, i) => (
                  <HeroMetricCard key={i} metric={m} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        {caseStudies.map((study, idx) => (
          <div key={study.id}>

            {/* Case Hero Snapshot */}
            <Section alt={idx % 2 === 0}>
              <div className="container mx-auto max-w-6xl">
                <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">{study.industry}</span>
                  <span className="text-muted-foreground text-sm">{study.location}</span>
                  <span className="text-muted-foreground text-sm hidden sm:inline">•</span>
                  <span className="text-muted-foreground text-sm">{study.timeline}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 tracking-tight">{study.client}</h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 sm:mb-10">{study.positioning}</p>

                {/* Dominant Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                  {study.heroStats.map((s, i) => (
                    <div key={i} className="p-5 sm:p-6 lg:p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm text-center">
                      <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-2 tracking-tight">{s.value}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Services Used */}
                <div className="flex flex-wrap gap-2">
                  {study.services.map((s, i) => (
                    <span key={i} className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground">{s}</span>
                  ))}
                </div>
              </div>
            </Section>

            {/* The Problem */}
            <Section alt={idx % 2 !== 0}>
              <div className="container mx-auto max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">The Core Problem</h3>
                </div>
                <div className="space-y-4 sm:space-y-5">
                  {study.problem.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed text-base sm:text-lg">{p}</p>
                  ))}
                </div>
              </div>
            </Section>

            {/* Strategic Execution - Phases */}
            <Section alt={idx % 2 === 0}>
              <div className="container mx-auto max-w-6xl">
                <div className="flex items-center gap-3 mb-8 sm:mb-12">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">Strategic Execution</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {study.phases.map((phase, pi) => (
                    <div key={pi} className="p-5 sm:p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-4 sm:mb-6">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">{pi + 1}</span>
                        </div>
                        <h4 className="font-semibold text-base sm:text-lg">{phase.title}</h4>
                      </div>
                      <ul className="space-y-3">
                        {phase.items.map((item, ii) => (
                          <li key={ii} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            {/* Results - Visually Dominant */}
            <Section alt={idx % 2 !== 0}>
              <div className="container mx-auto max-w-6xl">
                <div className="flex items-center gap-3 mb-8 sm:mb-12">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">The Results</h3>
                    <p className="text-sm text-muted-foreground">{study.timeline} post-implementation</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
                  {study.results.map((r, ri) => (
                    <div key={ri} className="p-5 sm:p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm">
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-3">{r.label}</p>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-sm text-muted-foreground line-through">{r.before}</span>
                        <ArrowRight className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2 tracking-tight">{r.after}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{r.description}</p>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="p-5 sm:p-8 rounded-2xl border border-primary/10 bg-primary/5">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <blockquote className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 italic text-foreground/90">
                    "{study.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">{study.testimonial.author[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{study.testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{study.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Divider */}
            {idx < caseStudies.length - 1 && (
              <div className="container mx-auto max-w-6xl px-4">
                <div className="h-px bg-border/30" />
              </div>
            )}
          </div>
        ))}

        {/* ── TIMELINE ── */}
        <Section alt>
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">How We Execute</h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">From audit to optimization in 12 weeks. Every phase has clear deliverables and measurable outcomes.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {timelineSteps.map((step, i) => (
                <div key={i} className="relative p-5 sm:p-6 rounded-2xl border border-border/50 bg-card/40">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                    <Clock className="w-3 h-3" />
                    {step.weeks}
                  </div>
                  <h4 className="font-semibold text-base sm:text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  {i < timelineSteps.length - 1 && (
                    <ChevronRight className="hidden lg:block absolute top-1/2 -right-4 w-5 h-5 text-primary/40 -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── PATTERN RECOGNITION ── */}
        <Section>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">What High-Growth Clients Have in Common</h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">Recurring strategic insights across every successful engagement.</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {patterns.map((p, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-border/30 bg-card/30">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── EXPLORE SOLUTIONS ── */}
        <Section alt>
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Explore Our Solutions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { to: '/ai-receptionist', icon: Phone, label: 'AI Receptionist' },
                { to: '/booking-automation', icon: Calendar, label: 'Booking Automation' },
                { to: '/seo-websites', icon: Zap, label: 'SEO Websites' },
                { to: '/industries', icon: Users, label: 'Industries' },
              ].map((link, i) => (
                <Link key={i} to={link.to} className="p-4 sm:p-5 rounded-2xl border border-border/50 bg-card/40 hover:border-primary/40 transition-all duration-300 text-center group">
                  <link.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-xs sm:text-sm">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </Section>

        {/* ── FINAL CTA ── */}
        <section className="relative py-16 sm:py-28 lg:py-36 px-4 overflow-hidden">
          <div className="absolute inset-0 gradient-spotlight opacity-40 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

          <div className="container mx-auto max-w-2xl text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-6">
              Ready to Become the<br />
              <span className="text-primary">Next Case Study?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-md mx-auto">
              Book a 15-minute strategy call. We'll show you exactly where you're losing revenue — and how to fix it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild size="lg" className="gradient-cta text-base px-8 h-12 animate-pulse-cta w-full sm:w-auto">
                <Link to="/contact">Book Strategy Call <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 border-border/50 w-full sm:w-auto">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;