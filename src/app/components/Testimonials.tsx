import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useInView } from './useInView';

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const testimonials = [
    {
      name: 'Kwame Mensah',
      role: 'CEO, Tech Solutions Ghana',
      image:
        'https://images.unsplash.com/photo-1616804827035-f4aa814c14ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc0NDIwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'AFRODEQUE VENTURES delivered our commercial building ahead of schedule and exceeded all our expectations. Their professionalism and attention to detail is unmatched.',
      rating: 5,
    },
    {
      name: 'Akua Boateng',
      role: 'Property Developer',
      image:
        'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDQ2Mzk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'Working with AFRODEQUE has been a game-changer for my real estate projects. Their quality standards and commitment to excellence are truly remarkable.',
      rating: 5,
    },
    {
      name: 'Kofi Asante',
      role: 'Business Owner',
      image:
        'https://images.unsplash.com/photo-1645736593731-4eef033ac37a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3NtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ1MTgzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'From start to finish, the team at AFRODEQUE demonstrated exceptional expertise. They transformed our vision into reality with precision and care.',
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
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
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0F3D3E' }}>
              What Our Clients Say
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#C9A14A" color="#C9A14A" />
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 leading-relaxed italic" style={{ color: '#666666' }}>
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold" style={{ color: '#0F3D3E' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm" style={{ color: '#666666' }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
