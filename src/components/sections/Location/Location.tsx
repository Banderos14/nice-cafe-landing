import { motion } from 'motion/react';
import { useInView } from '../../../hooks/useInView';
import { MapPin, Clock, Phone } from 'lucide-react';
import { locationData } from '../../../data/location';
import { siteData } from '../../../data/site';

export function Location() {
  const { ref, inView } = useInView();
  const { contact } = siteData;

  return (
    <section id="location" ref={ref} className="py-32 bg-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-[#8B6F47] mb-4 tracking-widest text-sm">{locationData.label}</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#3D3D3D] mb-6">{locationData.heading}</h2>
          <p className="text-[#3D3D3D]/70 text-base sm:text-lg max-w-2xl mx-auto">{locationData.description}</p>
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
              src={locationData.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteData.name} Location`}
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
                  {contact.address}<br />
                  {contact.city}
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
                  {locationData.hours.weekdays}<br />
                  {locationData.hours.weekends}
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
                  {contact.phone}<br />
                  {contact.email}
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button className="w-full bg-[#8B6F47] text-white px-10 py-4 rounded-full hover:bg-[#6B543A] transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                {locationData.directionsCta}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
