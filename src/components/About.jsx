import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: '2003',
      title: 'Company Founded',
      description: 'Started with a vision to transform businesses through strategic consulting.',
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      year: '2008',
      title: 'First Major Success',
      description: 'Helped 50+ companies achieve 200% growth in their respective markets.',
      icon: <Target className="w-6 h-6" />,
    },
    {
      year: '2015',
      title: 'International Expansion',
      description: 'Expanded services globally, serving clients across 25+ countries.',
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: '2023',
      title: 'Digital Transformation',
      description: 'Leading the charge in AI-powered business solutions and digital innovation.',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: '20+ years in strategic consulting with Fortune 500 companies.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Technology visionary specializing in digital transformation.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Strategy',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Expert in market analysis and business development strategies.',
    },
    {
      name: 'David Thompson',
      role: 'Lead Consultant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Operations specialist with focus on process optimization.',
    },
  ];

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
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About <span className="gradient-text">Our Company</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We are a leading business consultancy firm dedicated to helping companies 
            achieve sustainable growth through innovative strategies and expert guidance.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-600"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                variants={itemVariants}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-primary-500 text-white rounded-lg">
                        {item.icon}
                      </div>
                      <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-slate-900"></div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 group-hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                      {member.name}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '25+', label: 'Countries Served' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '15+', label: 'Industry Awards' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">
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

export default About;
