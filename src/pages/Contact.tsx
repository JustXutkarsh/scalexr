import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Calendar, ArrowRight, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    document.title = 'Contact Autonix | Get in Touch for AI Automation Solutions';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Autonix for AI automation and website development services. Book a free consultation or send us a message to discuss your business needs.');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-primary">Autonix</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business with AI automation? Let's talk about how Autonix can help you grow.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-muted/30 rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been received. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Business Name</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your Business Name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">How can we help? *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your business and what you're looking to achieve..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full gradient-cta" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Other Contact Options */}
              <div className="space-y-8">
                {/* Book a Call */}
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                  <Calendar className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Book a Free Consultation</h3>
                  <p className="text-muted-foreground mb-6">
                    Schedule a 15-minute call to discuss your business needs and how Autonix can help you automate and grow.
                  </p>
                  <Button 
                    className="w-full gradient-cta" 
                    size="lg"
                    onClick={() => window.open('https://calendly.com/scalee-x/new-meeting', '_blank')}
                  >
                    Schedule a Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* Email */}
                <div className="bg-muted/30 rounded-2xl p-8 border border-border">
                  <Mail className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email Us Directly</h3>
                  <p className="text-muted-foreground mb-4">
                    Prefer email? Send us a message and we'll respond within 24 hours.
                  </p>
                  <a 
                    href="mailto:hello@agencyautonix.com"
                    className="text-primary hover:underline font-medium"
                  >
                    hello@agencyautonix.com
                  </a>
                </div>

                {/* Quick Info */}
                <div className="bg-muted/30 rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold mb-4">Why Choose Autonix?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>No pushy sales tactics</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Free audit of your current systems</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Custom solutions for your industry</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Ongoing support and optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Not Ready to Talk Yet?</h2>
            <p className="text-muted-foreground mb-6">
              Learn more about what Autonix offers and how we work with service businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">About Autonix</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
