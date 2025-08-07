'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const GrantNavigation = () => {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 h-[100px] bg-gradient-to-b from-black via-black/90 to-transparent backdrop-blur-sm"
    >
      <nav className="max-w-content mx-auto h-full flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="text-[18px] font-semibold text-white hover:text-text-light transition-colors tracking-tight">
          Grant Gao
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-10">
          <Link 
            href="#works" 
            className="text-[15px] text-text-light hover:text-white transition-colors font-light tracking-wide"
          >
            Works
          </Link>
          <Link 
            href="#about" 
            className="text-[15px] text-text-light hover:text-white transition-colors font-light tracking-wide"
          >
            About
          </Link>
          <Link 
            href="#contact" 
            className="text-[15px] text-text-light hover:text-white transition-colors font-light tracking-wide"
          >
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

export default GrantNavigation