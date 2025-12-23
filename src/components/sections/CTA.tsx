import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Sparkles, Send, Phone, Building2, User, MessageSquare, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    currentChallenges: '',
    monthlyLeads: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Listen for custom event to open the form
  useEffect(() => {
    const handleOpenForm = () => {
      setShowForm(true);
    };

    window.addEventListener('openAuditForm', handleOpenForm);
    return () => window.removeEventListener('openAuditForm', handleOpenForm);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-audit-notification', {
        body: formData,
      });

      if (error) {
        console.error('Error sending audit request:', error);
        toast({
          title: "Something went wrong",
          description: "Please try again or book a call instead.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      console.log('Audit request sent successfully:', data);
      setIsSubmitted(true);
      
      toast({
        title: "Audit Request Submitted!",
        description: "We'll analyze your business and get back to you within 24-48 hours.",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or book a call instead.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center glass p-12 rounded-3xl">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your audit request has been received. Our team will analyze your business and get back to you within <span className="text-primary font-semibold">24-48 hours</span> with actionable insights.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Want to discuss your needs right away?
            </p>
            <Button 
              size="lg"
              className="glow"
              onClick={() => window.open('https://calendly.com/scalee-x/new-meeting', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Book a Call Instead
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {!showForm ? (
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-sm mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Free Business Audit</span>
            </div>

            {/* Headline */}
            <h2 
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Let us show you where your business is{' '}
              <span className="text-primary glow-text">leaking money</span>
            </h2>

            {/* Subtext */}
            <p 
              className={`text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto px-2 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Get a free automation audit for your business. Share your details and our team will analyze your customer journey and get back to you within 24-48 hours with actionable insights.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden glow px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-semibold w-full sm:w-auto"
                onClick={() => setShowForm(true)}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  Book a Free Audit
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="px-6 sm:px-8 py-5 sm:py-7 text-base sm:text-lg font-semibold border-primary/30 hover:bg-primary/10 w-full sm:w-auto"
                onClick={() => window.open('https://calendly.com/scalee-x/new-meeting', '_blank')}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Book a Call
              </Button>
            </div>

            {/* Trust note */}
            <p 
              className={`mt-6 text-sm text-muted-foreground transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              No commitment required • Response within 24-48 hours • Custom growth plan
            </p>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            {/* Form Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-sm mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Free Business Audit</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Tell us about your <span className="text-primary">business</span>
              </h2>
              <p className="text-muted-foreground">
                Fill in your details and we'll analyze your business within 24-48 hours.
              </p>
            </div>

            {/* Audit Form */}
            <form onSubmit={handleSubmit} className="glass p-4 sm:p-8 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-6">
              {/* Personal Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Personal Details
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Phone Number *</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              {/* Business Details */}
              <div className="space-y-4 pt-4 border-t border-border/30">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Business Details
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Business Name *</label>
                    <Input
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Your Business Name"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Industry/Business Type *</label>
                    <Input
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      placeholder="E.g., E-commerce, Real Estate, Healthcare"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Monthly Leads/Inquiries (approx.)</label>
                  <Input
                    name="monthlyLeads"
                    value={formData.monthlyLeads}
                    onChange={handleInputChange}
                    placeholder="E.g., 100-500, 500+, Less than 50"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              {/* Challenges */}
              <div className="space-y-4 pt-4 border-t border-border/30">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Current Challenges
                </h3>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">What challenges are you facing with customer engagement or sales? *</label>
                  <Textarea
                    name="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={handleInputChange}
                    placeholder="E.g., We're losing leads because we can't respond fast enough, customers ask the same questions repeatedly, we need 24/7 support but can't afford it..."
                    required
                    rows={4}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  type="submit"
                  size="lg" 
                  className="flex-1 glow py-6 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Audit Request
                    </>
                  )}
                </Button>
                <Button 
                  type="button"
                  size="lg" 
                  variant="outline"
                  className="py-6 border-primary/30 hover:bg-primary/10"
                  onClick={() => setShowForm(false)}
                >
                  Back
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Or prefer to talk directly?{' '}
                <button 
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() => window.open('https://calendly.com/scalee-x/new-meeting', '_blank')}
                >
                  Book a call instead
                </button>
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
