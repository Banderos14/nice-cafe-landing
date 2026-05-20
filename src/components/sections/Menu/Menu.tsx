import { motion } from 'motion/react';
import { useInView } from '../../../hooks/useInView';
import { menuData } from '../../../data/menu';

export function Menu() {
  const { ref, inView } = useInView();

  return (
    <section id="menu" ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-[#8B6F47] mb-4 tracking-widest text-sm">{menuData.label}</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#3D3D3D] mb-6">{menuData.heading}</h2>
          <p className="text-[#3D3D3D]/70 text-base sm:text-lg max-w-2xl mx-auto">{menuData.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl text-[#3D3D3D]">{item.name}</h3>
                <span className="text-[#8B6F47] text-xl">{menuData.currency}{item.price}</span>
              </div>
              <p className="text-[#3D3D3D]/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
