import { motion } from 'motion/react';
import { Award, Lightbulb, Users } from 'lucide-react';
import { useInView } from './useInView';

export function WhyChooseUs() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: Award,
      title: 'Experience',
      description:
        'Over 25 years of proven expertise in construction and real estate development across Ghana.',
    },
    {
      icon: Users,
      title: 'Quality',
      description:
        'Uncompromising commitment to excellence in every project, using only the finest materials.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Cutting-edge construction techniques and sustainable building practices for modern living.',
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: '#0F3D3E' }}
      ref={ref}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: '#C9A14A30', color: '#C9A14A' }}
            >
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Built on Trust, Quality & Innovation
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-white/80">
              Your trusted partner for construction excellence in Ghana
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 rounded-lg backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: '#C9A14A20' }}
                >
                  <Icon size={40} color="#C9A14A" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>

                <p className="leading-relaxed text-white/70">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '500+', label: 'Completed Projects' },
            { value: '25+', label: 'Years Experience' },
            { value: '1000+', label: 'Happy Clients' },
            { value: '50+', label: 'Team Members' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#C9A14A' }}>
                {stat.value}
              </h3>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
