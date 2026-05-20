import { Coffee, Instagram, Facebook, Mail } from 'lucide-react';
import { siteData } from '../../../data/site';
import { navigationData } from '../../../data/navigation';

export function Footer() {
  const { name, description, contact, social, copyright, legal } = siteData;

  return (
    <footer className="bg-[#3D3D3D] text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-7 h-7 text-[#D4C5B9]" strokeWidth={1.5} />
              <span className="text-xl tracking-wider">{name}</span>
            </div>
            <p className="text-white/60 mb-6 max-w-md">{description}</p>
            <div className="flex gap-4">
              <a
                href={social.instagram}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href={social.facebook}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href={social.email}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-[#D4C5B9]">Quick Links</h4>
            <ul className="space-y-3">
              {navigationData.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4 text-[#D4C5B9]">Contact</h4>
            <ul className="space-y-3 text-white/60">
              <li>{contact.address}</li>
              <li>{contact.city}</li>
              <li className="pt-2">{contact.phone}</li>
              <li>{contact.email}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">{copyright}</p>
          <div className="flex gap-8 text-sm text-white/40">
            {legal.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white/60 transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
