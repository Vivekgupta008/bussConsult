import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="w-20 h-20 mx-auto mb-8"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold gradient-text">BC</span>
          </div>
        </motion.div>
        
        <motion.h1
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Business Consultancy
        </motion.h1>
        
        <motion.p
          className="text-white/80 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Shaping Businesses for Tomorrow
        </motion.p>
        
        <motion.div
          className="mt-8 w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1.5 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
