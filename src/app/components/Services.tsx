import { motion } from 'motion/react';
import { Building2, HardHat, Package } from 'lucide-react';
import { useInView } from './useInView';

export function Services() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const services = [
    {
      icon: Building2,
      title: 'Real Estate Development',
      description:
        'Premium residential and commercial properties designed to meet the highest standards of modern living and business excellence.',
      color: '#0F3D3E',
    },
    {
      icon: HardHat,
      title: 'Construction Services',
      description:
        'Full-service construction solutions from foundation to finish, delivering projects on time and within budget with uncompromising quality.',
      color: '#C9A14A',
    },
    {
      icon: Package,
      title: 'Block Factory',
      description:
        'State-of-the-art block manufacturing facility producing high-quality concrete blocks for construction projects across Ghana.',
      color: '#0F3D3E',
    },
  ];

  return (
    <section
      id="services"
      className="py-24"
      style={{ backgroundColor: '#F8F8F8' }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: '#C9A14A20', color: '#C9A14A' }}
            >
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0F3D3E' }}>
              What We Do Best
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Comprehensive construction and real estate solutions tailored to your needs
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                whileHover={{ y: -10 }}
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <Icon size={32} color={service.color} />
                </div>

                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F3D3E' }}>
                  {service.title}
                </h3>

                <p className="leading-relaxed" style={{ color: '#666666' }}>
                  {service.description}
                </p>

                <button
                  className="mt-6 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform"
                  style={{ color: '#C9A14A' }}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
