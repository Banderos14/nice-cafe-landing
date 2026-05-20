import { motion } from 'motion/react';
import { useInView } from '../../../hooks/useInView';
import styles from './CallToAction.module.scss';
import { ctaData } from '../../../data/cta';

export function CallToAction() {
  const { ref, inView } = useInView();

  return (
    <section id="cta" ref={ref} className="relative py-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className={`absolute inset-0 ${styles.background}`}
        style={{
          backgroundImage: `linear-gradient(rgba(61, 61, 61, 0.85), rgba(61, 61, 61, 0.85)), url('${ctaData.backgroundImage}')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#D4C5B9] mb-6 tracking-widest text-sm">{ctaData.label}</div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl text-white mb-8 leading-tight">
            {ctaData.heading.split('\n').map((line, i) => (
              <span key={i}>{line}{i < ctaData.heading.split('\n').length - 1 && <br />}</span>
            ))}
          </h2>
          <p className="text-white/80 text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            {ctaData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {ctaData.buttons.map((btn) => (
              btn.variant === 'primary' ? (
                <button key={btn.label} className="bg-white text-[#3D3D3D] px-12 py-5 rounded-full hover:bg-[#F5F1ED] transition-all duration-300 hover:shadow-2xl transform hover:scale-105 text-base sm:text-lg">
                  {btn.label}
                </button>
              ) : (
                <button key={btn.label} className="border-2 border-white text-white px-12 py-5 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-base sm:text-lg">
                  {btn.label}
                </button>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
