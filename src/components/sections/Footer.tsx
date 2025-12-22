import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl font-bold">ScaleX</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                AI-powered automation for local businesses. 
                More leads, more bookings, more revenue.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-3">Ready to scale?</p>
              <Button 
                variant="outline" 
                className="border-primary/30 hover:border-primary hover:bg-primary/5"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                Book a Call
              </Button>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} ScaleX. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
