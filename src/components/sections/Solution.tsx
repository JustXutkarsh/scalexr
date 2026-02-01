import { useRef, useEffect, useState } from "react";
import CircleHighlight from '../CircleHighlight';
import TextHighlighter from '../TextHighlighter';
import {
  Bot,
  Calendar,
  MessageSquare,
  Database,
  ArrowRight,
  Zap,
  Brain,
  Search,
  MessageCircle,
  Check,
  Clock,
  Maximize2,
  X,
  Mic,
  Image as ImageIcon,
  ShoppingCart,
  Sparkles,
  Linkedin,
  FileSpreadsheet,
  Users,
  Globe,
  Send,
  Video,
  Download,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import n8nWorkflow from "@/assets/n8n-workflow.png";
import linkedinWorkflow from "@/assets/linkedin-workflow.png";
import ugcWorkflow from "@/assets/ugc-automation-workflow.png";
import ugcSampleVideo from "@/assets/ugc-sample-video.mp4";
import ugcProductDress from "@/assets/ugc-product-dress.png";
import jewelryHairAccessory from "@/assets/jewelry-hair-accessory.png";
import jewelryShellEarrings from "@/assets/jewelry-shell-earrings.png";
import jewelryAnklet from "@/assets/jewelry-anklet.png";

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
  },
];

const whatsappMessages = [
  { type: "received", text: "Hi, I'm looking for something elegant for a beach wedding gift." },
  {
    type: "sent",
    text: "Sure 😊 I'd love to help.\nCould you please share:\n• Your budget range\n• Is it for the bride or a guest\n• Any color preference?",
  },
  { type: "received", text: "Budget around ₹3,000. It's for the bride. Light colors." },
  {
    type: "sent",
    text: "Perfect choice for a beach wedding ✨\nHere are the top 3 recommendations:",
    products: [
      { name: "Floral Pearl Hair Accessory", price: "₹2,800", image: jewelryHairAccessory },
      { name: "Shell & Pearl Earrings", price: "₹2,500", image: jewelryShellEarrings },
      { name: "Ivory Floral Anklet Set", price: "₹2,900", image: jewelryAnklet },
    ],
  },
  { type: "received", text: "Can you show photos of option 1 and 2?" },
  {
    type: "sent",
    text: "Of course 😊 Here are the photos:",
    images: [jewelryHairAccessory, jewelryShellEarrings],
    afterText: "Both are in stock and ready to ship.\n\nWould you like help placing the order?",
  },
  { type: "received", text: "Yes, I want the Shell & Pearl Earrings." },
  {
    type: "sent",
    text: "Great choice 🌸\nPlease share your full shipping address including city, state, and PIN code.",
  },
  { type: "received", text: "Address sent." },
  {
    type: "sent",
    text: "Thank you! Your order details are confirmed.\nI'm sharing the checkout link now. 🚚\nLet me know if you need anything else.",
  },
];

const linkedinMessages = [
  { type: "system", text: "🔍 Searching: \"Marketing Manager\" in San Francisco..." },
  { type: "system", text: "✅ Found 847 profiles matching criteria" },
  { type: "result", name: "Sarah Johnson", title: "Marketing Manager at TechCorp", url: "linkedin.com/in/sjohnson" },
  { type: "result", name: "Michael Chen", title: "Sr. Marketing Manager at StartupXYZ", url: "linkedin.com/in/mchen" },
  { type: "result", name: "Emily Davis", title: "Marketing Manager at CloudBase", url: "linkedin.com/in/edavis" },
  { type: "system", text: "📊 Exporting to Google Sheets..." },
  { type: "system", text: "✅ 50 leads added to sheet" },
  { type: "system", text: "⏳ Processing page 2 of 20..." },
];

const telegramMessages = [
  { type: "received", text: "📸 Sending product image..." },
  { type: "received", isImage: true, imageUrl: ugcProductDress },
  { type: "sent", text: "✅ Image received! Processing your UGC video..." },
  { type: "sent", text: "🎬 Generating AI-powered UGC content with realistic creator..." },
  { type: "system", text: "⏳ Analyzing product features..." },
  { type: "system", text: "⏳ Creating script & voiceover..." },
  { type: "system", text: "⏳ Rendering video (30-60 seconds)..." },
  { type: "sent", text: "🎉 Your UGC video is ready!" },
  { type: "sent", text: "📹 Includes: AI creator, product showcase, call-to-action" },
  { type: "sent", isVideo: true, text: "UGC_Video_001.mp4 • Ready to download" },
];

