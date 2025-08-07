'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const GrantFooter = () => {
  const [copiedDiscord, setCopiedDiscord] = useState(false)
  
  const handleDiscordClick = () => {
    navigator.clipboard.writeText('221o7')
    setCopiedDiscord(true)
    setTimeout(() => setCopiedDiscord(false), 2000)
  }
  
  const socialLinks = [
    { name: 'Email', href: 'mailto:grantgao221@gmail.com' },
    { name: 'Resume', href: '/resume.pdf', target: '_blank' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/grant221' },
    { name: 'GitHub', href: 'https://github.com/ggao50' },
    { name: copiedDiscord ? 'Copied!' : 'Discord: 221o7', href: '#', onClick: handleDiscordClick },
  ]

  return (
    <footer id="contact" className="py-32 relative bg-transparent">
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-28"
        >
          <h2 className="text-[calc(2.5rem+2vw)] font-semibold tracking-tight mb-10">
            Let's Work Together
          </h2>
          <p className="text-[17px] text-text-light/90 mb-16 max-w-[650px] mx-auto leading-[1.85]">
            I'm always interested in new projects and collaborations. 
            Feel free to reach out if you'd like to work together.
          </p>
          
          <motion.a
            href="mailto:grantgao221@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-[14px] font-medium hover:bg-text-light transition-colors"
          >
            Get in touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-12"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Social Links - Centered */}
            <div className="flex items-center justify-center gap-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.target || "_blank"}
                  rel="noopener noreferrer"
                  onClick={link.onClick ? (e) => { e.preventDefault(); link.onClick(); } : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-[14px] text-text-light hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Copyright and Back to top - Centered */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <p className="text-[12px] text-text-light/60">
                © 2024 Grant Gao. All rights reserved.
              </p>
              
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ y: -2 }}
                className="text-[12px] text-text-light/60 hover:text-white transition-colors flex items-center gap-2"
              >
                Back to top
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="rotate-[-90deg]">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default GrantFooter