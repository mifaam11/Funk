'use client';

import Image from 'next/image';
import model from '@/assets/model.png';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden pt-20">
      {/* Gradient Background Stripe */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 z-0" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900/90 z-0" />

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-20 max-w-md lg:max-w-xl space-y-6 md:space-y-8 text-center lg:text-left mb-10 lg:mb-0"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
          <span className="text-white">
            GEAR UP FOR
          </span>
          <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">GREATNESS</span>.
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
          Premium performance wear engineered for athletes.
          <motion.span
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
            className="inline-block mt-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-purple-500/30"
          >
            25% OFF NEW COLLECTION
          </motion.span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-blue-500/40"
          >
            SHOP NOW
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(to right, rgba(37, 99, 235, 0.1), rgba(168, 85, 247, 0.1))",
              boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white/80 text-white hover:border-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-purple-500/20"
          >
            EXPLORE COLLECTION
          </motion.button>
        </div>
      </motion.div>

      {/* Right Side Image */}
      <div className="relative w-full lg:w-[55%] h-[50vh] sm:h-[70vh] lg:h-full flex items-end justify-center">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-gray-900/80 via-gray-900/30 to-transparent z-10" />

        {/* Model Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-full"
        >
          <Image
            src={model}
            alt="Fitness Model"
            fill
            priority
            quality={100}
            className="object-contain object-bottom lg:object-right-bottom"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 55vw"
          />
        </motion.div>
      </div>
    </section>
  );
}