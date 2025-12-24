const caseStudies = [
  {
    headline: "+$4,200/month recovered from missed appointments",
    subline: "Regional dental practice · Northeast US · 3 locations",
    automated: [
      "Appointment booking via chat",
      "Missed call callbacks",
      "Patient reminders (24h + 2h)",
      "Rescheduling for cancellations"
    ],
    beforeAfter: [
      { metric: "Monthly appointments", before: "45", after: "102" },
      { metric: "Missed call rate", before: "62%", after: "8%" },
      { metric: "Avg response time", before: "4.2 hrs", after: "< 1 min" }
    ],
    outcomes: [
      "+$4,200–6,800/mo in recovered bookings",
      "Front desk handles in-office patients only",
      "No more voicemail backlog"
    ],
    footer: "Deployed Mar 2024 · Data through Sep 2024"
  },
  {
    headline: "15 hours/week freed from manual admin",
    subline: "Home services provider · UK · Solo operator",
    automated: [
      "Lead capture from website",
      "Quote request follow-ups",
      "Job scheduling confirmations",
      "Review requests post-job"
    ],
    beforeAfter: [
      { metric: "Admin hours / week", before: "25", after: "10" },
      { metric: "Lead response time", before: "Next day", after: "Instant" },
      { metric: "Quote follow-up", before: "Manual", after: "Automated" }
    ],
    outcomes: [
      "Owner stopped tracking leads in spreadsheets",
      "34% more quotes converted",
      "Evenings no longer spent on admin"
    ],
    footer: "Deployed Apr 2024 · Data through Sep 2024"
  },
  {
    headline: "+$3,500/month recovered from member retention",
    subline: "Boutique fitness studio · Australia · 1 location",
    automated: [
      "Membership inquiries",
      "Booking confirmations",
      "Renewal reminders",
      "No-show follow-ups"
    ],
    beforeAfter: [
      { metric: "Member retention", before: "65%", after: "91%" },
      { metric: "New signups / month", before: "28", after: "82" },
      { metric: "No-show rate", before: "23%", after: "7%" }
    ],
    outcomes: [
      "+$3,500/month in recovered revenue",
      "Fewer cancellations",
      "Staff no longer chasing renewals"
    ],
    footer: "Deployed Feb 2024 · Data through Aug 2024"
  }
];

const WhyScaleX = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            <span className="bg-white/10 px-2 py-1">Operational results from deployed automation systems</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Measured across live systems running for 3–9 months. Median outcomes shown.
          </p>
        </div>

        {/* Header Divider */}
        <div className="border-t border-border mb-12" />

        {/* Case Studies */}
        <div>
          {caseStudies.map((study, index) => (
            <div key={index}>
              {/* Subline */}
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {study.subline}
              </p>

              {/* Headline */}
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
                {study.headline}
              </h3>

              {/* Three Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                {/* Left Column - What we automated */}
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                    What we automated
                  </div>
                  <ul className="space-y-1.5">
                    {study.automated.map((item, i) => (
                      <li key={i} className="text-sm text-foreground">
                        – {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Middle Column - Before → After */}
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                    Before → After
                  </div>
                  <div className="space-y-1.5">
                    {study.beforeAfter.map((row, i) => (
                      <div key={i} className="text-sm">
                        <span className="text-muted-foreground">{row.metric}</span>
                        <span className="text-foreground ml-4">{row.before} → {row.after}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Outcome */}
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                    Outcome
                  </div>
                  <ul className="space-y-1.5">
                    {study.outcomes.map((item, i) => (
                      <li key={i} className="text-sm text-foreground">
                        – {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Metadata */}
              <p className="text-xs text-muted-foreground mb-8">
                {study.footer}
              </p>

              {/* Divider before next case */}
              {index < caseStudies.length - 1 && (
                <div className="border-t border-border mb-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyScaleX;
