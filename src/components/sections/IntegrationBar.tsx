import { useEffect, useState } from 'react';

const integrations = [
  { name: 'Slack', logo: '💬' },
  { name: 'WhatsApp', logo: '📱' },
  { name: 'Zapier', logo: '⚡' },
  { name: 'n8n', logo: '🔗' },
  { name: 'HubSpot', logo: '🔶' },
  { name: 'Calendly', logo: '📆' },
];

const IntegrationBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 border-y border-border/30 bg-muted/20">
      <div className="container mx-auto px-4">
        <div 
          className={`flex flex-col items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Verified Integration Partners
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {integrations.map((integration, index) => (
              <div 
                key={integration.name}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/30 transition-all duration-500 hover:border-primary/30 hover:bg-card ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-xl">{integration.logo}</span>
                <span className="text-sm font-medium text-foreground/80">{integration.name}</span>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-muted-foreground/60 mt-6">
            Seamlessly integrates with your stack
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationBar;
