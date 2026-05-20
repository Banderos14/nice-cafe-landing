import { motion } from 'motion/react';
import { useInView } from '../../../hooks/useInView';
import { Coffee, Heart, Sun } from 'lucide-react';
import { experienceData } from '../../../data/experience';

const iconMap = {
  Coffee,
  Heart,
  Sun,
};

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
            <div className="text-[#8B6F47] mb-4 tracking-widest text-sm">{experienceData.label}</div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#3D3D3D] mb-8 leading-tight">
              {experienceData.heading}
            </h2>
            <p className="text-[#3D3D3D]/70 text-base sm:text-lg leading-relaxed mb-12">
              {experienceData.description}
            </p>

            <div className="space-y-8">
              {experienceData.features.map((feature) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#F5F1ED] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#8B6F47]" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl text-[#3D3D3D] mb-2">{feature.title}</h3>
                      <p className="text-[#3D3D3D]/60">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
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
                {experienceData.images.slice(0, 2).map((img) => (
                  <div
                    key={img.src}
                    className="rounded-2xl overflow-hidden shadow-xl"
                    style={{ aspectRatio: img.aspect }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-6 pt-12">
                {experienceData.images.slice(2, 4).map((img) => (
                  <div
                    key={img.src}
                    className="rounded-2xl overflow-hidden shadow-xl"
                    style={{ aspectRatio: img.aspect }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
