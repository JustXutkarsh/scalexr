import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Zap, Calendar, DollarSign } from "lucide-react";
import CircleHighlight from "../CircleHighlight";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const flowSteps = [
    { label: "Lead comes in", icon: Phone, delay: 0 },
    { label: "AI responds instantly", icon: Zap, delay: 150 },
    { label: "Appointment booked", icon: Calendar, delay: 300 },
    { label: "Revenue captured", icon: DollarSign, delay: 450 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-0 pt-24 sm:pt-28 lg:pt-24">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mt-4 sm:mt-8 lg:mt-16">
          {/* Top Label */}
          <div
            className={`mb-4 sm:mb-6 transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground tracking-wide leading-snug">
              <CircleHighlight>Built on dozens</CircleHighlight> of real-world automations and conversion experiments
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`mb-4 sm:mb-6 transition-all duration-500 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold tracking-tight text-primary leading-tight">
              Autonix: Websites and AI Systems That Turn Traffic Into Customers
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed transition-all duration-500 delay-200 px-2 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Autonix builds SEO-friendly websites and AI automation that capture, convert, and follow up with every lead.
            <br className="hidden sm:block" />
            <span className="text-foreground/80 font-medium">No guesswork. Just systems that work.</span>
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto mb-4 sm:mb-6 transition-all duration-500 delay-300 px-2 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex flex-col items-center w-full sm:w-auto">
              <Button
                size="lg"
                className="group w-full sm:w-auto px-5 sm:px-8 py-5 sm:py-6 text-sm sm:text-base lg:text-lg font-semibold gradient-cta hover:opacity-90 text-primary-foreground rounded-full animate-pulse-cta"
                onClick={() => {
                  document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => window.dispatchEvent(new CustomEvent("openAuditForm")), 500);
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="hidden sm:inline">Book a Free Audit for Your Business</span>
                  <span className="sm:hidden">Book a Free Audit</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <span className="text-[10px] sm:text-xs text-muted-foreground mt-2 sm:mt-3">Takes 15 minutes • No sales pitch</span>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-5 sm:px-8 py-5 sm:py-6 text-sm sm:text-base lg:text-lg font-semibold border-border hover:border-primary/50 hover:bg-primary/5 rounded-full"
              onClick={() => document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })}
            >
              See How It Works
            </Button>
          </div>

          {/* Trust Line */}
          <p
            className={`text-xs sm:text-sm text-muted-foreground/70 mb-4 sm:mb-6 transition-all duration-500 delay-400 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            No new tools. We integrate with what you already use.
          </p>
          
          {/* Website CTA line */}
          <p
            className={`text-xs sm:text-sm text-muted-foreground/80 mb-8 sm:mb-12 px-2 transition-all duration-500 delay-450 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            Don't have a website yet? Autonix builds fast, SEO-ready websites designed to convert local traffic.
          </p>

          {/* Glassmorphism Automation Container */}
          <div
            className={`w-full max-w-3xl mb-8 sm:mb-12 transition-all duration-700 delay-450 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="glassmorphism rounded-xl sm:rounded-2xl border border-primary/20 p-4 sm:p-6 lg:p-8 relative overflow-hidden mx-2 sm:mx-0">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              {/* Placeholder content */}
              <div className="relative z-10 h-auto min-h-[160px] sm:min-h-[180px] lg:min-h-[220px] flex flex-col items-center justify-center py-3 sm:py-4 lg:py-6">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 text-center sm:text-left">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base lg:text-lg font-semibold text-foreground">
                      The Growth System We Deploy
                    </div>
                    <div className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">Every Autonix growth system has two layers working together:</div>
                  </div>
                </div>

                {/* Two layers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg mt-3 sm:mt-4">
                  <div
                    className={`p-3 sm:p-4 rounded-lg bg-muted/20 border border-border/30 transition-all duration-500 ${
                      mounted ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    <div className="text-xs sm:text-sm font-semibold text-foreground mb-1 sm:mb-2">Acquisition layer</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">SEO-optimized websites, landing pages, and local online presence</div>
                  </div>
                  <div
                    className={`p-3 sm:p-4 rounded-lg bg-muted/20 border border-border/30 transition-all duration-500 ${
                      mounted ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: "700ms" }}
                  >
                    <div className="text-xs sm:text-sm font-semibold text-foreground mb-1 sm:mb-2">Conversion layer</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">AI responses, booking automation, follow-ups, and CRM sync</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flow Diagram - Enhanced */}
          <div
            className={`w-full max-w-4xl transition-all duration-700 delay-500 px-2 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative flex items-start justify-between gap-1 sm:gap-2 md:gap-4 lg:px-8">

              {/* Flow Steps */}
              {flowSteps.map((step, index) => (
                <div
                  key={step.label}
                  className={`relative flex flex-col items-center transition-all duration-500 flex-1 min-w-0 ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${700 + step.delay}ms` }}
                >
                  {/* Glowing Icon Node */}
                  <div
                    className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl lg:rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-1.5 sm:mb-2 lg:mb-4 transition-all duration-300 ${
                      index === flowSteps.length - 1 ? "bg-primary/20" : ""
                    }`}
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl bg-primary/20 blur-xl transition-opacity duration-500 ${
                        mounted ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ transitionDelay: `${800 + step.delay}ms` }}
                    />
                    <step.icon
                      className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary relative z-10 ${
                        index === flowSteps.length - 1 ? "text-primary" : ""
                      }`}
                    />
                  </div>

                  {/* Label */}
                  <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-muted-foreground text-center max-w-[60px] sm:max-w-[70px] md:max-w-[90px] lg:max-w-none leading-tight font-medium">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 delay-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
