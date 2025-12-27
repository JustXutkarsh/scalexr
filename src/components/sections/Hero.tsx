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
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-0 pt-32 lg:pt-24">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mt-8 lg:mt-16">
          {/* Top Label */}
          <div
            className={`mb-6 transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-base sm:text-lg md:text-xl font-bold text-foreground tracking-wide">
              <CircleHighlight>Built on dozens</CircleHighlight> of real-world automations and conversion experiments
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`mb-6 transition-all duration-500 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary">
              AI Systems That Turn Traffic Into Customers
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-500 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            We've tested what actually converts for local businesses so you don't have to.
            <br />
            <span className="text-foreground/80 font-medium">No guesswork. Just systems that work.</span>
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 transition-all duration-500 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex flex-col items-center">
              <Button
                size="lg"
                className="group px-8 py-6 text-lg font-semibold gradient-cta hover:opacity-90 text-primary-foreground rounded-full animate-pulse-cta"
                onClick={() => {
                  document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => window.dispatchEvent(new CustomEvent("openAuditForm")), 500);
                }}
              >
                <span className="flex items-center gap-2">
                  Book a Free Audit for Your Business
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <span className="text-xs text-muted-foreground mt-3">Takes 15 minutes • No sales pitch</span>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-border hover:border-primary/50 hover:bg-primary/5 rounded-full"
              onClick={() => document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })}
            >
              See How It Works
            </Button>
          </div>

          {/* Trust Line */}
          <p
            className={`text-sm text-muted-foreground/70 mb-12 transition-all duration-500 delay-400 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            No new tools. We integrate with what you already use.
          </p>

          {/* Glassmorphism Automation Container */}
          <div
            className={`w-full max-w-3xl mb-12 transition-all duration-700 delay-450 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="glassmorphism rounded-2xl border border-primary/20 p-8 relative overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              {/* Placeholder content */}
              <div className="relative z-10 h-auto min-h-[140px] sm:h-48 flex flex-col items-center justify-center py-4 sm:py-0">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4 text-center sm:text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-semibold text-foreground">
                      Automation Workflow Preview
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Visual workflow builder coming soon</div>
                  </div>
                </div>

                {/* Placeholder grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full max-w-md mt-4">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-12 sm:h-16 rounded-lg bg-muted/30 border border-border/30 transition-all duration-500 ${
                        mounted ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ transitionDelay: `${600 + i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/60 mt-3 text-center">Proprietary Automation Architecture</p>
          </div>

          {/* Flow Diagram - Enhanced */}
          <div
            className={`w-full max-w-4xl transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative flex items-start justify-between px-2 sm:px-8">
              {/* Connecting Line - hidden on mobile */}
              <div className="absolute top-6 sm:top-8 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent hidden sm:block" />
              <div
                className={`absolute top-6 sm:top-8 left-[10%] h-[2px] bg-gradient-to-r from-primary via-primary to-primary transition-all duration-1000 ease-out hidden sm:block ${
                  mounted ? "right-[10%]" : "right-[90%]"
                }`}
                style={{ transitionDelay: "700ms" }}
              />

              {/* Flow Steps */}
              {flowSteps.map((step, index) => (
                <div
                  key={step.label}
                  className={`relative flex flex-col items-center transition-all duration-500 flex-1 ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${700 + step.delay}ms` }}
                >
                  {/* Glowing Icon Node */}
                  <div
                    className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-2 sm:mb-4 transition-all duration-300 ${
                      index === flowSteps.length - 1 ? "bg-primary/20" : ""
                    }`}
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-primary/20 blur-xl transition-opacity duration-500 ${
                        mounted ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ transitionDelay: `${800 + step.delay}ms` }}
                    />
                    <step.icon
                      className={`w-5 h-5 sm:w-7 sm:h-7 text-primary relative z-10 ${
                        index === flowSteps.length - 1 ? "text-primary" : ""
                      }`}
                    />
                  </div>

                  {/* Label */}
                  <span className="text-[10px] sm:text-sm text-muted-foreground text-center max-w-[70px] sm:max-w-none leading-tight font-medium">
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
