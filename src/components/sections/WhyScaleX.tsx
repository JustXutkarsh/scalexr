import TextHighlighter from '../TextHighlighter';

const caseStudies = [
  {
    headline: "+127% Appointment Recovery",
    business: "Regional Dental Practice",
    industry: "Healthcare",
    proofVisual: {
      label: "Monthly Appointments",
      before: 45,
      after: 102,
      unit: "appts"
    },
    metrics: [
      { label: "Revenue Recovered", value: "$4,200/mo" },
      { label: "Response Time", value: "<1 min" },
      { label: "Missed Calls", value: "−85%" }
    ]
  },
  {
    headline: "15 Hours Saved Weekly",
    business: "Home Services Company",
    industry: "Field Services",
    proofVisual: {
      label: "Admin Hours per Week",
      before: 25,
      after: 10,
      unit: "hrs"
    },
    metrics: [
      { label: "Lead Capture", value: "+250%" },
      { label: "Quote Follow-ups", value: "Automated" },
      { label: "Owner Time Freed", value: "15 hrs/wk" }
    ]
  },
  {
    headline: "+$3,500/mo Revenue Lift",
    business: "Boutique Fitness Studio",
    industry: "Health & Fitness",
    proofVisual: {
      label: "Member Retention Rate",
      before: 65,
      after: 94,
      unit: "%"
    },
    metrics: [
      { label: "New Signups", value: "+193%" },
      { label: "Retention", value: "94%" },
      { label: "Staff Reallocation", value: "2 FTEs" }
    ]
  }
];

const credibilityStats = [
  { value: "19", label: "Active Systems" },
  { value: "5", label: "Regions" },
  { value: "6–9mo", label: "Avg. Deployment" }
];

const WhyScaleX = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Performance Data
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Results from <TextHighlighter><span className="text-primary">businesses like yours</span></TextHighlighter>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Based on automation systems deployed over the last 6–9 months. Individual results vary.
          </p>
        </div>

        {/* Credibility Strip */}
        <div className="flex justify-center gap-12 lg:gap-20 mb-16 pb-8 border-b border-gray-200">
          {credibilityStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Panels */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 flex flex-col"
            >
              {/* Top Section - Headline & Business Info */}
              <div className="p-6 pb-4 text-center border-b border-gray-100">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  {study.headline}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {study.business}
                </p>
                <p className="text-xs text-muted-foreground/70 uppercase tracking-wide mt-1">
                  {study.industry}
                </p>
              </div>

              {/* Middle Section - Proof Visual */}
              <div className="p-6 flex-1 flex flex-col justify-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wide text-center mb-4">
                  {study.proofVisual.label}
                </p>
                
                {/* Static Bar Comparison */}
                <div className="space-y-3">
                  {/* Before */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-12 text-right">Before</span>
                    <div className="flex-1 h-6 bg-gray-100 relative">
                      <div 
                        className="h-full bg-gray-300"
                        style={{ width: `${(study.proofVisual.before / Math.max(study.proofVisual.before, study.proofVisual.after)) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground w-16">
                      {study.proofVisual.before} {study.proofVisual.unit}
                    </span>
                  </div>
                  
                  {/* After */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-foreground font-medium w-12 text-right">After</span>
                    <div className="flex-1 h-6 bg-gray-100 relative">
                      <div 
                        className="h-full bg-foreground"
                        style={{ width: `${(study.proofVisual.after / Math.max(study.proofVisual.before, study.proofVisual.after)) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-foreground w-16">
                      {study.proofVisual.after} {study.proofVisual.unit}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Strip - 3 Key Metrics */}
              <div className="bg-foreground text-background grid grid-cols-3 divide-x divide-background/20">
                {study.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="p-4 text-center">
                    <div className="text-sm lg:text-base font-bold mb-1">
                      {metric.value}
                    </div>
                    <div className="text-[10px] lg:text-xs text-background/70 uppercase tracking-wide">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-10">
          Results shown are from actual client deployments. Your results may vary based on industry, implementation, and market conditions.
        </p>
      </div>
    </section>
  );
};

export default WhyScaleX;
