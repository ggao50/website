'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const GrantHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[100px] bg-transparent">

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main heading */}
          <h1 className="text-[calc(3.5rem+3vw)] font-semibold leading-[0.95] tracking-tight mb-6">
            Grant Gao
          </h1>
          
          {/* Subtitle */}
          <p className="text-[calc(1.125rem+0.5vw)] text-text-light font-light tracking-wide mb-8">
            Roboticist & Mechanical Engineer
          </p>

          {/* Description */}
          <p className="text-[18px] text-text-light/80 max-w-[650px] mx-auto leading-[1.7] mb-16">
            Passionate about creating and bringing 3D designs to life through precision engineering and advanced manufacturing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="#works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-black rounded-full text-[14px] font-medium hover:bg-text-light transition-colors"
            >
              View Works
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/30 text-white rounded-full text-[14px] font-medium hover:border-white/60 hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/30 text-white rounded-full text-[14px] font-medium hover:border-white/60 hover:bg-white/10 transition-all"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>

        {/* 3D Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 relative inline-block"
        >
          <div className="relative w-[300px] h-[300px] mx-auto">
            {/* Animated gradient sphere */}
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0"
            >
              <div 
                className="w-full h-full rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #ffffff, #d1ffc4, #02c28f, #1c86ff, #ffffff)',
                  filter: 'blur(40px)',
                  opacity: 0.6,
                }}
              />
            </motion.div>
            
            {/* Center sphere */}
            <div className="absolute inset-8 bg-black rounded-full border border-white/10" />
            
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                className="absolute w-2 h-2 bg-accent-green rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 15}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1"
        >
          <div className="w-1 h-1 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GrantHero