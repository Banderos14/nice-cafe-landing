import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import styles from './Hero.module.scss';
import { heroData } from '../../../data/hero';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <div
          className={`w-full h-full ${styles.background}`}
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${heroData.backgroundImage}')` }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white text-5xl sm:text-7xl md:text-8xl mb-6 tracking-tight"
        >
          {heroData.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/90 text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
        >
          {heroData.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="bg-white text-[#3D3D3D] px-10 py-4 rounded-full hover:bg-[#F5F1ED] transition-all duration-300 hover:shadow-xl transform hover:scale-105">
            {heroData.buttons[0].label}
          </button>
          <button
            onClick={scrollToAbout}
            className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            {heroData.buttons[1].label}
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
