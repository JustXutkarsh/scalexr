import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Settings, Plug, TestTube, Rocket, TrendingUp, ArrowRight, Phone, Calendar, Zap, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const Process = () => {
  useEffect(() => {
    document.title = 'Our Process | How Autonix Implements Automation Systems';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Step-by-step process for implementing AI automation and SEO websites. From initial audit to launch and ongoing optimization. Clear timeline and expectations.');
    }
  }, []);

  const processSteps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Audit',
      duration: 'Week 1',
      description: 'We start by understanding your business inside and out. This is not a generic sales call—it is a deep dive into your current operations, pain points, and growth objectives.',
      activities: [
        'Initial consultation to understand your business model and goals',
        'Audit of current website (if exists) for SEO and conversion issues',
        'Analysis of your lead sources and customer acquisition costs',
        'Review of existing tools and integrations',
        'Competitor analysis to identify opportunities',
        'Documentation of your most common customer inquiries and workflows'
      ],
      deliverables: [
        'Comprehensive audit report with prioritized recommendations',
        'Gap analysis showing current vs. potential performance',
        'Proposed automation architecture diagram',
        'SEO opportunity assessment with target keywords'
      ]
    },
    {
      number: '02',
      icon: Settings,
      title: 'Strategy & Architecture',
      duration: 'Week 1-2',
      description: 'Based on the audit, we design a customized system architecture. This includes which automations to implement, how they connect, and what the customer experience looks like at each touchpoint.',
      activities: [
        'Define automation workflows for each customer journey stage',
        'Design AI receptionist conversation flows and knowledge base',
        'Plan website structure and content strategy',
        'Map integrations between your existing tools',
        'Create project timeline with milestones',
        'Establish success metrics and KPIs'
      ],
      deliverables: [
        'Detailed project plan with timeline',
        'Conversation flow diagrams for AI systems',
        'Website sitemap and wireframes',
        'Integration architecture documentation',
        'Content brief for each website page'
      ]
    },
    {
      number: '03',
      icon: Plug,
      title: 'Integration Setup',
      duration: 'Week 2-3',
      description: 'We connect your existing tools and set up the technical infrastructure. This happens in parallel with content creation to maximize efficiency.',
      activities: [
        'Connect calendar systems (Google Calendar, Outlook, Calendly)',
        'Integrate CRM (HubSpot, Salesforce, Zoho, or your preferred tool)',
        'Set up phone and messaging channels (VoIP, WhatsApp Business)',
        'Configure automation platform (n8n) for workflow orchestration',
        'Implement tracking and analytics',
        'Set up staging environment for testing'
      ],
      deliverables: [
        'All integrations connected and authenticated',
        'Data flowing correctly between systems',
        'Backup and recovery procedures documented',
        'Admin access and credentials provided'
      ]
    },
    {
      number: '04',
      icon: TestTube,
      title: 'Development & Testing',
      duration: 'Week 3-4',
      description: 'We build and rigorously test everything before it touches a real customer. This includes the website, AI conversation flows, booking system, and all automations.',
      activities: [
        'Website development with SEO optimization',
        'AI receptionist training on your business information',
        'Booking flow configuration and calendar sync testing',
        'Email and SMS sequence creation',
        'Integration testing across all connected tools',
        'Load testing to ensure systems handle peak demand',
        'Quality assurance on all customer-facing elements'
      ],
      deliverables: [
        'Fully functional website on staging',
        'Trained AI receptionist ready for deployment',
        'All automation workflows tested and validated',
        'User acceptance testing sign-off'
      ]
    },
    {
      number: '05',
      icon: Rocket,
      title: 'Launch & Go-Live',
      duration: 'Week 4-5',
      description: 'We deploy everything in a controlled manner, monitor closely, and ensure nothing breaks during the transition. You are never left without support during this critical phase.',
      activities: [
        'DNS and domain configuration',
        'Production deployment with monitoring',
        'Phone number porting or forwarding setup',
        'Team training on new systems',
        'Documentation and runbooks provided',
        '24-48 hour hypercare period with immediate support'
      ],
      deliverables: [
        'Live website indexed by Google',
        'AI receptionist handling real inquiries',
        'All automations active and monitored',
        'Team trained and comfortable with new workflows',
        'Support escalation procedures established'
      ]
    },
    {
      number: '06',
      icon: TrendingUp,
      title: 'Optimization & Growth',
      duration: 'Ongoing',
      description: 'Launch is the beginning, not the end. We continuously monitor performance, gather data, and optimize based on real results. Systems get smarter and more effective over time.',
      activities: [
        'Weekly performance reviews during first month',
        'Monthly optimization based on conversion data',
        'AI conversation flow refinements based on real interactions',
        'SEO content updates and link building',
        'A/B testing of landing pages and CTAs',
        'Quarterly strategy reviews to identify new opportunities'
      ],
      deliverables: [
        'Monthly performance reports',
        'Continuous improvement to AI accuracy',
        'Updated content as needed',
        'Proactive recommendations for growth'
      ]
    }
  ];

  const timeline = [
    { phase: 'Discovery & Audit', weeks: '1' },
    { phase: 'Strategy & Architecture', weeks: '1-2' },
    { phase: 'Integration Setup', weeks: '2-3' },
    { phase: 'Development & Testing', weeks: '3-4' },
    { phase: 'Launch & Go-Live', weeks: '4-5' },
    { phase: 'Optimization', weeks: 'Ongoing' }
  ];

  const faqs = [
    {
      question: 'How long does the entire process take?',
      answer: 'Most projects launch within 4-5 weeks from kickoff. Complex implementations with multiple locations or custom integrations may take 6-8 weeks. We provide a detailed timeline during the Strategy phase and keep you updated on progress throughout.'
    },
    {
      question: 'What do I need to provide during the process?',
      answer: 'We need access to your existing tools (calendar, CRM, etc.), information about your services and pricing, answers to common customer questions (for AI training), and timely feedback on deliverables. The more responsive you are, the faster we move.'
    },
    {
      question: 'Can we implement in phases instead of all at once?',
      answer: 'Absolutely. Many clients start with one component (often AI receptionist or booking automation) and add others over time. We design systems to be modular so they can grow with your needs.'
    },
    {
      question: 'What happens if something breaks after launch?',
      answer: 'All projects include 30 days of priority support post-launch. After that, we offer ongoing support packages. For critical issues (system down, leads not being captured), we respond within 1 hour during business hours.'
    },
    {
      question: 'How much involvement is required from my team?',
      answer: 'Minimal. We do the heavy lifting. Your team provides information during Discovery, reviews and approves deliverables, and participates in a brief training session before launch. Typically 2-4 hours of your time per week during implementation.'
    },
    {
      question: 'What if I want to make changes after launch?',
      answer: 'Systems are designed for flexibility. Minor changes (updating business hours, adding FAQs) you can make yourself with training we provide. Larger changes (new automation workflows, additional integrations) we handle for you under maintenance agreements or as separate projects.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-primary">Implementation Process</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              A proven, systematic approach to implementing automation and SEO systems. Clear milestones, predictable timelines, and no surprises.
            </p>
          </div>
        </section>

        {/* Timeline Overview */}
        <section className="py-8 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">{item.phase}</span>
                  <span className="text-xs text-muted-foreground">(Week {item.weeks})</span>
                  {index < timeline.length - 1 && <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        {processSteps.map((step, index) => (
          <section key={step.number} className={`py-12 sm:py-16 lg:py-20 px-4 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}>
            <div className="container mx-auto max-w-5xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0 hidden sm:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary/30 mt-2">{step.number}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 sm:hidden">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary/30">{step.number}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-2xl sm:text-3xl font-bold">{step.title}</h2>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{step.duration}</span>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 ml-0 sm:ml-22">
                {/* Activities */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Activities</h3>
                  <ul className="space-y-3">
                    {step.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Deliverables</h3>
                  <ul className="space-y-3">
                    {step.deliverables.map((deliverable, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* What Sets Us Apart */}
        <section className="py-12 sm:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">What Sets Our Process Apart</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                <strong className="text-foreground">No scope creep, no surprises.</strong> Every project starts with a fixed scope and timeline. If requirements change mid-project (they sometimes do), we discuss the impact openly and adjust accordingly. You always know what you are getting and when.
              </p>
              <p className="mb-6">
                <strong className="text-foreground">We own the outcome, not just the deliverables.</strong> Many agencies hand off a website and disappear. We measure success by your business results—leads generated, appointments booked, revenue impact. If the system is not performing, we fix it.
              </p>
              <p className="mb-6">
                <strong className="text-foreground">Parallel workstreams for speed.</strong> While your website is being built, integrations are being set up. While AI is being trained, content is being written. This parallel approach compresses timelines without sacrificing quality.
              </p>
              <p>
                <strong className="text-foreground">Training included, not upsold.</strong> We do not leave you dependent on us for simple changes. Your team learns how to make updates, check reports, and handle common adjustments. You maintain control of your systems.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">Process FAQs</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6 rounded-xl bg-muted/30 border border-border">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 sm:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Explore What We Build</h2>
            <div className="grid sm:grid-cols-4 gap-4">
              <Link to="/ai-receptionist" className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium text-sm">AI Receptionist</span>
              </Link>
              <Link to="/booking-automation" className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium text-sm">Booking Automation</span>
              </Link>
              <Link to="/seo-websites" className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium text-sm">SEO Websites</span>
              </Link>
              <Link to="/case-studies" className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium text-sm">Case Studies</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-muted-foreground mb-8">
              Book a 15-minute call to walk through the process for your specific situation and get a clear timeline for implementation.
            </p>
            <Button asChild size="lg" className="gradient-cta">
              <a href="https://calendly.com/scalee-x/new-meeting" target="_blank" rel="noopener noreferrer">
                Schedule Your Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Process;
