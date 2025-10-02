import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [swiper, setSwiper] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'CEO',
      company: 'TechInnovate Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The strategic guidance provided by Business Consultancy transformed our company completely. Their expertise in digital transformation helped us increase our efficiency by 300% and reduce costs significantly.',
      industry: 'Technology',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Operations Director',
      company: 'ManufacturingCo',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Outstanding service! The team\'s process optimization strategies revolutionized our manufacturing operations. We achieved 40% waste reduction and 60% faster production times.',
      industry: 'Manufacturing',
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Marketing Director',
      company: 'RetailChain',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The customer experience strategy they developed for us was phenomenal. We saw 150% increase in customer retention and 120% growth in sales within just 4 months.',
      industry: 'Retail',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'CFO',
      company: 'FinanceCorp',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Their risk management framework implementation was exceptional. We achieved 70% risk reduction and 100% compliance rate while reducing costs by 45%.',
      industry: 'Financial Services',
    },
    {
      id: 5,
      name: 'Lisa Johnson',
      role: 'HR Director',
      company: 'HealthcarePlus',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The team development programs they created for us were transformative. Our employee satisfaction increased by 85% and productivity improved by 200%.',
      industry: 'Healthcare',
    },
    {
      id: 6,
      name: 'Robert Kim',
      role: 'Founder',
      company: 'StartupXYZ',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'As a startup, we needed strategic guidance to scale effectively. Business Consultancy provided invaluable insights that helped us secure Series A funding and grow 500% in revenue.',
      industry: 'Startup',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-50 to-primary-100 dark:from-slate-800 dark:to-slate-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say 
            about their transformation journey with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          ref={ref}
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Custom Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            <motion.button
              onClick={() => swiper?.slidePrev()}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-slate-700 dark:text-slate-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={() => swiper?.slideNext()}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-slate-700 dark:text-slate-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={setSwiper}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  variants={itemVariants}
                  className="h-full"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="text-primary-500 mb-4">
                      <Quote className="w-8 h-8" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {testimonial.role}, {testimonial.company}
                        </p>
                        <span className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full mt-1">
                          {testimonial.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="swiper-pagination"></div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[
                'TechInnovate Inc.',
                'ManufacturingCo',
                'RetailChain',
                'FinanceCorp',
                'HealthcarePlus',
                'StartupXYZ',
                'GlobalCorp',
                'InnovationLabs'
              ].map((company, index) => (
                <motion.div
                  key={company}
                  className="text-slate-600 dark:text-slate-400 font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
