import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

const Privacy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Autonix';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read the Autonix privacy policy to understand how we collect, use, and protect your personal information.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <article className="container mx-auto max-w-3xl px-4">
          <header className="py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 31, 2026</p>
          </header>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Autonix ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website agencyautonix.com or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect information about you in various ways, including:
              </p>
              <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you contact us, request a consultation, or use our services, we may collect your name, email address, phone number, company name, and any other information you provide.
              </p>
              <h3 className="text-xl font-semibold mb-2">Usage Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Autonix uses the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website and services, subject to confidentiality agreements. We may also disclose information if required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                Autonix implements reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your experience. You can set your browser to refuse cookies, but some features of our website may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or port your data. To exercise these rights, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. Autonix is not responsible for the privacy practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Autonix may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact Autonix at:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@agencyautonix.com" className="text-primary hover:underline">
                  hello@agencyautonix.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <Link to="/" className="text-primary hover:underline">
              ← Back to Home
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
