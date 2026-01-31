import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <span className="text-navy-dark font-display font-bold text-xl">T</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">TRSMA</h3>
                <p className="text-xs text-primary-foreground/60 font-body">Since 1996</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm font-body leading-relaxed mb-6">
              Telangana Recognised School Managements Association is the apex body representing private unaided schools across Telangana, dedicated to protecting and promoting quality education.
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
                  TRSMA Head Office<br />
                  Himayatnagar, Hyderabad<br />
                  Telangana - 500029
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm font-body">
                  +91 40 2322 XXXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm font-body">
                  info@trsma.org
                </span>
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
