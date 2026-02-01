import { useEffect, useState } from 'react';
import slackLogo from '@/assets/logos/slack.svg';
import whatsappLogo from '@/assets/logos/whatsapp.svg';
import zapierLogo from '@/assets/logos/zapier.svg';
import n8nLogo from '@/assets/logos/n8n.svg';
import hubspotLogo from '@/assets/logos/hubspot.svg';
import calendlyLogo from '@/assets/logos/calendly.svg';

const integrations = [
  { name: 'Slack', logo: slackLogo },
  { name: 'WhatsApp', logo: whatsappLogo },
  { name: 'Zapier', logo: zapierLogo },
  { name: 'n8n', logo: n8nLogo },
  { name: 'HubSpot', logo: hubspotLogo },
  { name: 'Calendly', logo: calendlyLogo },
];

const IntegrationBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-8 sm:py-10 lg:py-12 border-y border-border/30 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          className={`flex flex-col items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
            Verified Integration Partners
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-10">
            {integrations.map((integration, index) => (
              <div 
                key={integration.name}
                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-lg bg-card/50 border border-border/30 transition-all duration-500 hover:border-primary/30 hover:bg-card ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img 
                  src={integration.logo} 
                  alt={`${integration.name} logo`}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <span className="text-xs sm:text-sm font-medium text-foreground/80">{integration.name}</span>
              </div>
            ))}
          </div>
          
          <p className="text-[10px] sm:text-xs text-muted-foreground/60 mt-4 sm:mt-6">
            Seamlessly integrates with your stack
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationBar;
