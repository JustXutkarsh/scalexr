import TextHighlighter from '../TextHighlighter';

const caseStudies = [
  {
    headline: "+127% Appointment Recovery",
    client: "Regional Dental Practice",
    type: "Healthcare • 3 Locations",
    beforeAfter: [
      { metric: "Monthly Appointments", before: "45", after: "102" },
      { metric: "Missed Call Rate", before: "62%", after: "8%" },
      { metric: "Response Time", before: "4.2 hrs", after: "< 1 min" },
    ],
    metrics: [
      { label: "Revenue Impact", value: "$4,200/mo" },
      { label: "Time to ROI", value: "6 weeks" },
      { label: "System Uptime", value: "99.8%" },
    ],
    timeline: "Deployed March 2024 • Data through September 2024"
  },
  {
    headline: "15 Hours/Week Recovered",
    client: "Home Services Provider",
    type: "Trade Services • UK",
    beforeAfter: [
      { metric: "Admin Hours/Week", before: "25", after: "10" },
      { metric: "Lead Response", before: "Next day", after: "Instant" },
      { metric: "Quote Follow-ups", before: "Manual", after: "Automated" },
    ],
    metrics: [
      { label: "Time Saved", value: "15 hrs/wk" },
      { label: "Lead Conversion", value: "+34%" },
      { label: "Active Since", value: "5 months" },
    ],
    timeline: "Deployed April 2024 • Data through September 2024"
  },
  {
    headline: "+$3,500/mo Retention Lift",
    client: "Boutique Fitness Studio",
    type: "Fitness • Australia",
    beforeAfter: [
      { metric: "Member Retention", before: "65%", after: "91%" },
      { metric: "New Signups/Month", before: "28", after: "82" },
      { metric: "Booking No-Shows", before: "23%", after: "7%" },
    ],
    metrics: [
      { label: "Monthly Lift", value: "$3,500" },
      { label: "Churn Reduction", value: "-40%" },
      { label: "Automation Score", value: "94/100" },
    ],
    timeline: "Deployed February 2024 • Data through August 2024"
  }
];

const summaryStats = [
  { value: "19", label: "Active Systems" },
  { value: "5", label: "Regions" },
  { value: "6–9 mo", label: "Avg. Data Window" },
];

const WhyScaleX = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Results from <TextHighlighter><span className="text-primary">businesses like yours</span></TextHighlighter>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg">
            Performance data from automation systems deployed over the last 6–9 months. Figures represent median outcomes.
          </p>
        </div>

        {/* Summary Stats Row */}
        <div className="flex gap-12 mb-16 pb-6 border-b border-border">
          {summaryStats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Case Study Panels */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="border border-border p-6 lg:p-8"
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                  {study.headline}
                </h3>
                <div className="text-sm text-muted-foreground">
                  {study.client} — {study.type}
                </div>
              </div>

              {/* Before/After Table */}
              <div className="mb-6 border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wide text-muted-foreground font-medium">Metric</th>
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wide text-muted-foreground font-medium">Before</th>
                      <th className="text-left py-3 px-4 text-xs uppercase tracking-wide text-muted-foreground font-medium">After</th>
                    </tr>
                  </thead>
                  <tbody>
                    {study.beforeAfter.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex < study.beforeAfter.length - 1 ? "border-b border-border" : ""}>
                        <td className="py-3 px-4 text-foreground">{row.metric}</td>
                        <td className="py-3 px-4 text-muted-foreground">{row.before}</td>
                        <td className="py-3 px-4 text-foreground font-bold">{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Metrics Row */}
              <div className="flex flex-wrap gap-8 lg:gap-12 mb-4 pt-4 border-t border-border">
                {study.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex}>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{metric.label}</div>
                    <div className="text-lg font-bold text-foreground">{metric.value}</div>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div className="text-xs text-muted-foreground">
                {study.timeline}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground max-w-2xl">
            Results are based on self-reported client data and internal tracking. Individual outcomes vary based on business type, market conditions, and implementation. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyScaleX;
