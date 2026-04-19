import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="py-32 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1774610588513-09fd288f61ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBtZWRpdGVycmFuZWFufGVufDF8fHx8MTc3NjYxNTI3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Coffee shop interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#D4C5B9] rounded-2xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-[#8B6F47] mb-4 tracking-widest text-sm">OUR STORY</div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#3D3D3D] mb-8 leading-tight">
              Crafted with passion
            </h2>
            <div className="space-y-6 text-[#3D3D3D]/70 text-base sm:text-lg leading-relaxed">
              <p>
                Nestled in the heart of Nice, Café Riviera brings together the warmth of the French Riviera 
                and the precision of specialty coffee culture.
              </p>
              <p>
                Every bean is carefully sourced from sustainable farms, roasted to perfection, and brewed 
                with techniques that honor both tradition and innovation.
              </p>
              <p>
                More than a coffee shop, we're a gathering place where locals and travelers alike find 
                connection, inspiration, and the simple pleasure of a perfectly crafted cup.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}