import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Users, Target, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const About = () => {
  useEffect(() => {
    document.title = 'About Autonix | AI Automation Agency for Service Businesses';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Autonix, an AI automation and website development agency founded by Utkarsh Pandey and Ashish Tripathi. We help service-based businesses grow with smart automation.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-primary">Autonix</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're on a mission to help service-based businesses grow faster with AI automation and high-converting websites that work around the clock.
            </p>
          </div>
        </section>

        {/* What is Autonix */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What is Autonix?</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Autonix is a modern AI automation and website development agency built specifically for local and service-based businesses. We combine cutting-edge automation technology with proven marketing strategies to create systems that capture leads, book appointments, and follow up automatically.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Unlike traditional agencies that deliver projects and disappear, Autonix builds growth systems that continue working for you 24/7. Our approach integrates seamlessly with your existing tools and workflows.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Zap className="w-24 h-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              At Autonix, we believe every service business deserves enterprise-level automation without the enterprise-level complexity or cost. Our mission is to democratize AI automation and make it accessible to clinics, gyms, real estate agencies, and local service providers worldwide.
            </p>
          </div>
        </section>

        {/* Founders */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Meet the Founders</h2>
              <p className="text-muted-foreground">The team behind Autonix</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background border border-border rounded-xl p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">UP</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Utkarsh Pandey</h3>
                <p className="text-primary text-sm mb-4">Co-Founder</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  With deep expertise in AI systems and business automation, Utkarsh leads the technical vision at Autonix. His background in building scalable automation solutions helps businesses transform their operations.
                </p>
              </div>
              
              <div className="bg-background border border-border rounded-xl p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">AT</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Ashish Tripathi</h3>
                <p className="text-primary text-sm mb-4">Co-Founder</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ashish brings extensive experience in website development and digital marketing. His focus on conversion optimization ensures every Autonix project delivers measurable business results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Global Experience</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Autonix has helped businesses across multiple regions implement AI automation and website solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-muted/30 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Automations Built</div>
              </div>
              <div className="p-6 bg-muted/30 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Websites Launched</div>
              </div>
              <div className="p-6 bg-muted/30 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Industries Served</div>
              </div>
              <div className="p-6 bg-muted/30 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work with Autonix?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help your business grow with AI automation and a high-converting website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-cta">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
