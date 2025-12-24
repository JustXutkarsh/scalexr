import { useRef, useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, CheckCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceLine, CartesianGrid } from 'recharts';

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
    maxValue: 200,
    isReduction: false,
    trendUp: true
  },
  {
    metric: "Missed Calls",
    before: 65,
    after: 8,
    beforeLabel: "60–70%",
    afterLabel: "5–10%",
    maxValue: 100,
    isReduction: true,
    trendUp: false
  },
  {
    metric: "Response Time",
    before: 85,
    after: 5,
    beforeLabel: "2–6 hrs",
    afterLabel: "< 1 min",
    maxValue: 100,
    isReduction: true,
    trendUp: false
  }
];

// Chart data with natural variance and clear inflection point
const growthChartData = [
  { month: 'Month 1', revenue: 14200, phase: 'before' },
  { month: 'Month 2', revenue: 13800, phase: 'before' },
  { month: 'Month 3', revenue: 15100, phase: 'before' },
  { month: 'Month 4', revenue: 14600, phase: 'transition' },
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
    avatar: "🦷",
    roi: "+$4,200/mo",
    automated: "Appointment booking, missed call handling, patient reminders",
    operationalChange: "Front desk now focuses on in-office patients instead of phone triage",
    impact: "Recovered $4,200–$6,800/mo in previously lost appointments",
    chartData: [
      { month: 'Month 1', appointments: 45, missed: 28 },
      { month: 'Month 2', appointments: 48, missed: 25 },
      { month: 'Month 3', appointments: 52, missed: 22 },
      { month: 'Month 4', appointments: 68, missed: 15 },
      { month: 'Month 5', appointments: 85, missed: 10 },
      { month: 'Month 6', appointments: 102, missed: 6 },
    ],
    chartLabel: "Appointments Recovered"
  },
  {
    business: "Home Services",
    region: "UK",
    avatar: "🏠",
    roi: "+15 hrs/wk",
    automated: "Lead capture, quote follow-ups, job scheduling",
    operationalChange: "Owner stopped manually tracking leads in spreadsheets",
    impact: "Reduced admin time by ~15 hrs/week, modest revenue lift",
    chartData: [
      { month: 'Week 1', adminHours: 25, leads: 12 },
      { month: 'Week 2', adminHours: 22, leads: 18 },
      { month: 'Week 3', adminHours: 18, leads: 24 },
      { month: 'Week 4', adminHours: 14, leads: 30 },
      { month: 'Week 5', adminHours: 12, leads: 35 },
      { month: 'Week 6', adminHours: 10, leads: 42 },
    ],
    chartLabel: "Admin Hours Saved"
  },
  {
    business: "Fitness Studio",
    region: "Australia",
    avatar: "💪",
    roi: "+$3,500/mo",
    automated: "Membership inquiries, class booking, renewal reminders",
    operationalChange: "Staff reallocated from phone duty to member experience",
    impact: "Membership retention improved, recovered ~$3,500/mo in lapsed signups",
    chartData: [
      { month: 'Month 1', signups: 28, retention: 65 },
      { month: 'Month 2', signups: 35, retention: 72 },
      { month: 'Month 3', signups: 42, retention: 78 },
      { month: 'Month 4', signups: 55, retention: 84 },
      { month: 'Month 5', signups: 68, retention: 89 },
      { month: 'Month 6', signups: 82, retention: 94 },
    ],
    chartLabel: "Member Signups Growth"
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
      {/* Subtle background */}
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

        {/* Success Scorecard */}
        <div 
          className={`mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Success Scorecard
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Before vs After automation</p>
            </div>
            <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">Median client outcome</span>
          </div>
          
          <div className="grid gap-6">
            {beforeAfterData.map((item, index) => (
              <div 
                key={index} 
                className="p-5 rounded-xl border border-border/50 bg-card/20 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground flex items-center gap-2">
                    {item.metric}
                    {item.trendUp ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.isReduction ? 'Lower is better' : 'Higher is better'}
                  </span>
                </div>
                
                {/* Before bar */}
                <div className="flex items-center gap-4">
                  <span className="w-16 text-xs text-muted-foreground text-right">Before</span>
                  <div className="flex-1 h-8 bg-muted/30 rounded-lg overflow-hidden relative">
                    <div 
                      className="h-full bg-muted-foreground/30 rounded-lg transition-all duration-1000 ease-out flex items-center justify-end pr-3"
                      style={{ 
                        width: barsAnimated ? `${(item.before / item.maxValue) * 100}%` : '0%',
                        transitionDelay: `${index * 150}ms`
                      }}
                    >
                      <span className="text-xs font-medium text-foreground/60">{item.beforeLabel}</span>
                    </div>
                  </div>
                </div>
                
                {/* After bar */}
                <div className="flex items-center gap-4">
                  <span className="w-16 text-xs text-primary text-right font-semibold">After</span>
                  <div className="flex-1 h-8 bg-primary/10 rounded-lg overflow-hidden relative">
                    <div 
                      className="h-full bg-gradient-to-r from-primary/60 to-primary/80 rounded-lg transition-all duration-1000 ease-out flex items-center"
                      style={{ 
                        width: barsAnimated ? `${(item.after / item.maxValue) * 100}%` : '0%',
                        transitionDelay: `${index * 150 + 100}ms`,
                        justifyContent: item.isReduction ? 'flex-start' : 'flex-end',
                        paddingLeft: item.isReduction ? '12px' : '0',
                        paddingRight: item.isReduction ? '0' : '12px'
                      }}
                    >
                      <span className="text-xs font-semibold text-primary-foreground">{item.afterLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Chart with Electric Glow */}
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
          
          <div className="h-[280px] w-full electric-glow">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthChartData} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="revenueGradientElectric" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.5}/>
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity={0.2}/>
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
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
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#revenueGradientElectric)"
                  filter="url(#glow)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          {/* Stats under graph */}
          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border/30">
            <div className="text-center py-2 sm:py-0">
              <div className="text-base sm:text-lg font-semibold text-foreground">$18k–$38k</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">Typical monthly range after 6mo</div>
            </div>
            <div className="text-center py-2 sm:py-0 border-t sm:border-t-0 border-border/30">
              <div className="text-base sm:text-lg font-semibold text-foreground">2–4 months</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">Time to see measurable lift</div>
            </div>
            <div className="text-center py-2 sm:py-0 border-t sm:border-t-0 border-border/30">
              <div className="text-base sm:text-lg font-semibold text-foreground">4–6 months</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">Typical full ROI recovery</div>
            </div>
          </div>
        </div>

        {/* Client Results Grid with Charts */}
        <div 
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 className="text-xl font-semibold mb-6">Client Results</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="relative p-4 sm:p-5 rounded-xl border border-border/50 bg-card/20 space-y-3 sm:space-y-4 hover:border-primary/30 transition-colors"
              >
                {/* ROI Badge */}
                <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold glow-sm">
                  {study.roi}
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-lg sm:text-xl">
                    {study.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-xs sm:text-sm">{study.business}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">{study.region}</div>
                  </div>
                </div>

                {/* Growth Chart */}
                <div className="bg-muted/10 rounded-lg p-2 border border-border/30">
                  <div className="text-[10px] text-muted-foreground mb-2">{study.chartLabel}</div>
                  <div className="h-[100px] sm:h-[120px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart 
                        data={study.chartData} 
                        margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id={`clientGradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.5}/>
                            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid 
                          strokeDasharray="3 3" 
                          stroke="hsl(var(--border))" 
                          strokeOpacity={0.2}
                          vertical={false}
                        />
                        <XAxis 
                          dataKey="month" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 8 }}
                          interval={1}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 8 }}
                          width={25}
                        />
                        <Area 
                          type="monotone" 
                          dataKey={index === 0 ? "appointments" : index === 1 ? "leads" : "signups"}
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          fillOpacity={1} 
                          fill={`url(#clientGradient-${index})`}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide mb-1">What we automated</div>
                    <p className="text-foreground/80">{study.automated}</p>
                  </div>
                  
                  <div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide mb-1">Operational change</div>
                    <p className="text-foreground/80">{study.operationalChange}</p>
                  </div>
                  
                  <div className="pt-2 sm:pt-3 border-t border-border/30">
                    <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide mb-1">Outcome</div>
                    <p className="text-primary font-medium">{study.impact}</p>
                  </div>
                </div>
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
