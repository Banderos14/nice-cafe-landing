import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Coffee, Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F1ED]/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <Coffee className="w-6 h-6 text-[#8B6F47]" strokeWidth={1.5} />
          <span className="text-[#3D3D3D] tracking-wider">CAFÉ RIVIERA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#3D3D3D]/70 hover:text-[#8B6F47] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="text-[#3D3D3D]/70 hover:text-[#8B6F47] transition-colors"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="text-[#3D3D3D]/70 hover:text-[#8B6F47] transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('location')}
            className="text-[#3D3D3D]/70 hover:text-[#8B6F47] transition-colors"
          >
            Location
          </button>
        </div>

        <button
          onClick={() => scrollToSection('cta')}
          className="hidden md:block bg-[#8B6F47] text-white px-8 py-3 rounded-full hover:bg-[#6B543A] transition-all duration-300 hover:shadow-lg"
        >
          Visit Us
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#3D3D3D] p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#F5F1ED] border-t border-[#3D3D3D]/10"
        >
          <div className="px-8 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-[#3D3D3D]/70 hover:text-[#8B6F47] transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left text-[#3D3D3D]/70 hover:text-[#8B6F47] transition-colors py-2"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-[#3D3D3D]/70 hover:text-[#8B6F47] transition-colors py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="block w-full text-left text-[#3D3D3D]/70 hover:text-[#8B6F47] transition-colors py-2"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="block w-full bg-[#8B6F47] text-white px-8 py-3 rounded-full hover:bg-[#6B543A] transition-all duration-300 mt-4"
            >
              Visit Us
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}