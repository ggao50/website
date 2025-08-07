'use client'

import { motion } from 'framer-motion'
import InteractiveKeyboard from './InteractiveKeyboard'

const ContactSection = () => {
  const socialLinks = [
    { name: 'Email', href: 'mailto:grantgao221@gmail.com', icon: '✉️' },
    { name: 'GitHub', href: 'https://github.com/ggao50', icon: '🔗' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate on something exciting? 
            I'm always open to discussing new opportunities and creative challenges.
          </p>

          {/* Interactive Keyboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <InteractiveKeyboard />
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-16"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-6 py-4 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-accent-blue transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-6 py-4 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-accent-blue transition-colors"
              />
            </div>
            
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-6 py-4 mb-6 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-accent-blue transition-colors resize-none"
            />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent-blue text-white rounded-full hover:bg-accent-blue/80 transition-all duration-300 hover-glow"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 mb-6">Or find me on</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <span className="text-2xl">{link.icon}</span>
                  </div>
                  <span className="text-xs text-white/50 mt-2 block group-hover:text-white/80 transition-colors">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/10 text-center text-white/40"
        >
          <p>© 2024 Grant Gao. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.footer>
      </div>
    </section>
  )
}

export default ContactSection