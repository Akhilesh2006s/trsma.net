import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/LOGO.jpg";

const quickLinks = [
  { label: "About TRSMA", href: "#about" },
  { label: "Membership", href: "#membership" },
  { label: "Latest Circulars", href: "#updates" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

const resources = [
  { label: "Government Orders", href: "#" },
  { label: "Fee Guidelines", href: "#" },
  { label: "Recognition Process", href: "#" },
  { label: "Legal Resources", href: "#" },
  { label: "Training Materials", href: "#" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logo} 
                alt="TRSMA Logo" 
                className="h-20 object-contain"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm font-body leading-relaxed mb-6">
              Telangana Recognized School Managements Association (TRSMA) is a unified platform representing recognized private school managements across Telangana. Registered under the Andhra Pradesh Societies Act in the year 2003, Regd. No. 2054/2003.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm font-body">
                  2-3-528/C/15/B,<br />
                  Amberpet, Hyderabad - 500013<br />
                  Telangana
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/70 text-sm font-body">
                  <div className="mb-2">
                    State President<br />
                    <a href="tel:9347337244" className="hover:text-gold">9347337244</a>
                  </div>
                  <div className="mb-2">
                    State General Secretary<br />
                    <a href="tel:9989044500" className="hover:text-gold">9989044500</a>
                  </div>
                  <div>
                    State Treasurer<br />
                    <a href="tel:9052333567" className="hover:text-gold">9052333567</a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <div className="text-primary-foreground/70 text-sm font-body">
                  <a href="mailto:trsma2054@gmail.com" className="hover:text-gold">trsma2054@gmail.com</a><br />
                  <a href="https://www.trsma.net" target="_blank" rel="noopener noreferrer" className="hover:text-gold">www.trsma.net</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm font-body text-center md:text-left">
              © 2025 Telangana Recognised School Managements Association. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm font-body">
              <a href="#" className="text-primary-foreground/50 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-gold transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-gold transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
