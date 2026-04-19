import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function CTA() {
  const { ref, inView } = useInView();

  return (
    <section id="cta" ref={ref} className="relative py-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(61, 61, 61, 0.85), rgba(61, 61, 61, 0.85)), url('https://images.unsplash.com/photo-1750040970096-31907e42d6a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2FmZSUyMGludGVyaW9yfGVufDF8fHx8MTc3NjYxNTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#D4C5B9] mb-6 tracking-widest text-sm">EXPERIENCE THE RIVIERA</div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl text-white mb-8 leading-tight">
            Come for coffee,<br />stay for the vibe
          </h2>
          <p className="text-white/80 text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Join us for a moment of warmth, inspiration, and exceptional coffee in the heart of Nice
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-[#3D3D3D] px-12 py-5 rounded-full hover:bg-[#F5F1ED] transition-all duration-300 hover:shadow-2xl transform hover:scale-105 text-base sm:text-lg">
              Order Online
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-base sm:text-lg">
              Book a Table
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}