import { useRef, useEffect, useState } from 'react';
import { Bot, Calendar, MessageSquare, Database, ArrowRight, Zap, Brain, Search, MessageCircle, Check, Clock } from 'lucide-react';
import n8nWorkflow from '@/assets/n8n-workflow.png';

const modules = [
  {
    icon: Bot,
    title: "AI Receptionist",
    description: "Answers every call & message instantly",
  },
  {
    icon: Calendar,
    title: "Smart Booking",
    description: "Books appointments automatically",
  },
  {
    icon: MessageSquare,
    title: "Lead Follow-ups",
    description: "Never lets a lead go cold",
  },
  {
    icon: Database,
    title: "CRM Updates",
    description: "Your data stays organized",
  }
];

const whatsappMessages = [
  { type: 'received', text: "Hi! I'm looking for a moisturizer for dry skin", time: '10:32 AM' },
  { type: 'sent', text: "Hey! 👋 Based on your skin type, I'd recommend our Hydra-Glow Serum — it's our bestseller for dry skin. Want me to show you options?", time: '10:32 AM', ai: true },
  { type: 'received', text: '🎤 Voice note: "Yeah show me, also something for dark spots"', time: '10:33 AM', isVoice: true },
  { type: 'sent', text: "Got it! For dark spots + hydration, try our Vitamin C Duo Bundle — ₹1,899 (saves ₹400). I can send the link to order directly here!", time: '10:33 AM', ai: true },
  { type: 'received', text: '📷 [Image of product label]', time: '10:34 AM', isImage: true },
  { type: 'sent', text: "I see you already have our Niacinamide Toner! Great choice. The Vitamin C serum pairs perfectly with it. Ready to order? 🛒", time: '10:34 AM', ai: true },
];

const Solution = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solution" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div 
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Solution</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Turn leads into bookings on <span className="text-primary">autopilot</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ScaleX captures every lead, books appointments automatically, and follows up without manual effort.
          </p>
        </div>

        {/* Friction removal line */}
        <div 
          className={`text-center mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-muted-foreground/70 text-sm">
            No new tools to learn. We integrate with what you already use.
          </p>
        </div>

        {/* ScaleX Intelligent Architecture Section */}
        <div 
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Architecture heading */}
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              ScaleX Intelligent Architecture
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Proprietary node-based logic driving 24/7 customer conversion.
            </p>
          </div>

          {/* Side-by-side: WhatsApp mockup + Workflow */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            
            {/* Left: WhatsApp Phone Mockup */}
            <div 
              className={`flex justify-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="relative">
                {/* Phone frame */}
                <div className="relative w-[280px] sm:w-[320px] bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[40px] p-2 shadow-2xl shadow-black/50">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-900 rounded-b-2xl z-10" />
                  
                  {/* Screen */}
                  <div className="relative bg-[#0b141a] rounded-[32px] overflow-hidden">
                    {/* WhatsApp header */}
                    <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">ScaleX Sales AI</p>
                        <p className="text-[10px] text-green-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                          Online • 24/7 Sales Rep
                        </p>
                      </div>
                    </div>
                    
                    {/* Chat messages */}
                    <div className="p-3 space-y-2 h-[380px] sm:h-[420px] overflow-y-auto">
                      {whatsappMessages.map((msg, index) => (
                        <div
                          key={index}
                          className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                            transition: `all 0.5s ease-out ${600 + index * 200}ms`
                          }}
                        >
                          <div 
                            className={`max-w-[85%] px-3 py-2 rounded-lg text-xs ${
                              msg.type === 'sent' 
                                ? 'bg-[#005c4b] text-white rounded-br-none' 
                                : 'bg-[#1f2c34] text-white rounded-bl-none'
                            }`}
                          >
                            <p>{msg.text}</p>
                            <div className="flex items-center justify-end gap-1 mt-1">
                              <span className="text-[9px] text-white/50">{msg.time}</span>
                              {msg.type === 'sent' && (
                                <Check className="w-3 h-3 text-blue-400" />
                              )}
                              {msg.ai && (
                                <span className="text-[8px] text-primary/80 ml-1">AI</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Input bar */}
                    <div className="bg-[#1f2c34] px-3 py-2 flex items-center gap-2">
                      <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-xs text-white/50">
                        Type a message...
                      </div>
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-primary/20 to-blue-500/20 rounded-[50px] blur-2xl -z-10 opacity-60" />
              </div>
            </div>

            {/* Right: n8n Workflow in Glassmorphism container */}
            <div 
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              {/* Blue outer glow */}
              <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl" />
              <div className="absolute -inset-2 bg-primary/10 rounded-2xl blur-xl" />
              
              {/* Glassmorphism container */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_0_60px_-15px_rgba(59,130,246,0.5)]">
                {/* Technology badges */}
                <div className="absolute -top-3 right-4 flex gap-2 z-20">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-full">
                    <Brain className="w-3 h-3 text-emerald-400" />
                    <span className="text-[10px] font-medium text-emerald-300">OpenAI Integrated</span>
                  </div>
                </div>
                <div className="absolute -bottom-3 left-4 flex gap-2 z-20">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
                    <Search className="w-3 h-3 text-blue-400" />
                    <span className="text-[10px] font-medium text-blue-300">Real-time Vector Search</span>
                  </div>
                </div>

                {/* Actual n8n Workflow Image */}
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src={n8nWorkflow} 
                    alt="ScaleX n8n Automation Workflow showing WhatsApp integration, AI Agent, OpenAI, and Supabase Vector Store" 
                    className="w-full h-auto rounded-xl"
                  />
                </div>

                {/* Processing indicator */}
                <div className="mt-4 flex items-center justify-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-primary" />
                    <span>Real-time Processing</span>
                  </div>
                  <span className="text-white/20">•</span>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-yellow-500" />
                    <span>24/7 Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module cards */}
        <div 
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <module.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">{module.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result indicator */}
        <div 
          className={`mt-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base">
            <span className="text-muted-foreground">Leads Captured</span>
            <ArrowRight className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Bookings Confirmed</span>
            <ArrowRight className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold">Predictable Revenue</span>
          </div>
        </div>

        {/* CTA */}
        <div 
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '1100ms' }}
        >
          <a 
            href="https://calendly.com/scalee-x/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <span>Want to see this running for your business? Book a free automation audit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solution;