import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MessageCircle, RefreshCw, CheckCircle, ArrowRight, Users, Zap, Phone, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const BookingAutomation = () => {
  useEffect(() => {
    document.title = 'Booking Automation System | Automated Scheduling for Businesses - Autonix';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Automated appointment booking that syncs with Calendly, HubSpot, and WhatsApp. Reduce no-shows, eliminate back-and-forth, and fill your calendar automatically.');
    }
  }, []);

  const integrations = [
    { name: 'Calendly', description: 'Sync available time slots in real-time and push bookings directly to your schedule' },
    { name: 'Google Calendar', description: 'Two-way sync ensures no double bookings and accurate availability display' },
    { name: 'HubSpot CRM', description: 'Automatically create or update contact records with appointment details' },
    { name: 'WhatsApp Business', description: 'Customers book through chat and receive confirmations and reminders via WhatsApp' },
    { name: 'Salesforce', description: 'Enterprise-grade CRM integration for complex sales workflows' },
    { name: 'Zoho', description: 'Full suite integration including CRM, calendar, and marketing automation' }
  ];

  const workflow = [
    {
      step: '01',
      title: 'Lead Captures Interest',
      description: 'A potential customer visits your website, calls your number, or messages on WhatsApp expressing interest in your services.'
    },
    {
      step: '02',
      title: 'AI Qualifies the Lead',
      description: 'Before offering appointment times, the system gathers relevant information: service needed, location, budget range, urgency level. This ensures you only spend time on qualified prospects.'
    },
    {
      step: '03',
      title: 'Real-Time Availability Check',
      description: 'The system checks your calendar (and your team members if applicable) to find available slots that match the customer requirements and preferences.'
    },
    {
      step: '04',
      title: 'Instant Booking Confirmation',
      description: 'Customer selects their preferred time and receives immediate confirmation via SMS and email. The appointment appears in your calendar with all collected details.'
    },
    {
      step: '05',
      title: 'Automated Reminder Sequence',
      description: '24-hour and 1-hour reminders go out automatically. Customers can reschedule or cancel through a self-service link, and any changes sync immediately.'
    },
    {
      step: '06',
      title: 'Post-Appointment Follow-Up',
      description: 'After the appointment, automated follow-ups request reviews, offer related services, or nurture the relationship for future business.'
    }
  ];

  const faqs = [
    {
      question: 'How does this reduce no-shows?',
      answer: 'Multiple factors contribute to reduced no-shows. First, the automated reminder sequence (typically 24 hours and 1 hour before) keeps appointments top of mind. Second, the easy self-service rescheduling means customers who have conflicts change their appointment rather than simply not showing up. Third, the qualification step ensures only genuinely interested leads book time. Our clients typically see no-show rates drop from 20-30% down to 5-10%.'
    },
    {
      question: 'Can I customize the booking flow for different services?',
      answer: 'Yes. Different service types can have different qualification questions, appointment lengths, team member assignments, and pricing displays. For example, a dental practice might have one flow for routine cleanings (15 minutes, any hygienist) and another for consultations (30 minutes, with the dentist, includes insurance verification questions).'
    },
    {
      question: 'What if a customer needs to book outside normal hours?',
      answer: 'The booking system operates 24/7 regardless of your business hours. Customers can self-schedule at midnight if they prefer. You control which time slots appear as available. If you offer after-hours appointments, those can be included. If not, customers simply see your regular availability but can book whenever they happen to be online.'
    },
    {
      question: 'How does this integrate with my existing website?',
      answer: 'We provide embed code that adds booking functionality directly to your website—typically as a button, inline form, or popup. The booking interface matches your brand colors and fonts. If you prefer, customers can also book through a dedicated booking page we host for you. Both options sync to the same calendar and CRM.'
    },
    {
      question: 'Can the system handle multiple team members with different schedules?',
      answer: 'Absolutely. Each team member maintains their own calendar and availability settings. The booking system can intelligently route appointments based on service type, customer preferences, or load balancing. For example, new patient consultations might go to a senior team member while routine follow-ups distribute evenly across all available staff.'
    },
    {
      question: 'What data do I get from the booking system?',
      answer: 'You receive comprehensive analytics including: booking source (which pages or channels generate the most appointments), conversion rates (how many visitors become bookings), no-show rates, peak booking times, average time from initial contact to booked appointment, and customer feedback scores. This data helps you optimize marketing spend and operational capacity.'
    }
  ];

  const caseStudies = [
    {
      business: 'Multi-Location Dental Practice',
      before: '45 minutes per day spent on phone scheduling, 28% no-show rate, frequent double-bookings',
      after: '90% of appointments self-scheduled, 8% no-show rate, zero scheduling conflicts',
      revenue: '$4,200/month recovered from reduced no-shows alone'
    },
    {
      business: 'Home Services Company',
      before: 'Missed 40% of after-hours inquiries, slow response time losing jobs to competitors',
      after: '24/7 booking capability, average response time under 2 minutes, 35% increase in booked jobs',
      revenue: '$12,000/month additional revenue from captured after-hours leads'
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
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Automated Scheduling System</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Booking Automation That <span className="text-primary">Fills Your Calendar</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Stop playing phone tag and chasing confirmations. Let customers book instantly through any channel while your calendar stays organized and your no-show rate drops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-cta">
                <Link to="/contact">
                  Automate Your Scheduling <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">See Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-12 sm:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Why Manual Booking Costs You Money</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                The average service business spends 4-6 hours per week on scheduling-related tasks: answering calls, sending calendar links, confirming appointments, and following up with no-shows. At a conservative $50/hour value for that time, scheduling overhead costs $10,000-$15,000 annually.
              </p>
              <p className="mb-6">
                But the direct time cost is not the real problem. The real problem is friction. Every additional step between "I want to book" and "appointment confirmed" reduces conversion. When a potential customer has to call during business hours, leave a message, wait for a callback, and go through a back-and-forth to find a mutual time, many simply give up.
              </p>
              <p className="mb-6">
                Studies from Zipwhip show that 89% of consumers prefer texting businesses over calling. Yet most service businesses force customers into phone-based scheduling. The mismatch between customer preference and business process creates unnecessary lead loss.
              </p>
              <p>
                Then there are no-shows. Industry data suggests service businesses experience 15-30% no-show rates without automated reminders. Each empty appointment slot represents lost revenue that cannot be recovered—the time is gone. For a business with $200 average appointment value and 50 weekly appointments, a 25% no-show rate means $130,000 in annual lost revenue.
              </p>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">How Automated Booking Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From first contact to confirmed appointment without manual intervention.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflow.map((item) => (
                <div key={item.step} className="p-6 rounded-xl bg-muted/30 border border-border">
                  <div className="text-4xl font-bold text-primary/30 mb-3">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-12 sm:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Integrations That Work Together</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We connect your booking system to the tools you already use—no rip-and-replace required.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration) => (
                <div key={integration.name} className="p-6 rounded-xl bg-background border border-border">
                  <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">Booking Automation in Practice</h2>
            
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="p-6 sm:p-8 rounded-2xl bg-muted/30 border border-border">
                  <h3 className="text-xl font-semibold mb-4">{study.business}</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Before Automation</p>
                      <p className="text-foreground">{study.before}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">After Automation</p>
                      <p className="text-foreground">{study.after}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-primary font-semibold">{study.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/case-studies">View All Case Studies <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-12 sm:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">Benefits of Automated Scheduling</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-background border border-border">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Reclaim 4-6 Hours Weekly</h3>
                <p className="text-sm text-muted-foreground">Eliminate phone tag and manual scheduling tasks from your team's workload.</p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <BarChart3 className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Reduce No-Shows by 60%</h3>
                <p className="text-sm text-muted-foreground">Automated reminders and easy rescheduling keep customers accountable.</p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">24/7 Booking Availability</h3>
                <p className="text-sm text-muted-foreground">Capture leads even when your team is asleep or busy with existing customers.</p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <RefreshCw className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Automatic Follow-Ups</h3>
                <p className="text-sm text-muted-foreground">Post-appointment sequences nurture relationships and generate reviews.</p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <MessageCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Multi-Channel Access</h3>
                <p className="text-sm text-muted-foreground">Let customers book via website, WhatsApp, SMS, or phone—all synced to one calendar.</p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Zero Human Error</h3>
                <p className="text-sm text-muted-foreground">No more double bookings, missed entries, or incorrect time zones.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
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
            <h2 className="text-2xl font-bold mb-6 text-center">Complete Your Automation Stack</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/ai-receptionist" className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium">AI Receptionist</span>
              </Link>
              <Link to="/seo-websites" className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium">SEO Websites</span>
              </Link>
              <Link to="/process" className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center">
                <RefreshCw className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium">Our Process</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Automate Your Scheduling?</h2>
            <p className="text-muted-foreground mb-8">
              Book a 15-minute call to see a live demo of automated booking for your specific business type.
            </p>
            <Button asChild size="lg" className="gradient-cta">
              <a href="https://calendly.com/autonix_agency/new-meeting" target="_blank" rel="noopener noreferrer">
                Schedule Your Demo <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BookingAutomation;
