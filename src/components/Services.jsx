import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  BarChart3, 
  Target, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Shield,
  ChevronDown,
  ChevronUp,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Strategic Planning',
      icon: <Target className="w-8 h-8" />,
      shortDescription: 'Comprehensive business strategy development and implementation.',
      fullDescription: 'We help you develop robust strategic plans that align with your business objectives. Our approach includes market analysis, competitive positioning, and long-term growth planning.',
      features: [
        'Market Analysis & Research',
        'Competitive Intelligence',
        'Strategic Roadmap Development',
        'Performance Metrics & KPIs',
        'Risk Assessment & Mitigation'
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Digital Transformation',
      icon: <BarChart3 className="w-8 h-8" />,
      shortDescription: 'Modernize your business with cutting-edge digital solutions.',
      fullDescription: 'Transform your business operations with digital technologies. We guide you through the entire digital transformation journey, from strategy to implementation.',
      features: [
        'Technology Assessment',
        'Digital Strategy Development',
        'Process Automation',
        'Cloud Migration',
        'Change Management'
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      title: 'Operations Optimization',
      icon: <TrendingUp className="w-8 h-8" />,
      shortDescription: 'Streamline operations for maximum efficiency and productivity.',
      fullDescription: 'Optimize your business processes to reduce costs, improve quality, and increase customer satisfaction through data-driven operational improvements.',
      features: [
        'Process Mapping & Analysis',
        'Workflow Optimization',
        'Resource Allocation',
        'Quality Management',
        'Performance Monitoring'
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      title: 'Team Development',
      icon: <Users className="w-8 h-8" />,
      shortDescription: 'Build high-performing teams through targeted development programs.',
      fullDescription: 'Develop your workforce capabilities with comprehensive training programs, leadership development, and organizational culture enhancement.',
      features: [
        'Leadership Development',
        'Skills Assessment',
        'Training Programs',
        'Performance Management',
        'Culture Transformation'
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 5,
      title: 'Innovation Consulting',
      icon: <Lightbulb className="w-8 h-8" />,
      shortDescription: 'Foster innovation and drive creative solutions for growth.',
      fullDescription: 'Unlock your organization\'s innovative potential with structured approaches to ideation, product development, and market disruption strategies.',
      features: [
        'Innovation Strategy',
        'Ideation Workshops',
        'Product Development',
        'Market Research',
        'Innovation Metrics'
      ],
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 6,
      title: 'Risk Management',
      icon: <Shield className="w-8 h-8" />,
      shortDescription: 'Protect your business with comprehensive risk management strategies.',
      fullDescription: 'Identify, assess, and mitigate business risks to ensure sustainable growth and protect your organization from potential threats.',
      features: [
        'Risk Assessment',
        'Compliance Management',
        'Business Continuity',
        'Crisis Management',
        'Insurance Optimization'
      ],
      color: 'from-red-500 to-red-600',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const toggleExpanded = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="services" className="section-padding bg-slate-50 dark:bg-slate-800">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive business solutions designed to drive growth, efficiency, 
            and innovation across all aspects of your organization.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden h-full">
                {/* Card Header */}
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Expandable Content */}
                  <motion.div
                    className="overflow-hidden"
                    initial={false}
                    animate={{
                      height: expandedCard === service.id ? 'auto' : 0,
                      opacity: expandedCard === service.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-4">
                      <p className="text-slate-600 dark:text-slate-300">
                        {service.fullDescription}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                          What's Included:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              className="flex items-center space-x-2 text-slate-600 dark:text-slate-300"
                              initial={{ opacity: 0, x: -10 }}
                              animate={expandedCard === service.id ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.1 }}
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Toggle Button */}
                  <motion.button
                    onClick={() => toggleExpanded(service.id)}
                    className="w-full mt-4 py-2 px-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-sm font-medium">
                      {expandedCard === service.id ? 'Show Less' : 'Learn More'}
                    </span>
                    {expandedCard === service.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </motion.button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <motion.button
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
