import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Coffee, Heart, Sun } from 'lucide-react';

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-5 gap-16 items-center">
          {/* Text - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-2"
          >
            <div className="text-[#8B6F47] mb-4 tracking-widest text-sm">EXPERIENCE</div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#3D3D3D] mb-8 leading-tight">
              More than coffee
            </h2>
            <p className="text-[#3D3D3D]/70 text-base sm:text-lg leading-relaxed mb-12">
              We've created a space where time slows down, conversations flow naturally, 
              and the simple act of enjoying coffee becomes a moment of pure joy.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#F5F1ED] flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-[#8B6F47]" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-[#3D3D3D] mb-2">Specialty Grade</h3>
                  <p className="text-[#3D3D3D]/60">
                    Only the finest beans, ethically sourced and perfectly roasted
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#F5F1ED] flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#8B6F47]" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-[#3D3D3D] mb-2">Crafted with Care</h3>
                  <p className="text-[#3D3D3D]/60">
                    Every cup is made by skilled baristas who love what they do
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#F5F1ED] flex items-center justify-center">
                    <Sun className="w-6 h-6 text-[#8B6F47]" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-[#3D3D3D] mb-2">Riviera Vibes</h3>
                  <p className="text-[#3D3D3D]/60">
                    Mediterranean warmth meets minimalist design
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Images - Takes 3 columns (asymmetric) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1607618421926-b72c6a99c342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMG1hY2hpbmUlMjBiYXJpc3RhfGVufDF8fHx8MTc3NjYxNTI3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Coffee brewing"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1775327658475-eeb1c8fd2639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBwYXN0cnklMjBkaXNwbGF5fGVufDF8fHx8MTc3NjYxNTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Pastries"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzc2NTc5MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Coffee beans"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1725859685127-c723ea1d32a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FmZSUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzc2NjE1MjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Cafe atmosphere"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}