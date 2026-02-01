import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
    services: [
      { label: 'AI Automation', href: '/services#ai-automation' },
      { label: 'Website Development', href: '/services#websites' },
      { label: 'Booking Automation', href: '/services#booking' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/privacy' },
    ],
    contact: [
      { label: 'Book a Call', href: 'https://calendly.com/scalee-x/new-meeting', external: true },
      { label: 'utkarsh@agencyautonix.com', href: 'mailto:utkarsh@agencyautonix.com' },
    ],
  };

  return (
    <footer className="py-16 border-t border-border/50 bg-background" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main footer grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-3">
                {footerLinks.contact.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2" aria-label="Autonix Home">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold">Autonix</span>
            </Link>

            <p className="text-sm text-muted-foreground">
              © {currentYear} Autonix. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
