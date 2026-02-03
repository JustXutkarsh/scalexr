import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Clock, DollarSign, CheckCircle, ArrowRight, Users, Phone, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const CaseStudies = () => {
  useEffect(() => {
    document.title = 'Case Studies | Real Results from AI Automation - Autonix';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Real case studies showing how local businesses increased revenue with AI automation and SEO websites. Detailed before/after metrics from dental clinics, home services, and fitness studios.');
    }
  }, []);

  const caseStudies = [
    {
      id: 'dental-practice',
      title: 'Multi-Location Dental Practice',
      location: 'Phoenix Metropolitan Area',
      industry: 'Healthcare / Dental',
      summary: 'A 3-location dental practice struggling with missed calls, high no-show rates, and inefficient scheduling across locations.',
      challenge: {
        description: 'The practice was receiving over 200 calls per week across three locations. With front desk staff juggling in-person patients, approximately 35% of calls went to voicemail. Their no-show rate averaged 28%, and scheduling conflicts between locations created patient frustration. The practice owner estimated they were losing $8,000-$12,000 monthly in unrealized revenue.',
        painPoints: [
          '35% of calls going to voicemail during business hours',
          '28% no-show rate causing schedule gaps',
          'Double-bookings between locations',
          'No after-hours booking capability',
          'Staff overwhelmed with scheduling tasks'
        ]
      },
      solution: {
        description: 'We implemented a comprehensive automation system including an AI receptionist that handles calls 24/7, an integrated booking system across all three locations, and an automated reminder sequence.',
        components: [
          'AI receptionist handling new patient inquiries and appointment requests',
          'Unified booking system with real-time availability across all locations',
          'Automated SMS reminders at 48 hours, 24 hours, and 2 hours before appointments',
          'Self-service rescheduling portal reducing staff workload',
          'CRM integration pushing patient data to their practice management software'
        ]
      },
      results: {
        timeline: '90 days post-implementation',
        metrics: [
          { label: 'Missed Calls', before: '35%', after: '3%', improvement: '91% reduction' },
          { label: 'No-Show Rate', before: '28%', after: '9%', improvement: '68% reduction' },
          { label: 'After-Hours Bookings', before: '0', after: '45/month', improvement: 'New revenue stream' },
          { label: 'Monthly Revenue Recovery', before: 'N/A', after: '$4,200', improvement: 'From reduced no-shows alone' }
        ],
        testimonial: {
          quote: 'The AI handles calls better than we expected. Patients genuinely think they are talking to a person. Our front desk finally has time to focus on patients in the office.',
          author: 'Dr. Michael Chen',
          role: 'Practice Owner'
        }
      }
    },
    {
      id: 'home-services',
      title: 'HVAC and Plumbing Company',
      location: 'Dallas-Fort Worth, Texas',
      industry: 'Home Services',
      summary: 'A family-owned HVAC and plumbing company losing emergency calls to competitors who answered faster.',
      challenge: {
        description: 'Emergency calls are the highest-margin work in home services, but they require immediate response. This company was losing 40-50% of their after-hours emergency calls because nobody could answer at 2 AM. Competitors with 24/7 answering services were capturing those jobs. Additionally, the owner was personally handling many calls, limiting his ability to manage the business.',
        painPoints: [
          'Losing 40-50% of emergency calls outside business hours',
          'Owner fielding calls personally, unable to focus on operations',
          'Slow response time during peak hours',
          'No systematic lead follow-up',
          'Inconsistent customer experience depending on who answered'
        ]
      },
      solution: {
        description: 'We deployed an AI receptionist specifically trained for emergency dispatch, plus a lead nurturing system for non-emergency estimates.',
        components: [
          'AI receptionist with emergency triage capabilities (severity assessment, dispatch triggers)',
          'Integration with their dispatch software for real-time technician availability',
          'Automated estimate follow-ups for leads that did not convert immediately',
          'Review request automation post-service',
          'WhatsApp channel for customers who prefer texting'
        ]
      },
      results: {
        timeline: '120 days post-implementation',
        metrics: [
          { label: 'Emergency Call Capture', before: '50-60%', after: '98%', improvement: '63% increase' },
          { label: 'Average Response Time', before: '8 minutes', after: '< 30 seconds', improvement: '94% faster' },
          { label: 'Owner Call Volume', before: '30+ calls/day', after: '5-7 calls/day', improvement: '80% reduction' },
          { label: 'Monthly Revenue Increase', before: 'N/A', after: '$12,000', improvement: 'From captured after-hours leads' }
        ],
        testimonial: {
          quote: 'I was skeptical about AI handling emergency calls, but it actually performs better than our previous answering service. It asks the right questions and dispatches faster than any human could at 3 AM.',
          author: 'Robert Martinez',
          role: 'Owner'
        }
      }
    },
    {
      id: 'fitness-studio',
      title: 'Boutique Fitness Studio',
      location: 'Austin, Texas',
      industry: 'Fitness / Wellness',
      summary: 'A boutique fitness studio with poor online visibility and manual class booking that created friction for new members.',
      challenge: {
        description: 'Despite being in a competitive market, the studio had minimal online presence. Their website was template-based with no local SEO optimization. Class booking required calling or visiting in person, which deterred busy professionals. Trial class conversion to membership was only 22% because there was no automated follow-up system.',
        painPoints: [
          'Website not ranking for any local fitness keywords',
          'Manual class booking creating friction',
          'Trial-to-membership conversion at only 22%',
          'No automated lead nurturing',
          'Losing potential members to competitors with online booking'
        ]
      },
      solution: {
        description: 'We rebuilt their website with local SEO focus, implemented automated class booking, and created a trial member nurturing sequence.',
        components: [
          'New SEO-optimized website with class-specific landing pages',
          'Online class booking with automatic waitlist management',
          'Trial member email sequence (5 emails over 14 days)',
          'SMS reminders for booked classes',
          'Automated review requests from members after their 10th class',
          'Google Business Profile optimization'
        ]
      },
      results: {
        timeline: '6 months post-implementation',
        metrics: [
          { label: 'Organic Traffic', before: '120/month', after: '890/month', improvement: '640% increase' },
          { label: 'Trial-to-Member Conversion', before: '22%', after: '41%', improvement: '86% improvement' },
          { label: 'Google Map Pack Ranking', before: 'Not visible', after: 'Position 2', improvement: 'First page visibility' },
          { label: 'Monthly New Members', before: '8-10', after: '22-28', improvement: '160% increase' }
        ],
        testimonial: {
          quote: 'The online booking alone was worth the investment. But seeing us show up when people search for fitness studios in Austin—that is changing our business. We are getting members who never would have found us before.',
          author: 'Jennifer Walsh',
          role: 'Studio Owner'
        }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Real Results, Real Numbers</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Case Studies: <span className="text-primary">Automation in Action</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Detailed breakdowns of how local service businesses transformed their operations with AI automation and SEO-optimized websites. Before and after metrics included.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        {caseStudies.map((study, index) => (
          <section key={study.id} className={`py-12 sm:py-16 lg:py-20 px-4 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}>
            <div className="container mx-auto max-w-5xl">
              {/* Header */}
              <div className="mb-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{study.industry}</span>
                  <span className="text-muted-foreground text-sm">{study.location}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">{study.title}</h2>
                <p className="text-lg text-muted-foreground">{study.summary}</p>
              </div>

              {/* Challenge */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  The Challenge
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{study.challenge.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {study.challenge.painPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-destructive mt-1">•</span>
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  The Solution
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{study.solution.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {study.solution.components.map((component, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{component}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  The Results
                  <span className="text-sm font-normal text-muted-foreground">({study.results.timeline})</span>
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {study.results.metrics.map((metric, i) => (
                    <div key={i} className="p-4 rounded-xl bg-background border border-border">
                      <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-sm text-muted-foreground line-through">{metric.before}</span>
                        <ArrowRight className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xl font-bold text-primary">{metric.after}</span>
                      </div>
                      <p className="text-xs text-primary">{metric.improvement}</p>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="p-6 rounded-xl bg-muted/50 border border-border">
                  <blockquote className="text-foreground italic mb-4">"{study.results.testimonial.quote}"</blockquote>
                  <div className="text-sm">
                    <span className="font-semibold">{study.results.testimonial.author}</span>
                    <span className="text-muted-foreground"> — {study.results.testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Summary Section */}
        <section className="py-12 sm:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Common Patterns Across All Case Studies</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                While each business is unique, certain patterns emerge across our case studies. Understanding these patterns helps set realistic expectations for what automation can achieve.
              </p>
              <p className="mb-6">
                <strong className="text-foreground">Immediate impact on missed opportunities:</strong> The fastest results come from capturing leads that were previously lost. Missed calls, after-hours inquiries, and slow response times represent revenue that competitors are taking. Fixing these problems shows measurable ROI within weeks, not months.
              </p>
              <p className="mb-6">
                <strong className="text-foreground">Compounding SEO results:</strong> Unlike automation (which delivers quick wins), SEO takes time to build. But the payoff compounds. After 6-12 months, organic traffic becomes a reliable, predictable lead source that does not require ongoing ad spend. This is why we recommend starting SEO work alongside automation—by the time you have maximized immediate opportunities, organic traffic is ramping up.
              </p>
              <p className="mb-6">
                <strong className="text-foreground">Staff reallocation, not replacement:</strong> None of our clients fired employees because of automation. Instead, staff time shifted from repetitive tasks (answering the same questions, scheduling back-and-forth, reminder calls) to higher-value work (patient care, customer service, sales). This improves both job satisfaction and business outcomes.
              </p>
              <p>
                <strong className="text-foreground">Data-driven iteration:</strong> Every automated interaction generates data. We use this data to continuously improve—adjusting conversation flows, optimizing reminder timing, and identifying new automation opportunities. The systems get smarter over time.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 sm:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Explore Our Solutions</h2>
            <div className="grid sm:grid-cols-4 gap-4">
              <Link to="/ai-receptionist" className="p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-colors text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium text-sm">AI Receptionist</span>
              </Link>
              <Link to="/booking-automation" className="p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-colors text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium text-sm">Booking Automation</span>
              </Link>
              <Link to="/seo-websites" className="p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-colors text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium text-sm">SEO Websites</span>
              </Link>
              <Link to="/industries" className="p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-colors text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium text-sm">Industries</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Want Results Like These?</h2>
            <p className="text-muted-foreground mb-8">
              Book a 15-minute call to discuss your current challenges and see how our approach would apply to your specific business.
            </p>
            <Button asChild size="lg" className="gradient-cta">
              <a href="https://calendly.com/autonix_agency/new-meeting" target="_blank" rel="noopener noreferrer">
                Schedule Your Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
