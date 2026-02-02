import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Search, Zap, BarChart3, CheckCircle, ArrowRight, Users, Phone, Calendar, FileText, Layout, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const SEOWebsites = () => {
  useEffect(() => {
    document.title = 'SEO Website Development | Conversion-Focused Web Design - Autonix';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'SEO-optimized websites that rank on Google and convert visitors into customers. Built for local businesses that need leads, not just a pretty homepage.');
    }
  }, []);

  const features = [
    {
      icon: Search,
      title: 'Local SEO Architecture',
      description: 'Every page is structured for local search: proper schema markup, location-specific content, Google Business Profile optimization, and citation consistency across directories.'
    },
    {
      icon: Gauge,
      title: 'Speed Optimization',
      description: 'Core Web Vitals compliance with sub-3-second load times. Fast sites rank higher and convert better—53% of mobile visitors leave if a page takes over 3 seconds.'
    },
    {
      icon: Layout,
      title: 'Conversion-Focused Design',
      description: 'Clear visual hierarchy, strategic CTA placement, trust signals above the fold, and mobile-first layouts that guide visitors toward taking action.'
    },
    {
      icon: FileText,
      title: 'Content Strategy',
      description: 'Service pages, location pages, and blog content optimized for the keywords your customers actually search. No keyword stuffing—just useful content that ranks.'
    }
  ];

  const differences = [
    {
      pretty: 'Designed primarily for aesthetics',
      converting: 'Designed around user actions and business goals'
    },
    {
      pretty: 'Generic template with swapped logos',
      converting: 'Custom structure based on how your customers search and buy'
    },
    {
      pretty: 'Single homepage with basic pages',
      converting: 'Service-specific landing pages for each offering'
    },
    {
      pretty: 'Contact form buried in footer',
      converting: 'Multiple conversion points: call buttons, forms, chat, scheduling'
    },
    {
      pretty: 'No ongoing optimization',
      converting: 'Continuous improvement based on traffic and conversion data'
    },
    {
      pretty: 'Loads slowly with heavy animations',
      converting: 'Performance-optimized for Core Web Vitals compliance'
    }
  ];

  const localSEOComponents = [
    {
      title: 'Google Business Profile Optimization',
      description: 'Complete profile setup with proper categories, services, Q&A, posts, and review management strategy. This is often the fastest path to local visibility.'
    },
    {
      title: 'Service Area Pages',
      description: 'Individual pages for each location you serve, with unique content about that area and local schema markup. Not just city name swaps—genuine local relevance.'
    },
    {
      title: 'Citation Building',
      description: 'Consistent NAP (Name, Address, Phone) across major directories, industry-specific platforms, and local business listings. Inconsistency kills local rankings.'
    },
    {
      title: 'Review Generation System',
      description: 'Automated post-service emails requesting reviews, with direct links to your Google Business Profile. More recent, positive reviews improve map pack rankings.'
    },
    {
      title: 'Local Link Building',
      description: 'Outreach to local organizations, sponsorships, partnerships, and community involvement that generate locally-relevant backlinks.'
    },
    {
      title: 'Technical Local SEO',
      description: 'LocalBusiness schema markup, hreflang for multi-location businesses, proper handling of duplicate content across location pages.'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to see SEO results?',
      answer: 'New websites typically start seeing organic traffic within 3-6 months, with significant growth at 6-12 months. Local SEO (Google Business Profile, map pack rankings) often shows results faster—sometimes within weeks for low-competition terms. We focus on quick wins (local optimization, long-tail keywords) while building toward competitive head terms.'
    },
    {
      question: 'What is the difference between SEO and paid ads?',
      answer: 'Paid ads (Google Ads, Facebook Ads) generate immediate traffic but stop the moment you stop paying. SEO builds an asset that continues generating leads without ongoing ad spend. Most businesses benefit from both: paid ads for immediate lead flow while SEO compounds over time. After 12 months of good SEO, many businesses reduce paid spend as organic traffic takes over.'
    },
    {
      question: 'Do I need separate pages for each service?',
      answer: 'Almost always yes. A single "Services" page cannot rank for multiple distinct keywords. If you offer teeth cleaning, dental implants, and cosmetic dentistry, each deserves its own optimized page. This also creates better user experience—visitors searching for "dental implants [city]" land directly on relevant content rather than a generic page.'
    },
    {
      question: 'How important is website speed for SEO?',
      answer: 'Extremely important since 2021 when Google made Core Web Vitals a ranking factor. Beyond rankings, speed directly impacts conversions. Amazon found that every 100ms of additional load time cost them 1% in sales. For local service businesses, slow mobile experience is particularly damaging since most searches happen on phones.'
    },
    {
      question: 'Will I own the website and content?',
      answer: 'Yes. You receive full ownership of the domain, hosting account, all code, and all content. We provide documentation and training so your team can make basic updates. If you ever want to move to a different provider, everything transfers with you. No lock-in, no proprietary systems.'
    },
    {
      question: 'How do you handle website maintenance?',
      answer: 'Our packages include ongoing maintenance: security updates, plugin updates, uptime monitoring, daily backups, and SSL certificate renewal. For content updates, we offer retainer options or train your team to make changes independently. Critical security patches are applied within 24 hours.'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery & Research',
      description: 'We analyze your competitors, identify target keywords, map your customer journey, and develop a content strategy before touching design.'
    },
    {
      step: '2',
      title: 'Architecture Planning',
      description: 'Site structure, page hierarchy, internal linking strategy, and URL structure—all planned for both users and search engines.'
    },
    {
      step: '3',
      title: 'Design & Development',
      description: 'Mobile-first design, performance optimization, accessibility compliance, and conversion-focused layouts built on fast, secure infrastructure.'
    },
    {
      step: '4',
      title: 'Content Creation',
      description: 'SEO-optimized copy for every page, meta titles and descriptions, schema markup, and image optimization with proper alt text.'
    },
    {
      step: '5',
      title: 'Launch & Indexing',
      description: 'Technical SEO audit, Search Console setup, sitemap submission, and initial indexing monitoring to ensure Google finds and crawls all pages.'
    },
    {
      step: '6',
      title: 'Ongoing Optimization',
      description: 'Monthly performance reviews, content updates based on ranking data, A/B testing of conversion elements, and continuous improvement.'
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
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">SEO-Optimized Web Development</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Websites That <span className="text-primary">Rank and Convert</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              A beautiful website that nobody finds is useless. We build sites engineered for Google rankings and designed to turn visitors into paying customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-cta">
                <Link to="/contact">
                  Get Your SEO Website <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">See Results</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pretty vs Converting */}
        <section className="py-12 sm:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Pretty Websites vs. Converting Websites</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Most web designers focus on aesthetics. We focus on outcomes. Here is what separates websites that look good from websites that generate revenue.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Pretty Website</th>
                    <th className="text-left py-4 px-4 font-semibold text-primary">Converting Website</th>
                  </tr>
                </thead>
                <tbody>
                  {differences.map((diff, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 px-4 text-muted-foreground">{diff.pretty}</td>
                      <td className="py-4 px-4 text-foreground">{diff.converting}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">What Makes Our Websites Different</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every website we build is optimized for both search engines and human conversion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {features.map((feature) => (
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
          </div>
        </section>

        {/* Local SEO */}
        <section className="py-12 sm:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Local SEO for Service Businesses</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                For local businesses, showing up in "near me" searches and the Google Map Pack drives the majority of leads. Here is how we make that happen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {localSEOComponents.map((component) => (
                <div key={component.title} className="p-6 rounded-xl bg-background border border-border">
                  <h3 className="text-lg font-semibold mb-2">{component.title}</h3>
                  <p className="text-sm text-muted-foreground">{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Our Website Development Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A methodical approach that prioritizes SEO and conversion at every stage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item) => (
                <div key={item.step} className="p-6 rounded-xl bg-muted/30 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Landing Pages */}
        <section className="py-12 sm:py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">The Power of Service-Specific Landing Pages</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                A generic "Services" page cannot compete for multiple keywords. When someone searches "emergency plumber [city]" and lands on your general services page that mentions 15 different offerings, they leave. They wanted specific information about emergency plumbing and found a wall of text about everything you do.
              </p>
              <p className="mb-6">
                Service-specific landing pages solve this problem. Each page targets a specific search intent with dedicated content: that emergency plumber page talks only about emergency services, response times, after-hours availability, and includes testimonials from customers who had emergencies. It converts because it answers exactly what the searcher wanted to know.
              </p>
              <p className="mb-6">
                These pages also rank better. Google's algorithm prioritizes topical relevance. A page entirely about "emergency plumbing in [city]" outranks a general services page that mentions emergency plumbing once. More pages targeting specific keywords means more entry points into your site from search results.
              </p>
              <p>
                We typically build 5-15 service-specific landing pages per site, depending on your offering breadth. Each page is unique—no template content with swapped keywords. This approach takes more effort initially but generates compounding returns as each page builds authority over time.
              </p>
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
            <h2 className="text-2xl font-bold mb-6 text-center">Complete Your Growth System</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/ai-receptionist" className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium">AI Receptionist</span>
              </Link>
              <Link to="/booking-automation" className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium">Booking Automation</span>
              </Link>
              <Link to="/industries" className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-medium">Industries We Serve</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Rank on Google?</h2>
            <p className="text-muted-foreground mb-8">
              Book a 15-minute call to discuss your current website, target keywords, and how we can help you capture more organic traffic.
            </p>
            <Button asChild size="lg" className="gradient-cta">
              <a href="https://calendly.com/scalee-x/new-meeting" target="_blank" rel="noopener noreferrer">
                Schedule Your SEO Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SEOWebsites;
