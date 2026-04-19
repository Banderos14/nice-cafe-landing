import { Coffee, Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#3D3D3D] text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-7 h-7 text-[#D4C5B9]" strokeWidth={1.5} />
              <span className="text-xl tracking-wider">CAFÉ RIVIERA</span>
            </div>
            <p className="text-white/60 mb-6 max-w-md">
              A specialty coffee shop in Nice, bringing together Mediterranean warmth 
              and the art of exceptional coffee.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
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
              <li>
                <a href="#menu" className="text-white/60 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#location" className="text-white/60 hover:text-white transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4 text-[#D4C5B9]">Contact</h4>
            <ul className="space-y-3 text-white/60">
              <li>15 Avenue Jean Médecin</li>
              <li>06000 Nice, France</li>
              <li className="pt-2">+33 4 93 87 65 43</li>
              <li>hello@caferiviera.fr</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Café Riviera. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
