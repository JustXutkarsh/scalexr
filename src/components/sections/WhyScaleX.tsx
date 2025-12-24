import { useRef, useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Settings, CheckCircle, ArrowUp, ArrowDown } from 'lucide-react';
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
    business: "Back From Black",
    headline: "188 Conversions in",
    subheadline: "30 Days",
    description: "Back From Black was investing in paid Ads since 2022 but with us (Jan 2025) they saw a drastic improvement in their ROI(dropped by 51%)and number of leads(increased by 144%).",
    chartData: [
      { month: 'Jan', value: 45 },
      { month: 'Feb', value: 42 },
      { month: 'Mar', value: 48 },
      { month: 'Apr', value: 44 },
      { month: 'May', value: 50 },
      { month: 'Jun', value: 55 },
      { month: 'Jul', value: 52 },
      { month: 'Aug', value: 58 },
      { month: 'Sep', value: 65 },
      { month: 'Oct', value: 72 },
      { month: 'Nov', value: 85 },
      { month: 'Dec', value: 105 },
    ],
    inflectionPoint: 'Sep',
    stats: {
      roi: "+260%",
      cvr: "+143%",
      cpc: "-51%"
    }
  },
  {
    business: "Massage Central",
    headline: "112 Conversions in",
    subheadline: "22 Days",
    description: "Relied on Google Ads for leads with $20 CPC but soon after working with us their CPC dropped below $7 with 60% more conversions.",
    chartData: [
      { month: 'Jan', value: 30 },
      { month: 'Feb', value: 28 },
      { month: 'Mar', value: 32 },
      { month: 'Apr', value: 35 },
      { month: 'May', value: 33 },
      { month: 'Jun', value: 38 },
      { month: 'Jul', value: 42 },
      { month: 'Aug', value: 55 },
      { month: 'Sep', value: 68 },
      { month: 'Oct', value: 82 },
      { month: 'Nov', value: 95 },
      { month: 'Dec', value: 112 },
    ],
    inflectionPoint: 'Jul',
    stats: {
      roi: "+40%",
      cvr: "+60%",
      cpc: ">$7"
    }
  },
  {
    business: "S&P Detailing",
    headline: "2x Conversions in",
    subheadline: "30 Days",
    description: "A drastic increase of 2X leads within 30 days for USA based car detailing business with 180% ROI.",
    chartData: [
      { month: 'Jan', value: 20 },
      { month: 'Feb', value: 22 },
      { month: 'Mar', value: 18 },
      { month: 'Apr', value: 25 },
      { month: 'May', value: 24 },
      { month: 'Jun', value: 28 },
      { month: 'Jul', value: 35 },
      { month: 'Aug', value: 48 },
      { month: 'Sep', value: 62 },
      { month: 'Oct', value: 78 },
      { month: 'Nov', value: 88 },
      { month: 'Dec', value: 100 },
    ],
    inflectionPoint: 'Jul',
    stats: {
      roi: "+180%",
      cvr: "+200%",
      cpc: ">$9"
    }
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

        {/* Client Results Grid with Real Charts */}
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
                className="relative p-4 sm:p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-colors overflow-hidden"
              >
                {/* Headline */}
                <div className="text-center mb-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-foreground">{study.headline}</h4>
                  <h4 className="text-xl sm:text-2xl font-bold text-primary">{study.subheadline}</h4>
                </div>

                {/* Chart Container */}
                <div className="relative bg-muted/20 rounded-lg p-3 mb-4 border border-border/30">
                  {/* Company Name Badge */}
                  <div className="absolute top-2 left-2 z-10">
                    <div className="text-[10px] font-semibold text-foreground/80 uppercase tracking-wider">
                      {study.business}
                    </div>
                  </div>

                  {/* Description Overlay */}
                  <div className="absolute top-6 left-2 right-2 z-10">
                    <p className="text-[9px] sm:text-[10px] text-muted-foreground leading-relaxed">
                      {study.description.split('but').map((part, i) => 
                        i === 0 ? <span key={i}>{part}</span> : <span key={i} className="text-primary font-medium">but{part}</span>
                      )}
                    </p>
                  </div>

                  {/* Chart */}
                  <div className="h-[140px] sm:h-[160px] mt-14">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={study.chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.6}/>
                            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid 
                          strokeDasharray="3 3" 
                          stroke="hsl(var(--border))" 
                          strokeOpacity={0.3}
                          vertical={true}
                          horizontal={true}
                        />
                        <XAxis 
                          dataKey="month" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 8 }}
                          interval={2}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 8 }}
                          width={25}
                        />
                        <ReferenceLine 
                          x={study.inflectionPoint} 
                          stroke="hsl(var(--primary))" 
                          strokeDasharray="4 4" 
                          strokeOpacity={0.8}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="hsl(var(--foreground))" 
                          strokeWidth={2}
                          fillOpacity={1} 
                          fill={`url(#gradient-${index})`}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Stats Footer */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-[hsl(240,50%,15%)] border border-primary/20">
                  <div className="text-center">
                    <div className="text-[10px] text-red-400 font-medium mb-1">ROI</div>
                    <div className="flex items-center justify-center gap-1">
                      <ArrowUp className="w-3 h-3 text-green-400" />
                      <span className="text-sm font-bold text-foreground">{study.stats.roi}</span>
                    </div>
                  </div>
                  <div className="text-center border-x border-primary/20">
                    <div className="text-[10px] text-red-400 font-medium mb-1">CVR</div>
                    <div className="flex items-center justify-center gap-1">
                      <ArrowUp className="w-3 h-3 text-green-400" />
                      <span className="text-sm font-bold text-foreground">{study.stats.cvr}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] text-red-400 font-medium mb-1">CPC</div>
                    <div className="flex items-center justify-center gap-1">
                      <ArrowDown className="w-3 h-3 text-green-400" />
                      <span className="text-sm font-bold text-foreground">{study.stats.cpc}</span>
                    </div>
                  </div>
                </div>

                {/* Business Name */}
                <div className="mt-4 text-center">
                  <span className="text-lg font-bold text-foreground">{study.business}</span>
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
