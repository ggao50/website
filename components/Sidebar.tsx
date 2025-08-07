'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import NumberPad from './NumberPad'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [secretCode, setSecretCode] = useState('')

  const navLinks = [
    { href: '#', label: 'Home', icon: '🏠' },
    { href: '#works', label: 'Works', icon: '💼' },
    { href: '#about', label: 'About', icon: '👤' },
    { href: '#contact', label: 'Contact', icon: '📧' },
  ]

  const socialLinks = [
    { href: 'https://github.com/ggao50', label: 'GitHub', icon: '🔗' },
    { href: 'https://instagram.com/grantgao', label: 'Instagram', icon: '📷' },
    { href: 'https://twitter.com/grantgao', label: 'Twitter', icon: '🐦' },
    { href: 'mailto:grantgao221@gmail.com', label: 'Email', icon: '✉️' },
  ]

  const handleNumberInput = (code: string) => {
    setSecretCode(code)
    // Easter egg: certain codes could trigger special actions
    if (code === '1337') {
      alert('Elite mode activated! 🎉')
    } else if (code === '2024') {
      alert('Welcome to the future! 🚀')
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-[60] w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg border-2 border-black"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xl font-bold"
        >
          {isOpen ? '×' : '☰'}
        </motion.div>
      </motion.button>

      {/* Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed left-0 top-0 h-full w-80 bg-white text-black z-[55] shadow-2xl overflow-y-auto"
      >
        <div className="p-6 pt-20">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Grant Gao</h2>
            <p className="text-gray-600">Roboticist & Creative</p>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Number Pad Section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Quick Access</h3>
            <NumberPad onNumberPress={handleNumberInput} />
            {secretCode && (
              <p className="text-xs text-gray-500 mt-2 text-center">
                Code: {secretCode}
              </p>
            )}
          </div>

          {/* Social Links */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Connect</h3>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg border border-gray-200 hover:border-gray-400 transition-colors"
                >
                  <span>{link.icon}</span>
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              © 2024 Grant Gao. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-[50]"
        />
      )}
    </>
  )
}

export default Sidebar