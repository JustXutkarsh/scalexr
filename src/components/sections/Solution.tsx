import { useRef, useEffect, useState } from 'react';
import { Bot, Calendar, MessageSquare, Database, ArrowRight, Zap, Brain, Search, MessageCircle, Check, Clock, Maximize2, X, Mic, Image as ImageIcon, ShoppingCart, Sparkles } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import n8nWorkflow from '@/assets/n8n-workflow.png';
import jewelryHairAccessory from '@/assets/jewelry-hair-accessory.png';
import jewelryShellEarrings from '@/assets/jewelry-shell-earrings.png';
import jewelryAnklet from '@/assets/jewelry-anklet.png';

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
  { type: 'received', text: "Hi, I'm looking for something elegant for a beach wedding gift." },
  { type: 'sent', text: "Sure 😊 I'd love to help.\nCould you please share:\n• Your budget range\n• Is it for the bride or a guest\n• Any color preference?" },
  { type: 'received', text: "Budget around ₹3,000. It's for the bride. Light colors." },
  { 
    type: 'sent', 
    text: "Perfect choice for a beach wedding ✨\nHere are the top 3 recommendations:",
    products: [
      { name: "Floral Pearl Hair Accessory", price: "₹2,800", image: jewelryHairAccessory },
      { name: "Shell & Pearl Earrings", price: "₹2,500", image: jewelryShellEarrings },
      { name: "Ivory Floral Anklet Set", price: "₹2,900", image: jewelryAnklet },
    ]
  },
  { type: 'received', text: "Can you show photos of option 1 and 2?" },
  { 
    type: 'sent', 
    text: "Of course 😊 Here are the photos:",
    images: [jewelryHairAccessory, jewelryShellEarrings],
    afterText: "Both are in stock and ready to ship.\n\nWould you like help placing the order?"
  },
  { type: 'received', text: "Yes, I want the Shell & Pearl Earrings." },
  { type: 'sent', text: "Great choice 🌸\nPlease share your full shipping address including city, state, and PIN code." },
  { type: 'received', text: "Address sent." },
  { type: 'sent', text: "Thank you! Your order details are confirmed.\nI'm sharing the checkout link now. 🚚\nLet me know if you need anything else." },
];

const Solution = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isWorkflowOpen, setIsWorkflowOpen] = useState(false);

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
                        <p className="text-white text-sm font-medium">Kanyadhan Jewellers</p>
                        <p className="text-[10px] text-green-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                          Online • 24/7 Sales Assistant
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
                            transition: `all 0.5s ease-out ${600 + index * 150}ms`
                          }}
                        >
                          <div 
                            className={`max-w-[85%] px-3 py-2 rounded-lg text-xs ${
                              msg.type === 'sent' 
                                ? 'bg-[#005c4b] text-white rounded-br-none' 
                                : 'bg-[#1f2c34] text-white rounded-bl-none'
                            }`}
                          >
                            <p className="whitespace-pre-line">{msg.text}</p>
                            
                            {/* Product recommendations with thumbnails */}
                            {msg.products && (
                              <div className="mt-2 space-y-1.5">
                                {msg.products.map((product, pIdx) => (
                                  <div key={pIdx} className="flex items-center gap-2 bg-white/10 rounded-lg p-1.5">
                                    <img 
                                      src={product.image} 
                                      alt={product.name}
                                      className="w-10 h-10 rounded-md object-cover"
                                    />
                                    <div className="flex-1 min-w-0">
                                      <p className="text-[10px] font-medium truncate">{product.name}</p>
                                      <p className="text-[9px] text-emerald-300">{product.price}</p>
                                    </div>
                                  </div>
                                ))}
                                <p className="text-[10px] mt-1.5 opacity-80">Would you like to see photos or product links?</p>
                              </div>
                            )}
                            
                            {/* Image gallery */}
                            {msg.images && (
                              <div className="mt-2 flex gap-1.5">
                                {msg.images.map((img, imgIdx) => (
                                  <img 
                                    key={imgIdx}
                                    src={img} 
                                    alt={`Product ${imgIdx + 1}`}
                                    className="w-16 h-16 rounded-lg object-cover border border-white/20"
                                  />
                                ))}
                              </div>
                            )}
                            
                            {/* After text (for messages with images) */}
                            {msg.afterText && (
                              <p className="whitespace-pre-line mt-2">{msg.afterText}</p>
                            )}
                            
                            <div className="flex items-center justify-end gap-1 mt-1">
                              {msg.type === 'sent' && (
                                <Check className="w-3 h-3 text-blue-400" />
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

                {/* Actual n8n Workflow Image - Clickable */}
                <div 
                  className="relative rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setIsWorkflowOpen(true)}
                >
                  <img 
                    src={n8nWorkflow} 
                    alt="ScaleX n8n Automation Workflow showing WhatsApp integration, AI Agent, OpenAI, and Supabase Vector Store" 
                    className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                      <Maximize2 className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-medium">View Full Workflow</span>
                    </div>
                  </div>
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

              {/* Workflow Description Note */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">How This Automation Works</h4>
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      <li className="flex items-start gap-2">
                        <Mic className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                        <span>Understands text, voice notes & images from WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Brain className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>AI analyzes intent & searches your product catalog semantically</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ShoppingCart className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>Recommends products & replies in text or voice — 24/7</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Workflow Dialog */}
        <Dialog open={isWorkflowOpen} onOpenChange={setIsWorkflowOpen}>
          <DialogContent className="max-w-[95vw] w-full max-h-[95vh] p-0 bg-zinc-900/95 backdrop-blur-xl border-white/10">
            <div className="relative w-full h-full">
              <button 
                onClick={() => setIsWorkflowOpen(false)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="p-4 overflow-auto max-h-[90vh]">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white">ScaleX Intelligent Architecture</h3>
                  <p className="text-sm text-white/60">Proprietary node-based logic driving 24/7 customer conversion</p>
                </div>
                <img 
                  src={n8nWorkflow} 
                  alt="ScaleX n8n Automation Workflow - Full View" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>

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
            <span>Want to see this running for your business? Book a free audit for your business</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solution;