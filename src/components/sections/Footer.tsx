import { Link } from 'react-router-dom';
import logoImage from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Our Process', href: '/process' },
      { label: 'Contact', href: '/contact' },
    ],
    services: [
      { label: 'AI Receptionist', href: '/ai-receptionist' },
      { label: 'Booking Automation', href: '/booking-automation' },
      { label: 'SEO Websites', href: '/seo-websites' },
      { label: 'Industries', href: '/industries' },
    ],
    resources: [
      { label: 'Blog & Guides', href: '/resources' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
    contact: [
      { label: 'Book a Call', href: 'https://calendly.com/scalee-x/new-meeting', external: true },
      { label: 'utkarsh@agencyautonix.com', href: 'mailto:utkarsh@agencyautonix.com' },
    ],
  };

  return (
    <footer className="py-10 sm:py-12 lg:py-16 border-t border-border/50 bg-background" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main footer grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
            {/* Company */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Resources</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Contact</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.contact.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 sm:pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2" aria-label="Autonix Home">
              <img 
                src={logoImage} 
                alt="Autonix Logo" 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg"
              />
              <span className="text-base sm:text-lg font-bold">Autonix</span>
            </Link>

            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-right">
              © {currentYear} Autonix. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
