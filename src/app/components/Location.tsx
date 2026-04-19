import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { MapPin, Clock, Phone } from 'lucide-react';

export function Location() {
  const { ref, inView } = useInView();

  return (
    <section id="location" ref={ref} className="py-32 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-[#8B6F47] mb-4 tracking-widest text-sm">LOCATION</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#3D3D3D] mb-6">Visit Us</h2>
          <p className="text-[#3D3D3D]/70 text-base sm:text-lg max-w-2xl mx-auto">
            Find us in the heart of Nice, just steps from the Promenade des Anglais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92508.12345678!2d7.2620!3d43.7102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0106a852d31%3A0x40819a5fd979a70!2sNice%2C%20France!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Café Riviera Location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
                  <MapPin className="w-7 h-7 text-[#8B6F47]" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-[#3D3D3D] mb-2">Address</h3>
                <p className="text-[#3D3D3D]/70 text-lg">
                  15 Avenue Jean Médecin<br />
                  06000 Nice, France
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Clock className="w-7 h-7 text-[#8B6F47]" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-[#3D3D3D] mb-2">Hours</h3>
                <p className="text-[#3D3D3D]/70 text-lg">
                  Monday - Friday: 7:00 - 19:00<br />
                  Saturday - Sunday: 8:00 - 20:00
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Phone className="w-7 h-7 text-[#8B6F47]" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl text-[#3D3D3D] mb-2">Contact</h3>
                <p className="text-[#3D3D3D]/70 text-lg">
                  +33 4 93 87 65 43<br />
                  hello@caferiviera.fr
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button className="w-full bg-[#8B6F47] text-white px-10 py-4 rounded-full hover:bg-[#6B543A] transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                Get Directions
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}