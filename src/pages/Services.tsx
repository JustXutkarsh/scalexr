import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Globe, Calendar, MessageCircle, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const Services = () => {
  useEffect(() => {
    document.title = 'Services | AI Automation & Website Development - Autonix';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Autonix offers AI automation systems, website development, appointment booking automation, WhatsApp integration, and CRM workflow solutions for service-based businesses.');
    }
  }, []);

  const services = [
    {
      icon: Zap,
      title: 'AI Automation Systems',
      description: 'Intelligent automation that handles lead capture, qualification, and follow-ups without human intervention.',
      benefits: [
        '24/7 lead response within seconds',
        'Automated qualification workflows',
        'Smart follow-up sequences',
        'Integration with your existing tools'
      ]
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Fast, SEO-optimized websites designed to convert local traffic into paying customers.',
      benefits: [
        'Mobile-first responsive design',
        'SEO-friendly architecture',
        'Fast loading speeds',
        'Conversion-focused layouts'
      ]
    },
    {
      icon: Calendar,
      title: 'Appointment Booking Automation',
      description: 'Automated booking systems that let customers schedule appointments without back-and-forth.',
      benefits: [
        'Self-service scheduling',
        'Calendar sync integration',
        'Automated reminders',
        'No-show reduction'
      ]
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp & Chat Automation',
      description: 'AI-powered chat systems that engage visitors and qualify leads on WhatsApp and web chat.',
      benefits: [
        'Instant response to inquiries',
        'Natural conversation flows',
        'Lead qualification chatbots',
        'Multi-channel support'
      ]
    },
    {
      icon: Settings,
      title: 'CRM & Workflow Integrations',
      description: 'Seamless connections between your tools so data flows automatically across your business.',
      benefits: [
        'CRM data synchronization',
        'Automated task creation',
        'Custom workflow triggers',
        'Reporting dashboards'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Autonix <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything your service business needs to capture more leads, book more appointments, and grow without hiring more staff.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-16">
              {services.map((service, index) => (
                <article 
                  key={service.title}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="aspect-video rounded-2xl bg-muted/30 border border-border flex items-center justify-center">
                      <service.icon className="w-20 h-20 text-primary/30" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How Autonix Works</h2>
              <p className="text-muted-foreground">Our simple process to transform your business</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery Call</h3>
                <p className="text-muted-foreground text-sm">
                  We learn about your business, current challenges, and growth goals in a 15-minute call.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Strategy</h3>
                <p className="text-muted-foreground text-sm">
                  We design a tailored automation and website strategy specific to your industry and needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Implementation</h3>
                <p className="text-muted-foreground text-sm">
                  We build, test, and launch your systems with ongoing support and optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started with Autonix?</h2>
            <p className="text-muted-foreground mb-8">
              Book a free consultation to discuss which services are right for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-cta">
                <Link to="/contact">
                  Get a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
