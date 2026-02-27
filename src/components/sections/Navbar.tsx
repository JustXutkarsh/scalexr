import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logoImage from '@/assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-5'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Autonix Home" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img 
              src={logoImage} 
              alt="Autonix Logo" 
              className="w-9 h-9 rounded-lg transition-all group-hover:scale-105"
            />
            <span className="text-xl font-bold">Autonix</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            {isHomePage && (
              <button 
                onClick={() => scrollToSection('solution')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </button>
            )}
            
            <Button 
              size="sm" 
              className="gradient-cta animate-pulse-cta"
              onClick={() => window.open('https://calendly.com/autonix_agency/new-meeting', '_blank')}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-0 bottom-0 bg-background z-50 pt-20 px-4 pb-8 animate-slide-up overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  to={link.href}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors py-3 tap-target text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {isHomePage && (
                <button 
                  onClick={() => scrollToSection('solution')}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors py-3 tap-target text-base"
                >
                  How It Works
                </button>
              )}
              <Button 
                className="w-full mt-4 py-6 text-base"
                onClick={() => window.open('https://calendly.com/autonix_agency/new-meeting', '_blank')}
              >
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