const Solution = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const workflowContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isWorkflowOpen, setIsWorkflowOpen] = useState(false);
  const [isLinkedinWorkflowOpen, setIsLinkedinWorkflowOpen] = useState(false);
  const [isUgcWorkflowOpen, setIsUgcWorkflowOpen] = useState(false);
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance to trigger workflow change
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && activeWorkflow < 2) {
      setActiveWorkflow(prev => prev + 1);
    }
    if (isRightSwipe && activeWorkflow > 0) {
      setActiveWorkflow(prev => prev - 1);
    }
  };

  const handleDownloadTemplate = (workflowName: string, imageSrc: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `${workflowName}-template.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solution" ref={sectionRef} className="py-16 sm:py-20 lg:py-32 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-6 sm:mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">The Solution</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
            Turn website visitors and inbound leads into booked customers on <TextHighlighter>autopilot</TextHighlighter>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Autonix captures every lead, books appointments automatically, and follows up without manual effort.
          </p>
          <p className="text-muted-foreground/80 text-xs sm:text-sm mt-2 sm:mt-3 max-w-xl mx-auto">
            If you don't have a website yet — or your current one doesn't convert — we build it as part of the system.
          </p>
        </div>

        {/* Friction removal line */}
        <div
          className={`text-center mb-8 sm:mb-10 lg:mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-muted-foreground/70 text-xs sm:text-sm">
            No new tools to learn. We integrate with what you already use.
          </p>
        </div>

        {/* Autonix Intelligent Architecture Section */}
        <div
          className={`mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Architecture heading */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3">Autonix <CircleHighlight>Intelligent Architecture</CircleHighlight></h3>
            <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
              Proprietary node-based logic driving 24/7 customer conversion.
            </p>
          </div>

          {/* Workflow Navigation Dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-6 flex-wrap">
            <button
              onClick={() => setActiveWorkflow(0)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition-all ${
                activeWorkflow === 0
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-white/5 text-muted-foreground border border-white/10 hover:border-white/20"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Sales</span>
            </button>
            <button
              onClick={() => setActiveWorkflow(1)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition-all ${
                activeWorkflow === 1
                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  : "bg-white/5 text-muted-foreground border border-white/10 hover:border-white/20"
              }`}
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Leads</span>
            </button>
            <button
              onClick={() => setActiveWorkflow(2)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm transition-all ${
                activeWorkflow === 2
                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                  : "bg-white/5 text-muted-foreground border border-white/10 hover:border-white/20"
              }`}
            >
              <Send className="w-4 h-4" />
              <span>UGC Creator</span>
            </button>
          </div>

          {/* Horizontal Scroll Container for Workflows */}
          <ScrollArea className="w-full">
            <div 
              ref={workflowContainerRef}
              className="flex gap-8 transition-transform duration-500 ease-out pb-4 touch-pan-y"
              style={{ transform: `translateX(-${activeWorkflow * 100}%)` }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Workflow 1: WhatsApp Sales */}
              <div className="min-w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                  {/* Left: WhatsApp Phone Mockup */}
                  <div
                    className={`flex justify-center transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    <div className="relative">
                      {/* Phone frame */}
                      <div className="relative w-[260px] sm:w-[320px] bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[32px] sm:rounded-[40px] p-2 shadow-2xl shadow-black/50">
                        {/* Phone notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-zinc-900 rounded-b-xl sm:rounded-b-2xl z-10" />

                        {/* Screen */}
                        <div className="relative bg-[#0b141a] rounded-[24px] sm:rounded-[32px] overflow-hidden">
                          {/* WhatsApp header */}
                          <div className="bg-[#1f2c34] px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                              <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-xs sm:text-sm font-medium truncate">Kanyadhan Jewellers</p>
                              <p className="text-[9px] sm:text-[10px] text-green-400 flex items-center gap-1">
                                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full animate-pulse" />
                                Online • 24/7 Sales Assistant
                              </p>
                            </div>
                          </div>

                          {/* Chat messages */}
                          <div className="p-2 sm:p-3 space-y-2 h-[320px] sm:h-[420px] overflow-y-auto">
                            {whatsappMessages.map((msg, index) => (
                              <div
                                key={index}
                                className={`flex ${msg.type === "sent" ? "justify-end" : "justify-start"}`}
                                style={{
                                  opacity: isVisible ? 1 : 0,
                                  transform: isVisible ? "translateY(0)" : "translateY(10px)",
                                  transition: `all 0.5s ease-out ${600 + index * 150}ms`,
                                }}
                              >
                                <div
                                  className={`max-w-[85%] px-3 py-2 rounded-lg text-xs ${
                                    msg.type === "sent"
                                      ? "bg-[#005c4b] text-white rounded-br-none"
                                      : "bg-[#1f2c34] text-white rounded-bl-none"
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
                                      <p className="text-[10px] mt-1.5 opacity-80">
                                        Would you like to see photos or product links?
                                      </p>
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
                                  {msg.afterText && <p className="whitespace-pre-line mt-2">{msg.afterText}</p>}

                                  <div className="flex items-center justify-end gap-1 mt-1">
                                    {msg.type === "sent" && <Check className="w-3 h-3 text-blue-400" />}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Input bar */}
                          <div className="bg-[#1f2c34] px-2 sm:px-3 py-2 flex items-center gap-2">
                            <div className="flex-1 bg-[#2a3942] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white/50">
                              Type a message...
                            </div>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground" />
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
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                    }`}
                    style={{ transitionDelay: "500ms" }}
                  >
                    {/* Blue outer glow */}
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl" />
                    <div className="absolute -inset-2 bg-primary/10 rounded-2xl blur-xl" />

                    {/* Glassmorphism container */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-[0_0_60px_-15px_rgba(59,130,246,0.5)]">
                      {/* Technology badges */}
                      <div className="absolute -top-3 right-2 sm:right-4 flex gap-2 z-20">
                        <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-full">
                          <Brain className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
                          <span className="text-[8px] sm:text-[10px] font-medium text-emerald-300">Autonix</span>
                        </div>
                      </div>
                      <div className="absolute -bottom-3 left-2 sm:left-4 flex gap-2 z-20">
                        <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
                          <Search className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                          <span className="text-[8px] sm:text-[10px] font-medium text-blue-300">Vector Search</span>
                        </div>
                      </div>

                      {/* Actual n8n Workflow Image - Clickable */}
                      <div
                        className="relative rounded-xl overflow-hidden cursor-pointer group"
                        onClick={() => setIsWorkflowOpen(true)}
                      >
                        <img
                          src={n8nWorkflow}
                          alt="Autonix n8n Automation Workflow showing WhatsApp integration, AI Agent, OpenAI, and Supabase Vector Store"
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
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 border border-white/10">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                            How This Automation Works
                          </h4>
                          <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-1 sm:space-y-1.5">
                            <li className="flex items-start gap-1.5 sm:gap-2">
                              <Mic className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span>Understands text, voice & images</span>
                            </li>
                            <li className="flex items-start gap-1.5 sm:gap-2">
                              <Brain className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span>AI analyzes intent & searches catalog</span>
                            </li>
                            <li className="flex items-start gap-1.5 sm:gap-2">
                              <ShoppingCart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                              <span>Recommends products 24/7</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workflow 2: LinkedIn Lead Scraper */}
              <div className="min-w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                  {/* Left: LinkedIn Terminal Mockup */}
                  <div
                    className={`flex justify-center transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    <div className="relative">
                      {/* Phone frame */}
                      <div className="relative w-[260px] sm:w-[320px] bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[32px] sm:rounded-[40px] p-2 shadow-2xl shadow-black/50">
                        {/* Phone notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-zinc-900 rounded-b-xl sm:rounded-b-2xl z-10" />

                        {/* Screen */}
                        <div className="relative bg-[#0d1117] rounded-[24px] sm:rounded-[32px] overflow-hidden">
                          {/* LinkedIn header */}
                          <div className="bg-[#0a66c2] px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-xs sm:text-sm font-medium truncate">Lead Scraper</p>
                              <p className="text-[9px] sm:text-[10px] text-blue-200 flex items-center gap-1">
                                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full animate-pulse" />
                                Scraping in progress...
                              </p>
                            </div>
                          </div>

                          {/* Terminal content */}
                          <div className="p-2 sm:p-3 h-[320px] sm:h-[420px] overflow-y-auto font-mono text-[10px] sm:text-xs">
                            {linkedinMessages.map((msg, index) => (
                              <div
                                key={index}
                                className="mb-2"
                                style={{
                                  opacity: isVisible ? 1 : 0,
                                  transform: isVisible ? "translateY(0)" : "translateY(10px)",
                                  transition: `all 0.5s ease-out ${600 + index * 200}ms`,
                                }}
                              >
                                {msg.type === "system" && (
                                  <p className="text-green-400">{msg.text}</p>
                                )}
                                {msg.type === "result" && (
                                  <div className="ml-2 p-2 bg-blue-500/10 rounded border border-blue-500/20 mb-1">
                                    <p className="text-blue-300 font-medium">{msg.name}</p>
                                    <p className="text-white/60 text-[9px] sm:text-[10px]">{msg.title}</p>
                                    <p className="text-blue-400/60 text-[8px] sm:text-[9px]">{msg.url}</p>
                                  </div>
                                )}
                              </div>
                            ))}
                            <div className="flex items-center gap-1 text-white/40 mt-4">
                              <span className="animate-pulse">▊</span>
                            </div>
                          </div>

                          {/* Bottom bar */}
                          <div className="bg-[#1a1a2e] px-2 sm:px-3 py-2 flex items-center gap-2">
                            <div className="flex-1 bg-[#0d1117] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white/50">
                              linkedin-scraper.js
                            </div>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#0a66c2] rounded-full flex items-center justify-center">
                              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Decorative glow */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-[50px] blur-2xl -z-10 opacity-60" />
                    </div>
                  </div>

                  {/* Right: LinkedIn Workflow in Glassmorphism container */}
                  <div
                    className={`relative transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                    }`}
                    style={{ transitionDelay: "500ms" }}
                  >
                    {/* Blue outer glow */}
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl" />
                    <div className="absolute -inset-2 bg-blue-600/10 rounded-2xl blur-xl" />

                    {/* Glassmorphism container */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-[0_0_60px_-15px_rgba(59,130,246,0.5)]">
                      {/* Technology badges */}
                      <div className="absolute -top-3 right-2 sm:right-4 flex gap-2 z-20">
                        <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
                          <Linkedin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                          <span className="text-[8px] sm:text-[10px] font-medium text-blue-300">LinkedIn</span>
                        </div>
                      </div>
                      <div className="absolute -bottom-3 left-2 sm:left-4 flex gap-2 z-20">
                        <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-full">
                          <FileSpreadsheet className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-400" />
                          <span className="text-[8px] sm:text-[10px] font-medium text-green-300">Google Sheets</span>
                        </div>
                      </div>

                      {/* LinkedIn Workflow Image - Clickable */}
                      <div
                        className="relative rounded-xl overflow-hidden cursor-pointer group"
                        onClick={() => setIsLinkedinWorkflowOpen(true)}
                      >
                        <img
                          src={linkedinWorkflow}
                          alt="Autonix LinkedIn Lead Scraper Automation Workflow"
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
                          <Users className="w-3 h-3 text-blue-400" />
                          <span>Up to 1000 Leads</span>
                        </div>
                        <span className="text-white/20">•</span>
                        <div className="flex items-center gap-1.5">
                          <Globe className="w-3 h-3 text-green-400" />
                          <span>Any Niche & Location</span>
                        </div>
                      </div>
                    </div>

                    {/* Workflow Description Note */}
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 border border-white/10">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                            How This Automation Works
                          </h4>
                          <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-1 sm:space-y-1.5">
                            <li className="flex items-start gap-1.5 sm:gap-2">
                              <Search className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                              <span>Finds LinkedIn profiles via Google Search</span>
                            </li>
                            <li className="flex items-start gap-1.5 sm:gap-2">
                              <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                              <span>Scrapes name, title, link & description</span>
                            </li>
                            <li className="flex items-start gap-1.5 sm:gap-2">
                              <FileSpreadsheet className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>Exports leads to Google Sheets in real-time</span>
                            </li>
                            <li className="flex items-start gap-1.5 sm:gap-2">
                              <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span>Handles pagination for up to 1000 results</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workflow 3: UGC Creator (Telegram) */}
              <div className="min-w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                  {/* Left: Telegram Phone Mockup */}
                  <div
                    className={`flex justify-center transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    <div className="relative">
                      {/* Phone frame */}
                      <div className="relative w-[260px] sm:w-[320px] bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[32px] sm:rounded-[40px] p-2 shadow-2xl shadow-black/50">
                        {/* Phone notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-5 sm:h-6 bg-zinc-900 rounded-b-xl sm:rounded-b-2xl z-10" />

                        {/* Screen */}
                        <div className="relative bg-[#17212b] rounded-[24px] sm:rounded-[32px] overflow-hidden">
                          {/* Telegram header */}
                          <div className="bg-[#242f3d] px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                              <Video className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-xs sm:text-sm font-medium truncate">UGC Creator Bot</p>
                              <p className="text-[9px] sm:text-[10px] text-purple-300 flex items-center gap-1">
                                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full animate-pulse" />
                                AI-Powered UGC Generator
                              </p>
                            </div>
                          </div>

                          {/* Chat messages */}
                          <div className="p-2 sm:p-3 space-y-2 h-[320px] sm:h-[420px] overflow-y-auto">
                            {telegramMessages.map((msg, index) => (
                              <div
                                key={index}
                                className={`flex ${msg.type === "sent" ? "justify-end" : msg.type === "system" ? "justify-center" : "justify-start"}`}
                                style={{
                                  opacity: isVisible ? 1 : 0,
                                  transform: isVisible ? "translateY(0)" : "translateY(10px)",
                                  transition: `all 0.5s ease-out ${600 + index * 150}ms`,
                                }}
                              >
                                {msg.type === "system" ? (
                                  <p className="text-[10px] text-purple-300/70 font-mono">{msg.text}</p>
                                ) : (
                                  <div
                                    className={`max-w-[85%] px-3 py-2 rounded-lg text-xs ${
                                      msg.type === "sent"
                                        ? "bg-[#5b5ea6] text-white rounded-br-none"
                                        : "bg-[#242f3d] text-white rounded-bl-none"
                                    }`}
                                  >
                                    {msg.isImage ? (
                                      <div className="w-24 h-24 rounded-lg overflow-hidden">
                                        <img src={msg.imageUrl} alt="Product" className="w-full h-full object-cover" />
                                      </div>
                                    ) : msg.isVideo ? (
                                      <div className="w-full rounded-lg overflow-hidden bg-black/20">
                                        <video 
                                          src={ugcSampleVideo} 
                                          className="w-full h-auto max-h-32 rounded-lg object-cover"
                                          controls
                                          controlsList="nofullscreen nodownload"
                                          disablePictureInPicture={false}
                                          muted
                                          playsInline
                                          loop
                                          poster=""
                                        />
                                        <p className="text-[9px] text-purple-300 mt-1 text-center">{msg.text}</p>
                                      </div>
                                    ) : (
                                      <p className="whitespace-pre-line">{msg.text}</p>
                                    )}
                                    <div className="flex items-center justify-end gap-1 mt-1">
                                      {msg.type === "sent" && <Check className="w-3 h-3 text-white/60" />}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Input bar */}
                          <div className="bg-[#242f3d] px-2 sm:px-3 py-2 flex items-center gap-2">
                            <div className="flex-1 bg-[#17212b] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs text-white/50">
                              Send product image...
                            </div>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-500 rounded-full flex items-center justify-center">
                              <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Decorative glow */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-[50px] blur-2xl -z-10 opacity-60" />
                    </div>
                  </div>

                  {/* Right: UGC Workflow in Glassmorphism container */}
                  <div
                    className={`relative transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                    }`}
                    style={{ transitionDelay: "500ms" }}
                  >
                    {/* Purple outer glow */}
                    <div className="absolute -inset-4 bg-purple-500/20 rounded-3xl blur-2xl" />
                    <div className="absolute -inset-2 bg-purple-600/10 rounded-2xl blur-xl" />

                    {/* Glassmorphism container */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-[0_0_60px_-15px_rgba(147,51,234,0.5)]">
                      {/* Technology badges */}
                      <div className="absolute -top-3 right-2 sm:right-4 flex gap-2 z-20">
                        <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full">
                          <Send className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400" />
                          <span className="text-[8px] sm:text-[10px] font-medium text-purple-300">Telegram</span>
                        </div>
                      </div>
                      <div className="absolute -bottom-3 left-2 sm:left-4 flex gap-2 z-20">
                        <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm border border-pink-500/30 rounded-full">
                          <Video className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-pink-400" />
                          <span className="text-[8px] sm:text-[10px] font-medium text-pink-300">AI Video</span>
                        </div>
                      </div>

                      {/* UGC Workflow Image - Clickable */}
                      <div
                        className="relative rounded-xl overflow-hidden cursor-pointer group"
                        onClick={() => setIsUgcWorkflowOpen(true)}
                      >
                        <img
                          src={ugcWorkflow}
                          alt="Autonix UGC Creator Automation Workflow"
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
                          <ImageIcon className="w-3 h-3 text-purple-400" />
                          <span>Image to Video</span>
                        </div>
                        <span className="text-white/20">•</span>
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-pink-400" />
                          <span>AI-Generated UGC</span>
                        </div>
                      </div>
                    </div>

                    {/* Workflow Description Note */}
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 border border-white/10">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                            How This Automation Works
                          </h4>
                          <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-1 sm:space-y-1.5">
                            <li className="flex items-start gap-1.5 sm:gap-2">
                              <ImageIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                              <span>User sends product image via Telegram</span>
                            </li>
                            <li className="flex items-start gap-1.5 sm:gap-2">
                              <Brain className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-pink-400 mt-0.5 flex-shrink-0" />
                              <span>AI analyzes product & generates script</span>
                            </li>
                            <li className="flex items-start gap-1.5 sm:gap-2">
                              <Video className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                              <span>Creates realistic UGC video with AI creator</span>
                            </li>
                            <li className="flex items-start gap-1.5 sm:gap-2">
                              <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span>Returns ready-to-use marketing video</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ScrollBar orientation="horizontal" className="opacity-0" />
          </ScrollArea>

          {/* Workflow indicator dots */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveWorkflow(0)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeWorkflow === 0 ? "bg-primary w-6" : "bg-white/20 hover:bg-white/40"
              }`}
            />
            <button
              onClick={() => setActiveWorkflow(1)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeWorkflow === 1 ? "bg-blue-500 w-6" : "bg-white/20 hover:bg-white/40"
              }`}
            />
            <button
              onClick={() => setActiveWorkflow(2)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeWorkflow === 2 ? "bg-purple-500 w-6" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          </div>
        </div>

        {/* Fullscreen WhatsApp Workflow Dialog */}
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
                  <h3 className="text-xl font-bold text-white">WhatsApp Sales Automation</h3>
                  <p className="text-sm text-white/60">Proprietary node-based logic driving 24/7 customer conversion</p>
                  <button
                    onClick={() => handleDownloadTemplate('whatsapp-sales', n8nWorkflow)}
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-full text-sm transition-colors border border-green-500/30"
                  >
                    <Download className="w-4 h-4" />
                    Download Template
                  </button>
                </div>
                <img
                  src={n8nWorkflow}
                  alt="Autonix n8n Automation Workflow - Full View"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Fullscreen LinkedIn Workflow Dialog */}
        <Dialog open={isLinkedinWorkflowOpen} onOpenChange={setIsLinkedinWorkflowOpen}>
          <DialogContent className="max-w-[95vw] w-full max-h-[95vh] p-0 bg-zinc-900/95 backdrop-blur-xl border-white/10">
            <div className="relative w-full h-full">
              <button
                onClick={() => setIsLinkedinWorkflowOpen(false)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="p-4 overflow-auto max-h-[90vh]">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white">LinkedIn Lead Scraper Automation</h3>
                  <p className="text-sm text-white/60">Automated lead generation from LinkedIn profiles</p>
                  <button
                    onClick={() => handleDownloadTemplate('linkedin-leads', linkedinWorkflow)}
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-full text-sm transition-colors border border-blue-500/30"
                  >
                    <Download className="w-4 h-4" />
                    Download Template
                  </button>
                </div>
                <img
                  src={linkedinWorkflow}
                  alt="Autonix LinkedIn Lead Scraper Workflow - Full View"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Fullscreen UGC Workflow Dialog */}
        <Dialog open={isUgcWorkflowOpen} onOpenChange={setIsUgcWorkflowOpen}>
          <DialogContent className="max-w-[95vw] w-full max-h-[95vh] p-0 bg-zinc-900/95 backdrop-blur-xl border-white/10">
            <div className="relative w-full h-full">
              <button
                onClick={() => setIsUgcWorkflowOpen(false)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="p-4 overflow-auto max-h-[90vh]">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white">AI UGC Creator Automation</h3>
                  <p className="text-sm text-white/60">Turn product images into AI-powered UGC videos via Telegram</p>
                  <button
                    onClick={() => handleDownloadTemplate('ugc-creator', ugcWorkflow)}
                    className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-full text-sm transition-colors border border-purple-500/30"
                  >
                    <Download className="w-4 h-4" />
                    Download Template
                  </button>
                </div>
                <img
                  src={ugcWorkflow}
                  alt="Autonix UGC Creator Workflow - Full View"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Module cards */}
        <div
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1000ms" }}
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
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <button
            onClick={() => {
              document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => window.dispatchEvent(new CustomEvent("openAuditForm")), 500);
            }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <span>Want to see this running for your business? Book a free audit for your business</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
