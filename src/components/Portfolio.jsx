import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  DollarSign,
  Calendar,
  Target
} from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: 'TechStart Digital Transformation',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      challenge: 'A growing tech startup needed to scale their operations and implement digital solutions to handle rapid growth.',
      solution: 'Implemented a comprehensive digital transformation strategy including cloud migration, process automation, and data analytics.',
      results: [
        { metric: '300%', label: 'Increase in Efficiency' },
        { metric: '50%', label: 'Reduction in Costs' },
        { metric: '200%', label: 'Growth in Revenue' },
        { metric: '95%', label: 'Customer Satisfaction' }
      ],
      duration: '6 months',
      team: '8 consultants',
      industry: 'Technology',
    },
    {
      id: 2,
      title: 'ManufacturingCo Process Optimization',
      category: 'Operations',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      challenge: 'A manufacturing company was struggling with inefficient processes and high operational costs.',
      solution: 'Conducted comprehensive process analysis and implemented lean manufacturing principles with advanced automation.',
      results: [
        { metric: '40%', label: 'Reduction in Waste' },
        { metric: '60%', label: 'Faster Production' },
        { metric: '25%', label: 'Cost Savings' },
        { metric: '99%', label: 'Quality Rate' }
      ],
      duration: '8 months',
      team: '12 consultants',
      industry: 'Manufacturing',
    },
    {
      id: 3,
      title: 'RetailChain Customer Experience',
      category: 'Customer Experience',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      challenge: 'A retail chain needed to improve customer experience and increase loyalty in a competitive market.',
      solution: 'Developed a customer-centric strategy with personalized experiences, loyalty programs, and omnichannel integration.',
      results: [
        { metric: '150%', label: 'Customer Retention' },
        { metric: '80%', label: 'Satisfaction Score' },
        { metric: '120%', label: 'Sales Growth' },
        { metric: '90%', label: 'Brand Loyalty' }
      ],
      duration: '4 months',
      team: '6 consultants',
      industry: 'Retail',
    },
    {
      id: 4,
      title: 'FinanceCorp Risk Management',
      category: 'Risk Management',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      challenge: 'A financial services company needed to strengthen their risk management framework and compliance.',
      solution: 'Implemented comprehensive risk assessment tools, compliance monitoring systems, and staff training programs.',
      results: [
        { metric: '70%', label: 'Risk Reduction' },
        { metric: '100%', label: 'Compliance Rate' },
        { metric: '45%', label: 'Cost Reduction' },
        { metric: '85%', label: 'Audit Score' }
      ],
      duration: '10 months',
      team: '15 consultants',
      industry: 'Financial Services',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="portfolio" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Discover how we've helped businesses across various industries achieve 
            remarkable growth and transformation.
          </p>
        </motion.div>

        {/* Case Study Slider */}
        <motion.div
          ref={ref}
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-2xl">
            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </motion.button>

            {/* Slide Content */}
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={study.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-96 lg:h-auto">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-medium mb-2">
                          {study.category}
                        </span>
                        <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                        <div className="flex items-center space-x-4 text-sm opacity-90">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{study.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{study.team}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Target className="w-4 h-4" />
                            <span>{study.industry}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12">
                      <motion.div
                        variants={itemVariants}
                        className="space-y-6"
                      >
                        {/* Challenge */}
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                            Challenge
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300">
                            {study.challenge}
                          </p>
                        </div>

                        {/* Solution */}
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                            Solution
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300">
                            {study.solution}
                          </p>
                        </div>

                        {/* Results */}
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            Results
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            {study.results.map((result, resultIndex) => (
                              <motion.div
                                key={resultIndex}
                                className="text-center p-4 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: resultIndex * 0.1 }}
                              >
                                <div className="text-2xl font-bold gradient-text mb-1">
                                  {result.metric}
                                </div>
                                <div className="text-sm text-slate-600 dark:text-slate-300">
                                  {result.label}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <motion.button
                          className="w-full py-3 px-6 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>View Full Case Study</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {caseStudies.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-primary-500 scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Portfolio Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            { number: '500+', label: 'Projects Completed', icon: <TrendingUp className="w-8 h-8" /> },
            { number: '98%', label: 'Success Rate', icon: <Target className="w-8 h-8" /> },
            { number: '200%', label: 'Average ROI', icon: <DollarSign className="w-8 h-8" /> },
            { number: '25+', label: 'Industries Served', icon: <Users className="w-8 h-8" /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-primary-500 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
