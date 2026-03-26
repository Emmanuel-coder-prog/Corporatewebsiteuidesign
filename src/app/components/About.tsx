import { motion } from 'motion/react';
import { useInView } from './useInView';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1760009436767-d154e930e55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDUxODMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Construction team"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-8"
              style={{
                background: 'linear-gradient(to top, rgba(15, 61, 62, 0.9), transparent)',
              }}
            >
              <p className="text-white text-lg font-semibold">25+ Years of Excellence</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-4">
              <span
                className="inline-block px-4 py-1 rounded-full text-sm font-semibold"
                style={{ backgroundColor: '#C9A14A20', color: '#C9A14A' }}
              >
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#0F3D3E' }}>
              Building Dreams,
              <br />
              Creating Legacies
            </h2>

            <p className="text-lg mb-6" style={{ color: '#666666' }}>
              AFRODEQUE VENTURES is Ghana's leading construction and real estate development
              company, dedicated to transforming the landscape with innovative, sustainable, and
              world-class projects.
            </p>

            <p className="text-lg mb-8" style={{ color: '#666666' }}>
              With over 25 years of experience in the industry, we specialize in real estate
              development, construction services, and block factory production. Our commitment to
              excellence has made us the trusted partner for clients seeking quality,
              reliability, and innovation.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-4xl font-bold mb-2" style={{ color: '#C9A14A' }}>
                  500+
                </h3>
                <p className="text-sm" style={{ color: '#666666' }}>
                  Projects Completed
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2" style={{ color: '#C9A14A' }}>
                  25+
                </h3>
                <p className="text-sm" style={{ color: '#666666' }}>
                  Years Experience
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2" style={{ color: '#C9A14A' }}>
                  100%
                </h3>
                <p className="text-sm" style={{ color: '#666666' }}>
                  Client Satisfaction
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
