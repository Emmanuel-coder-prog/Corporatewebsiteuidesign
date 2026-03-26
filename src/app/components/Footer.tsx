import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" style={{ backgroundColor: '#0F3D3E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">AFRODEQUE</span>
              <br />
              <span style={{ color: '#C9A14A' }}>VENTURES</span>
            </h3>
            <p className="text-white/70 mb-6">
              Ghana's premier construction and real estate development company, building the future
              with excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: '#C9A14A30' }}
                >
                  <Icon size={20} color="#C9A14A" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Projects', 'Careers', 'Blog'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Real Estate Development',
                'Construction Services',
                'Block Factory',
                'Project Management',
                'Consultation',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} color="#C9A14A" className="flex-shrink-0 mt-1" />
                <span className="text-white/70">
                  123 Independence Avenue
                  <br />
                  Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} color="#C9A14A" className="flex-shrink-0" />
                <span className="text-white/70">+233 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} color="#C9A14A" className="flex-shrink-0" />
                <span className="text-white/70">info@afrodequeventures.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t" style={{ borderColor: '#C9A14A30' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2026 AFRODEQUE VENTURES. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
