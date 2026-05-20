import { motion } from 'motion/react';
import { useInView } from '../../../hooks/useInView';
import { aboutData } from '../../../data/about';

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="py-32 bg-white">
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
                src={aboutData.image.src}
                alt={aboutData.image.alt}
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
            <div className="text-[#8B6F47] mb-4 tracking-widest text-sm">{aboutData.label}</div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#3D3D3D] mb-8 leading-tight">
              {aboutData.heading}
            </h2>
            <div className="space-y-6 text-[#3D3D3D]/70 text-base sm:text-lg leading-relaxed">
              {aboutData.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
