import { useRef, useEffect, useState } from 'react';
import { Cpu, Target, TrendingUp, Layers, Rocket, Phone, Clock, Zap, Settings, BarChart3 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceLine } from 'recharts';

const credibilityStats = [
  { value: "19", label: "Active automation systems" },
  { value: "Service-based", label: "Business focus" },
  { value: "5", label: "Regions served" }
];

const beforeAfterData = [
  {
    metric: "Monthly Leads",
    before: 45,
    after: 180,
    beforeLabel: "~45",
    afterLabel: "120–180",
    maxValue: 200
  },
  {
    metric: "Missed Calls",
    before: 65,
    after: 8,
    beforeLabel: "60–70%",
    afterLabel: "5–10%",
    maxValue: 100,
    isReduction: true
  },
  {
    metric: "Response Time",
    before: 85,
    after: 5,
    beforeLabel: "2–6 hrs",
    afterLabel: "< 1 min",
    maxValue: 100,
    isReduction: true
  }
];

// Chart data with natural variance and clear inflection point
const growthChartData = [
  { month: 'Month 1', revenue: 14200, phase: 'before' },
  { month: 'Month 2', revenue: 13800, phase: 'before' },
  { month: 'Month 3', revenue: 15100, phase: 'before' },
  { month: 'Month 4', revenue: 14600, phase: 'transition' }, // Automation goes live
  { month: 'Month 5', revenue: 19200, phase: 'after' },
  { month: 'Month 6', revenue: 24800, phase: 'after' },
  { month: 'Month 7', revenue: 28400, phase: 'after' },
  { month: 'Month 8', revenue: 32100, phase: 'after' },
  { month: 'Month 9', revenue: 35800, phase: 'after' },
];

const caseStudies = [
  {
    business: "Dental Practice",
    region: "Northeast US",
    automated: "Appointment booking, missed call handling, patient reminders",
    operationalChange: "Front desk now focuses on in-office patients instead of phone triage",
    impact: "Recovered $4,200–$6,800/mo in previously lost appointments"
  },
  {
    business: "Home Services",
    region: "UK",
    automated: "Lead capture, quote follow-ups, job scheduling",
    operationalChange: "Owner stopped manually tracking leads in spreadsheets",
    impact: "Reduced admin time by ~15 hrs/week, modest revenue lift"
  },
  {
    business: "Fitness Studio",
    region: "Australia",
    automated: "Membership inquiries, class booking, renewal reminders",
    operationalChange: "Staff reallocated from phone duty to member experience",
    impact: "Membership retention improved, recovered ~$3,500/mo in lapsed signups"
  }
];

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
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setBarsAnimated(true), 300);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Subtle background - reduced glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Results from businesses like yours
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Based on automation systems deployed over the last 6–9 months
          </p>
        </div>

        {/* Credibility Strip */}
        <div 
          className={`flex flex-wrap justify-center gap-8 lg:gap-16 mb-16 py-6 border-y border-border/30 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {credibilityStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl lg:text-3xl font-semibold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Before vs After - Horizontal Bars */}
        <div 
          className={`mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Before vs After</h3>
            <span className="text-sm text-muted-foreground">Median client outcome</span>
          </div>
          
          <div className="space-y-8">
            {beforeAfterData.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{item.metric}</span>
                </div>
                
                {/* Before bar */}
                <div className="flex items-center gap-4">
                  <span className="w-16 text-xs text-muted-foreground text-right">Before</span>
                  <div className="flex-1 h-6 bg-muted/30 rounded overflow-hidden">
                    <div 
                      className={`h-full bg-muted-foreground/40 rounded transition-all duration-1000 ease-out flex items-center justify-end pr-3`}
                      style={{ 
                        width: barsAnimated ? `${(item.before / item.maxValue) * 100}%` : '0%',
                        transitionDelay: `${index * 150}ms`
                      }}
                    >
                      <span className="text-xs font-medium text-foreground/70">{item.beforeLabel}</span>
                    </div>
                  </div>
                </div>
                
                {/* After bar */}
                <div className="flex items-center gap-4">
                  <span className="w-16 text-xs text-primary text-right font-medium">After</span>
                  <div className="flex-1 h-6 bg-primary/10 rounded overflow-hidden">
                    <div 
                      className={`h-full bg-primary/60 rounded transition-all duration-1000 ease-out flex items-center ${item.isReduction ? 'justify-start pl-3' : 'justify-end pr-3'}`}
                      style={{ 
                        width: barsAnimated ? `${(item.after / item.maxValue) * 100}%` : '0%',
                        transitionDelay: `${index * 150 + 100}ms`
                      }}
                    >
                      <span className="text-xs font-medium text-primary">{item.afterLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Chart */}
        <div 
          className={`mb-20 p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/30 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">What happens after automation goes live</h3>
            <p className="text-sm text-muted-foreground">Composite view based on client revenue data</p>
          </div>
          
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthChartData} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                  width={50}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                />
                <ReferenceLine 
                  x="Month 4" 
                  stroke="hsl(var(--primary))" 
                  strokeDasharray="4 4" 
                  strokeOpacity={0.6}
                  label={{ 
                    value: 'Automation live', 
                    position: 'top', 
                    fill: 'hsl(var(--primary))',
                    fontSize: 11
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#revenueGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          {/* Stats under graph - ranges and timeframes */}
          <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-border/30">
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">$18k–$38k</div>
              <div className="text-xs text-muted-foreground">Typical monthly range after 6mo</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">2–4 months</div>
              <div className="text-xs text-muted-foreground">Time to see measurable lift</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-foreground">4–6 months</div>
              <div className="text-xs text-muted-foreground">Typical full ROI recovery</div>
            </div>
          </div>
        </div>

        {/* Case Studies - System Stories */}
        <div 
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 className="text-xl font-semibold mb-6">How it works in practice</h3>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="p-5 rounded-xl border border-border/50 bg-card/20 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Settings className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{study.business}</div>
                    <div className="text-xs text-muted-foreground">{study.region}</div>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">What we automated</div>
                    <p className="text-foreground/80">{study.automated}</p>
                  </div>
                  
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Operational change</div>
                    <p className="text-foreground/80">{study.operationalChange}</p>
                  </div>
                  
                  <div className="pt-3 border-t border-border/30">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Outcome</div>
                    <p className="text-primary font-medium">{study.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - Original Cards */}
        <div 
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <h3 className="text-xl font-semibold mb-6">What makes us different</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`group p-5 rounded-xl border border-border/50 bg-card/20 transition-all duration-300 hover:border-primary/30 ${
                  index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-base font-semibold mb-2">{reason.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div 
          className={`text-center pt-8 border-t border-border/30 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <p className="text-xs text-muted-foreground/70 max-w-2xl mx-auto">
            Results vary based on business type, market conditions, and implementation scope. 
            Figures shown represent median outcomes from our client base and are not guarantees of future performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyScaleX;
