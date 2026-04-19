import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const menuItems = [
  {
    name: 'Espresso',
    description: 'Single origin, rich and bold',
    price: '3.50',
    image: 'https://images.unsplash.com/photo-1607618421926-b72c6a99c342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMG1hY2hpbmUlMjBiYXJpc3RhfGVufDF8fHx8MTc3NjYxNTI3MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Cappuccino',
    description: 'Velvety foam, perfect balance',
    price: '4.50',
    image: 'https://images.unsplash.com/photo-1643909618082-d916d591c2a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vJTIwZm9hbSUyMGFydxlbnwxfHx8fDE3NzY2MTUyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Latte Art',
    description: 'Smooth espresso, steamed milk',
    price: '4.80',
    image: 'https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NzY1Mjk0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Pour Over',
    description: 'Handcrafted precision brewing',
    price: '5.50',
    image: 'https://images.unsplash.com/photo-1550559256-32644b7a2993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwb3VyJTIwb3ZlciUyMGJyZXdpbmd8ZW58MXx8fHwxNzc2NjE1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Croissant',
    description: 'Flaky, buttery, authentic',
    price: '3.80',
    image: 'https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY3JvaXNzYW50JTIwcGFzdHJ5fGVufDF8fHx8MTc3NjYxNTI3MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Pastry Selection',
    description: 'Daily fresh from our bakery',
    price: '4.20',
    image: 'https://images.unsplash.com/photo-1775327658475-eeb1c8fd2639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBwYXN0cnklMjBkaXNwbGF5fGVufDF8fHx8MTc3NjYxNTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

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
          <div className="text-[#8B6F47] mb-4 tracking-widest text-sm">MENU</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#3D3D3D] mb-6">Our Selection</h2>
          <p className="text-[#3D3D3D]/70 text-base sm:text-lg max-w-2xl mx-auto">
            Carefully curated drinks and pastries, crafted daily with love and attention to detail
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
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
                <span className="text-[#8B6F47] text-xl">€{item.price}</span>
              </div>
              <p className="text-[#3D3D3D]/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}