import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Wrench, Dumbbell, Store, CheckCircle, ArrowRight, Phone, Calendar, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const Industries = () => {
  useEffect(() => {
    document.title = 'Industries We Serve | AI Automation for Local Businesses - Autonix';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI automation and SEO websites for clinics, home services, fitness studios, and local retailers. Industry-specific solutions that understand your unique challenges.');
    }
  }, []);

  const industries = [
    {
      id: 'clinics',
      icon: Stethoscope,
      title: 'Medical & Dental Clinics',
      description: 'Healthcare practices face unique challenges: HIPAA compliance, complex scheduling with multiple providers, high no-show costs, and patients who expect immediate responses. Our automation solutions are designed specifically for medical environments.',
      challenges: [
        'Patient calls during busy clinic hours going unanswered',
        'High no-show rates costing thousands monthly',
        'Staff overwhelmed with appointment confirmations and reminders',
        'After-hours inquiries resulting in lost new patients',
        'Difficulty managing multiple provider schedules'
      ],
      solutions: [
        'HIPAA-compliant AI receptionist that handles patient inquiries',
        'Multi-provider scheduling with intelligent routing',
        'Automated reminder sequences that reduce no-shows by 60-70%',
        '24/7 new patient intake and appointment booking',
        'Integration with practice management software (Dentrix, Open Dental, etc.)',
        'Insurance verification automation for common questions'
      ],
      useCases: [
        { title: 'New Patient Scheduling', description: 'AI qualifies new patients, collects insurance information, and books them with the appropriate provider based on their needs.' },
        { title: 'Appointment Reminders', description: 'Automated SMS and email reminders with easy rescheduling links reduce no-shows without staff effort.' },
        { title: 'After-Hours Triage', description: 'AI handles common after-hours questions (office hours, directions, what constitutes an emergency) and captures urgent requests for morning follow-up.' },
        { title: 'Recall Management', description: 'Automated outreach to patients due for cleanings, checkups, or follow-up appointments fills schedule gaps.' }
      ],
      cta: 'See our dental practice case study →'
    },
    {
      id: 'home-services',
      icon: Wrench,
      title: 'Home Services Companies',
      description: 'Plumbers, HVAC technicians, electricians, and contractors compete on response time. The business that answers first gets the job. Our systems ensure you never lose a lead to a competitor who simply picked up the phone faster.',
      challenges: [
        'Emergency calls at night and weekends going to voicemail',
        'Dispatching delays when office staff cannot reach technicians',
        'Quote requests not followed up consistently',
        'Owner personally handling too many calls',
        'Seasonal demand spikes overwhelming phone lines'
      ],
      solutions: [
        'AI receptionist with emergency triage and dispatch capabilities',
        'Integration with dispatch software for real-time technician availability',
        'Automated quote follow-up sequences for estimates that have not converted',
        'WhatsApp and SMS channels for customers who prefer texting',
        'Scalable capacity that handles peak demand without additional staff',
        'Service reminder automation (HVAC maintenance, etc.)'
      ],
      useCases: [
        { title: 'Emergency Dispatch', description: 'AI assesses emergency severity, collects necessary details, and triggers dispatch protocols—even at 2 AM.' },
        { title: 'Estimate Follow-Up', description: 'Quotes that are not immediately accepted receive automated follow-up, recovering jobs that would otherwise be lost.' },
        { title: 'Maintenance Reminders', description: 'Automated outreach for seasonal services (AC tune-ups, furnace checks) generates recurring revenue.' },
        { title: 'Review Generation', description: 'Post-service automation requests reviews and handles negative feedback before it goes public.' }
      ],
      cta: 'See our HVAC company case study →'
    },
    {
      id: 'fitness',
      icon: Dumbbell,
      title: 'Fitness Studios & Gyms',
      description: 'Boutique fitness studios, yoga studios, CrossFit boxes, and personal training facilities need to fill classes and convert trial members into long-term subscriptions. Manual booking and poor online visibility are common growth limiters.',
      challenges: [
        'Trial members not converting to full memberships',
        'Class booking friction deterring potential members',
        'Low visibility in local search results',
        'No systematic follow-up with lapsed members',
        'Managing waitlists and cancellations manually'
      ],
      solutions: [
        'SEO-optimized website with class-specific landing pages',
        'Online class booking with automatic waitlist management',
        'Trial member nurturing sequences that boost conversion rates',
        'Lapsed member reactivation campaigns',
        'Google Business Profile optimization for local visibility',
        'Review automation from satisfied members'
      ],
      useCases: [
        { title: 'Trial Conversion', description: 'Automated email and SMS sequences guide trial members toward signing up, addressing common objections and highlighting benefits.' },
        { title: 'Class Booking', description: 'Members book directly online. Waitlists are managed automatically, and spots are filled when cancellations occur.' },
        { title: 'Local SEO Dominance', description: 'Ranking for "yoga studio near me" or "CrossFit [city]" brings in new members without paid advertising.' },
        { title: 'Member Retention', description: 'Automated check-ins with members who have not attended recently, offering incentives to return.' }
      ],
      cta: 'See our fitness studio case study →'
    },
    {
      id: 'retail',
      icon: Store,
      title: 'Local Retailers & eCommerce',
      description: 'Physical retailers and local eCommerce businesses need to capture every inquiry, answer product questions quickly, and provide a buying experience that matches or exceeds online giants. AI-powered customer service makes this possible.',
      challenges: [
        'Customer inquiries via WhatsApp, Instagram, and website going unanswered for hours',
        'Inventory questions requiring staff to check manually',
        'No personalized product recommendations',
        'Cart abandonment on eCommerce sites',
        'Competition with Amazon and large retailers'
      ],
      solutions: [
        'WhatsApp AI assistant that handles product inquiries and orders',
        'Integration with inventory systems for real-time stock answers',
        'Personalized product recommendations based on purchase history',
        'Cart abandonment recovery sequences',
        'Local SEO to capture "near me" shoppers',
        'Order tracking and delivery updates automation'
      ],
      useCases: [
        { title: 'WhatsApp Commerce', description: 'Customers browse products, ask questions, and complete purchases entirely within WhatsApp chat.' },
        { title: 'Inventory Questions', description: 'AI checks stock levels and answers "do you have this in size X?" questions instantly.' },
        { title: 'Order Updates', description: 'Automated shipping notifications, delivery confirmations, and feedback requests post-purchase.' },
        { title: 'Local Discovery', description: 'SEO and Google Business optimization helps local shoppers find your store when searching for products you carry.' }
      ],
      cta: 'Discuss your retail automation needs →'
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
              Industries We <span className="text-primary">Specialize In</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              We focus on local service businesses where leads are high-value and response time directly impacts revenue. Our solutions are tailored to the specific workflows and challenges of each industry.
            </p>
          </div>
        </section>

        {/* Industries */}
        {industries.map((industry, index) => (
          <section key={industry.id} id={industry.id} className={`py-12 sm:py-16 lg:py-20 px-4 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}>
            <div className="container mx-auto max-w-5xl">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{industry.title}</h2>
              </div>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl">{industry.description}</p>

              <div className="grid lg:grid-cols-2 gap-10 mb-10">
                {/* Challenges */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Common Challenges</h3>
                  <ul className="space-y-3">
                    {industry.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-destructive mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Solutions</h3>
                  <ul className="space-y-3">
                    {industry.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6">Specific Use Cases</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {industry.useCases.map((useCase, i) => (
                    <div key={i} className="p-5 rounded-xl bg-background border border-border">
                      <h4 className="font-semibold mb-2">{useCase.title}</h4>
                      <p className="text-sm text-muted-foreground">{useCase.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/case-studies" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                {industry.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        ))}

        {/* Why Industry Focus */}
        <section className="py-12 sm:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Why Industry Specialization Matters</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                Generic automation tools require businesses to figure out implementation themselves. This works for companies with dedicated IT teams, but local service businesses rarely have that luxury. A dental practice owner should not have to become an automation expert to benefit from AI.
              </p>
              <p className="mb-6">
                Our industry focus means we arrive with pre-built solutions for common workflows. When we work with a dental practice, we already know how to integrate with Dentrix, how to structure appointment reminders that reduce no-shows, and how to handle the specific questions new patients ask. We are not learning your industry on your dime.
              </p>
              <p className="mb-6">
                This specialization also means faster implementation. Rather than starting from scratch, we customize proven systems. What might take a generalist agency months takes us weeks.
              </p>
              <p>
                Finally, industry expertise translates to better results. We have seen what works across dozens of similar businesses. We know which approaches fail and which succeed. This pattern recognition accelerates time to value and reduces risk.
              </p>
            </div>
          </div>
        </section>

        {/* Other Industries */}
        <section className="py-12 sm:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Other Industries We Work With</h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              While we specialize in the industries above, our systems are adaptable to any local service business. We have also worked with:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
              {[
                'Law Firms', 'Real Estate Agents', 'Auto Repair Shops', 'Veterinary Clinics',
                'Beauty Salons', 'Spas & Wellness', 'Accounting Firms', 'Insurance Agencies',
                'Pest Control', 'Landscaping', 'Photography Studios', 'Event Venues'
              ].map((industry) => (
                <div key={industry} className="p-4 rounded-xl bg-muted/30 border border-border">
                  <span className="text-sm text-muted-foreground">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 sm:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Explore Our Solutions</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/ai-receptionist" className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium">AI Receptionist</span>
              </Link>
              <Link to="/booking-automation" className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium">Booking Automation</span>
              </Link>
              <Link to="/seo-websites" className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium">SEO Websites</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8">
              Book a 15-minute call to discuss how automation and SEO would apply to your specific industry and business model.
            </p>
            <Button asChild size="lg" className="gradient-cta">
              <a href="https://calendly.com/scalee-x/new-meeting" target="_blank" rel="noopener noreferrer">
                Schedule Your Industry Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Industries;
