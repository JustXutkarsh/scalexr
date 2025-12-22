import { useRef, useEffect, useState } from 'react';
import { Cpu, Target, TrendingUp, Layers, Rocket, Users, Globe, DollarSign, ArrowUp, ArrowDown, Phone, Calendar, MessageSquare } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

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

const globalStats = [
  { icon: Users, value: "19", label: "Clients" },
  { icon: Globe, value: "5", label: "Countries Served" },
  { icon: DollarSign, value: "$1M+", label: "Revenue Generated" }
];

const beforeAfterData = [
  {
    metric: "Monthly Leads",
    before: 45,
    after: 312,
    icon: Target,
    improvement: "+593%"
  },
  {
    metric: "Missed Calls",
    before: 68,
    after: 3,
    icon: Phone,
    improvement: "-96%",
    isReduction: true
  },
  {
    metric: "Bookings/Month",
    before: 120,
    after: 485,
    icon: Calendar,
    improvement: "+304%"
  },
  {
    metric: "Response Time",
    before: "4hrs",
    after: "< 30s",
    icon: MessageSquare,
    improvement: "-99%",
    isReduction: true
  }
];

const growthChartData = [
  { month: 'Jan', before: 12000, after: 12000 },
  { month: 'Feb', before: 13500, after: 18000 },
  { month: 'Mar', before: 14200, after: 28500 },
  { month: 'Apr', before: 13800, after: 42000 },
  { month: 'May', before: 15000, after: 58000 },
  { month: 'Jun', before: 14500, after: 78500 },
];

const clientResults = [
  { name: "Dental Clinic", location: "New York", saved: "$8,400/mo", metric: "Patient bookings up 280%" },
  { name: "Fitness Studio", location: "London", saved: "$5,200/mo", metric: "Lead response time: 30 seconds" },
  { name: "Real Estate Agency", location: "Dubai", saved: "$12,800/mo", metric: "Closed deals increased 190%" },
];

const WhyScaleX = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [countersAnimated, setCountersAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setCountersAnimated(true), 500);
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
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why ScaleX</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Trusted by <span className="text-primary">growing businesses</span> worldwide
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're not just another agency. We're growth partners who have generated over $1M in additional revenue for our clients.
          </p>
        </div>

        {/* Global Stats */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {globalStats.map((stat, index) => (
            <div 
              key={index}
              className="relative group p-6 rounded-2xl glass text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className={`text-3xl lg:text-4xl font-bold text-primary mb-1 transition-all duration-1000 ${
                countersAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Before/After Comparison */}
        <div 
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Average Client Results: <span className="text-primary">Before vs After</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {beforeAfterData.map((item, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl glass hover:glow-border transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold">{item.metric}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <span className="text-sm text-muted-foreground">Before</span>
                    <span className="font-bold text-destructive">{item.before}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <span className="text-sm text-muted-foreground">After</span>
                    <span className="font-bold text-primary">{item.after}</span>
                  </div>
                </div>
                
                <div className={`mt-4 flex items-center justify-center gap-1 text-lg font-bold ${
                  item.isReduction ? 'text-green-400' : 'text-primary'
                }`}>
                  {item.isReduction ? <ArrowDown className="w-5 h-5" /> : <ArrowUp className="w-5 h-5" />}
                  {item.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Growth Chart */}
        <div 
          className={`mb-16 p-8 rounded-3xl glass transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Revenue Growth Trajectory</h3>
              <p className="text-muted-foreground">Average monthly revenue before and after ScaleX automation</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-muted-foreground/50" />
                <span className="text-sm text-muted-foreground">Before ScaleX</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">After ScaleX</span>
              </div>
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBefore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6b7280" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6b7280" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorAfter" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)'
                  }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                />
                <Area 
                  type="monotone" 
                  dataKey="before" 
                  stroke="#6b7280" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorBefore)" 
                  name="Before ScaleX"
                />
                <Area 
                  type="monotone" 
                  dataKey="after" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorAfter)" 
                  name="After ScaleX"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 pt-6 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">+442%</div>
              <div className="text-sm text-muted-foreground">Average Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$66,500</div>
              <div className="text-sm text-muted-foreground">Avg. Monthly Revenue After</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">3.2 months</div>
              <div className="text-sm text-muted-foreground">Time to Full ROI</div>
            </div>
          </div>
        </div>

        {/* Client Success Stories */}
        <div 
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Real Results from <span className="text-primary">Real Clients</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {clientResults.map((client, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl glass hover:glow-border transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                      {client.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{client.name}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Globe className="w-3 h-3" /> {client.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mb-4">
                    <div className="text-sm text-muted-foreground mb-1">Monthly Savings</div>
                    <div className="text-2xl font-bold text-primary">{client.saved}</div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-muted-foreground">{client.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - Original Cards */}
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            What Makes Us <span className="text-primary">Different</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl glass transition-all duration-500 hover:glow-border ${
                  index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all group-hover:scale-110 group-hover:bg-primary/20">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyScaleX;
