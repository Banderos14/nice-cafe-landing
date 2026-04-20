import { motion } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { useInView } from '../../../hooks/useInView';
import { useState, useEffect } from 'react';
import { galleryData } from '../../../data/gallery';

export function Gallery() {
  const { ref, inView } = useInView();
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  return (
    <section id="gallery" ref={ref} className="py-32 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-[#8B6F47] mb-4 tracking-widest text-sm">{galleryData.label}</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#3D3D3D] mb-6">{galleryData.heading}</h2>
          <p className="text-[#3D3D3D]/70 text-base sm:text-lg max-w-2xl mx-auto">{galleryData.description}</p>
        </motion.div>

        <Masonry columnsCount={columns} gutter="24px">
          {galleryData.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
