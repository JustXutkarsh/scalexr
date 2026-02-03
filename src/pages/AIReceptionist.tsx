import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Clock, Users, CheckCircle, ArrowRight, Bot, Calendar, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const AIReceptionist = () => {
  useEffect(() => {
    document.title = 'AI Receptionist for Businesses | 24/7 Automated Call Answering - Autonix';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI receptionist that answers calls and WhatsApp messages 24/7, books appointments automatically, and never misses a lead. Perfect for clinics, salons, and service businesses.');
    }
  }, []);

  const features = [
    {
      icon: Phone,
      title: 'Instant Call Response',
      description: 'Every call gets answered within seconds, even at 2 AM on a Sunday. No voicemail, no missed opportunities.'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp & SMS Integration',
      description: 'Customers can text your business number and get immediate, intelligent responses that feel human.'
    },
    {
      icon: Calendar,
      title: 'Automatic Appointment Booking',
      description: 'The AI checks your calendar availability and books appointments directly without any back-and-forth.'
    },
    {
      icon: Shield,
      title: 'Smart Escalation',
      description: 'Complex queries or high-value leads get flagged and routed to your team with full context.'
    }
  ];

  const industries = [
    { name: 'Dental Clinics', example: 'New patient inquiries, appointment scheduling, insurance questions' },
    { name: 'Medical Practices', example: 'Appointment confirmations, prescription refill requests, after-hours triage' },
    { name: 'Law Firms', example: 'Initial consultations, case status updates, document requests' },
    { name: 'Home Services', example: 'Quote requests, emergency dispatch, service scheduling' },
    { name: 'Real Estate', example: 'Property inquiries, showing bookings, buyer qualification' },
    { name: 'Fitness Studios', example: 'Class bookings, membership inquiries, personal training requests' }
  ];

  const faqs = [
    {
      question: 'How does the AI receptionist handle complex questions it cannot answer?',
      answer: 'The AI is trained on your business-specific information including services, pricing, policies, and FAQs. When it encounters a question outside its knowledge base or detects that a caller needs human attention (such as complaints or high-value opportunities), it immediately flags the conversation, collects the caller\'s contact details, and notifies your team via email, SMS, or your preferred channel. The caller never feels abandoned—they receive a clear timeline for when someone will follow up.'
    },
    {
      question: 'Can the AI receptionist integrate with my existing calendar and CRM?',
      answer: 'Yes. The AI connects directly to popular calendar systems including Google Calendar, Outlook, Calendly, and Acuity. For CRM integration, we support HubSpot, Salesforce, Zoho, and many others through our automation layer. When a call or message comes in, the AI can access customer history, update records, and create new entries automatically. This means your team always has context when they follow up.'
    },
    {
      question: 'How long does setup take?',
      answer: 'Most businesses are fully operational within 5-7 business days. The process includes an initial discovery call to understand your business, collecting your FAQs and service details, configuring the AI with your calendar and CRM integrations, testing all workflows, and a soft launch with monitoring. We handle all the technical setup—you just need to provide information about your business and approve the conversation flows.'
    },
    {
      question: 'What happens if my internet goes down?',
      answer: 'The AI receptionist runs on cloud infrastructure, not on your local network. As long as your phone system can forward calls (which works even during internet outages for most VoIP providers), the AI continues operating normally. Messages sent via WhatsApp or SMS also function independently of your office internet connection.'
    },
    {
      question: 'How natural does the AI sound to callers?',
      answer: 'Modern conversational AI has advanced significantly. Most callers cannot distinguish between our AI and a human receptionist, especially in routine interactions like scheduling or answering common questions. The AI handles interruptions, asks clarifying questions, and maintains context throughout the conversation. We can also customize the voice, speaking pace, and personality to match your brand.'
    },
    {
      question: 'What is the cost compared to hiring a human receptionist?',
      answer: 'A full-time receptionist typically costs $35,000-$50,000 annually in salary, plus benefits, training, and overhead. They work 40 hours per week and take vacations. An AI receptionist operates 24/7/365 for a fraction of that cost—typically $500-$2,000 per month depending on call volume. More importantly, the AI never calls in sick, never quits, and handles multiple conversations simultaneously during peak periods.'
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
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">AI-Powered Customer Service</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI Receptionist That <span className="text-primary">Never Misses a Call</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Your business loses revenue every time a call goes to voicemail. An AI receptionist answers every inquiry instantly, books appointments automatically, and works 24 hours a day without breaks or sick days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-cta">
                <Link to="/contact">
                  Get Your AI Receptionist <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">See Results</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-12 sm:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">The Hidden Cost of Missed Calls</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                Research from BIA/Kelsey shows that 85% of callers who cannot reach a business on the first attempt will not call back. They move on to a competitor who answers. For a local service business, each missed call represents $200-$500 in potential revenue. If you miss just 5 calls per week, that adds up to $52,000-$130,000 in lost annual revenue.
              </p>
              <p className="mb-6">
                The problem compounds during peak hours and after-hours. Most service businesses receive 30-40% of their calls outside regular business hours. These are often motivated buyers—someone whose AC breaks at 9 PM or who finally has time to research dental implants after putting the kids to bed. Without immediate response, these leads go cold.
              </p>
              <p>
                Traditional solutions create their own problems. Hiring additional staff increases overhead and still leaves gaps in coverage. Voicemail systems frustrate callers and create follow-up backlogs. Answering services employ humans who lack deep knowledge of your business and often provide generic responses that fail to convert inquiries into appointments.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">How AI Answering Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From incoming call to booked appointment in under 3 minutes, with zero human intervention required.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-muted/30 border border-border">
              <h3 className="text-xl font-semibold mb-4">The Complete Workflow</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Step 1: Incoming Contact</strong> — A customer calls your business number or sends a WhatsApp message. The AI receptionist picks up instantly (for calls) or responds within seconds (for messages).
                </p>
                <p>
                  <strong className="text-foreground">Step 2: Intent Recognition</strong> — The AI identifies what the caller needs: new appointment, existing appointment change, general question, or something requiring human attention.
                </p>
                <p>
                  <strong className="text-foreground">Step 3: Information Gathering</strong> — For appointments, the AI collects necessary details: preferred dates and times, service type, any special requirements. For questions, it provides accurate answers from your knowledge base.
                </p>
                <p>
                  <strong className="text-foreground">Step 4: Booking Confirmation</strong> — The AI checks real-time calendar availability, books the appointment, and sends confirmation via SMS or email. The entry appears in your calendar and CRM automatically.
                </p>
                <p>
                  <strong className="text-foreground">Step 5: Follow-Up Sequence</strong> — Automated reminders go out 24 hours and 1 hour before the appointment to reduce no-shows. Any rescheduling requests are handled by the AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-12 sm:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Industries Using AI Receptionists</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Any business that relies on inbound calls or messages to generate revenue benefits from automated answering.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <div key={industry.name} className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">Why Businesses Switch to AI Answering</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Zero Missed Opportunities</h3>
                  <p className="text-muted-foreground">Every call, every message, every inquiry gets handled immediately. No more Monday morning voicemail backlogs or leads that went cold over the weekend.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Consistent Quality</h3>
                  <p className="text-muted-foreground">The AI never has a bad day. It delivers the same professional, helpful experience to every caller whether it is the first call of the day or the hundredth.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Reduced Operational Load</h3>
                  <p className="text-muted-foreground">Your team stops playing phone tag and answering the same questions repeatedly. They focus on high-value work while the AI handles routine inquiries.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Actionable Data</h3>
                  <p className="text-muted-foreground">Every conversation is logged and analyzed. You see exactly what customers ask about, when they call, and how many convert to appointments—data that manual receptionists rarely capture.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Scalable Without Hiring</h3>
                  <p className="text-muted-foreground">During seasonal peaks or marketing campaigns, call volume can spike dramatically. The AI handles 10 simultaneous conversations as easily as 1, without overtime costs or burnout.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 sm:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6 rounded-xl bg-background border border-border">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 sm:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/booking-automation" className="p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-colors text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium">Booking Automation</span>
              </Link>
              <Link to="/seo-websites" className="p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-colors text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium">SEO Websites</span>
              </Link>
              <Link to="/industries" className="p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-colors text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium">Industries We Serve</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stop Losing Leads to Voicemail</h2>
            <p className="text-muted-foreground mb-8">
              Book a 15-minute call to see how an AI receptionist would work for your specific business. We will show you exactly how it handles your most common inquiries.
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

export default AIReceptionist;
